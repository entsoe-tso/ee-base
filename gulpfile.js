'use strict';
var fs = require('fs');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var reload = browserSync.reload;
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var notifier = require('node-notifier');
var cp = require('child_process');
var runSequence = require('run-sequence');
var OAM_ADDONS = require('./gulp-addons');

var YAML = require('yamljs');

var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var exit = require('gulp-exit');

// /////////////////////////////////////////////////////////////////////////////
// --------------------------- Variables -------------------------------------//
// ---------------------------------------------------------------------------//

// The package.json
var pkg;

console.log("EE_ENV = ", process.env.EE_ENV)

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Helper functions --------------------------------//
// ---------------------------------------------------------------------------//

function readPackage () {
  pkg = JSON.parse(fs.readFileSync('package.json'));
}
readPackage();

var prodBuild = false;

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Callable tasks ----------------------------------//
// ---------------------------------------------------------------------------//

gulp.task('serve', ['build', 'vendorScripts', 'javascript'], function () {
  browserSync({
    port: 3000,
    server: {
      baseDir: ['.tmp', '_site'],
      routes: {
        '/node_modules': './node_modules'
      },
      middleware: OAM_ADDONS.graphicsMiddleware(fs)
    }
  });

  gulp.watch(['docs/**/*.html', 'docs/**/*.md', '_config*'], ['jekyll', reload]);

  // watch for changes
  gulp.watch(['assets/styles/*/*.scss'], ['styles', 'copy:assets']);

  gulp.watch('package.json', ['vendorScripts']);
});

gulp.task('clean', function () {
  return del(['.tmp', '_site'])
    .then(function () {
      $.cache.clearAll();
    });
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//-------------------------- Copy tasks --------------------------------------//
//----------------------------------------------------------------------------//

// Copy from the .tmp to _site directory.
// To reduce build times the assets are compiles at the same time as jekyll
// renders the site. Once the rendering has finished the assets are copied.
gulp.task('copy:assets', function(done) {
  return gulp.src('.tmp/assets/**/*')
    // .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('_site/assets'));
});

// gulp.task('copy:assets1', function(done) {
//   return gulp.src('dist/**')
//     .pipe(gulp.dest('_site/assets'));
// });

// gulp.task('copy:css', function(done) {
//   return gulp.src('.tmp/assets/styles/*')
//     .pipe(gulp.dest('dist/styles'));
// });

// gulp.task('copy:fonts', function(done) {
//   return gulp.src('assets/fonts/**/*')
//     .pipe(gulp.dest('dist'))
// });

// gulp.task('copy:images', function(done) {
//   return gulp.src('assets/graphics/**')
//     .pipe(gulp.dest('dist'))
// });

// gulp.task('copy', ['copy:css', 'copy:fonts', 'copy:images'], function(done) {

// });


// Build the jekyll website.
gulp.task('jekyll', function (done) {
  var args = ['build'];
  switch (process.env.EE_ENV) {
    case 'development':
      args.push('--config=_config-local.yml');
      break;
    case 'production':
      args.push('--config=_config-local.yml');
      break;
  }
  // args.push('--config=_config.yml');
  return cp.spawn('jekyll', args, {stdio: 'inherit'})
    .on('close', done);
});



// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Browserify tasks --------------------------------//
// ------------------- (Not to be called directly) ---------------------------//
// ---------------------------------------------------------------------------//

// Compiles the user's script files to bundle.js.
// When including the file in the index.html we need to refer to bundle.js not
// main.js
gulp.task('javascript', function () {
  var watcher = watchify(browserify({
    entries: ['./docs/assets/scripts/main.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function bundler () {
    if (pkg.dependencies) {
      watcher.external(Object.keys(pkg.dependencies));
    }
    return watcher.bundle()
      .on('error', function (e) {
        notifier.notify({
          title: 'Oops! Browserify errored:',
          message: e.message
        });
        console.log('Javascript error:', e);
        if (prodBuild) {
          process.exit(1);
        }
        // Allows the watch to continue.
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      // Source maps.
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.tmp/assets/scripts'))
      .pipe(reload({stream: true}));
  }

  watcher
  .on('log', gutil.log)
  .on('update', bundler);

  return bundler();
});

/// Vendor scripts. Basically all the dependencies in the package.js.
// Therefore be careful and keep the dependencies clean.
gulp.task('vendorScripts', function () {
  // Ensure package is updated.
  readPackage();
  var vb = browserify({
    debug: true,
    require: pkg.dependencies ? Object.keys(pkg.dependencies) : []
  });
  return vb.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/assets/scripts/'))
    .pipe(reload({stream: true}));
});


// /////////////////////////////////////////////////////////////////////////////
// ------------------------- EE icons tasks ---------------------------------//
// -------------------- (Font generation related) ----------------------------//
// ---------------------------------------------------------------------------//
gulp.task('ee:icons', function (done) {
  var args = [
    'node_modules/collecticons-processor/bin/collecticons.js',
    'compile',
    'assets/icons/',
    '--font-embed',
    '--font-dest', 'assets/fonts',
    '--font-name', 'ENTSO-E Icons',
    '--font-types', 'woff',
    '--style-format', 'sass',
    '--style-dest', 'assets/styles/ee-design-system',
    '--style-name', 'ee-icons',
    '--class-name', 'ee-icon',
    '--author-name', 'ENTSO-E',
    '--author-url', 'https://www.entsoe.eu/',
    '--no-preview'
  ];

  return cp.spawn('node', args, {stdio: 'inherit'})
    .on('close', done);
});

// //////////////////////////////////////////////////////////////////////////////
// --------------------------- Helper tasks -----------------------------------//
// ----------------------------------------------------------------------------//

gulp.task('styles', function () {
  return gulp.src('docs/assets/styles/main.scss')
    .pipe($.plumber(function (e) {
      notifier.notify({
        title: 'Oops! Sass errored:',
        message: e.message
      });
      console.log('Sass error:', e.toString());
      // Allows the watch to continue.
      this.emit('end');
    }))
    // .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: require('node-bourbon').with('node_modules/jeet/scss', 'assets/styles')
    }))
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/assets/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('styles:sp-icons', function () {
  return gulp.src('assets/styles/icons.scss')
    .pipe($.plumber(function (e) {
      notifier.notify({
        title: 'Oops! Sass errored:',
        message: e.message
      });
      console.log('Sass error:', e.toString());
      // Allows the watch to continue.
      this.emit('end');
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: require('node-bourbon').with('node_modules/jeet/scss', 'assets/styles')
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/assets/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('build', function () {
  gulp.start(['clean', 'vendorScripts', 'javascript', 'styles'], function () {
    gulp.start(['jekyll'], function () {
      gulp.start(['copy:assets'], function () {
        return gulp.src('_site/**/*')
          .pipe($.size({title: 'build', gzip: true}))
          .pipe(exit());
      });
    })

    // gulp.start(['copy:assets'], function () { //'copy:all', 'copy:temp', 'copy:assets1', 'copy:assets', '
    //   return gulp.src('_site/**/*')
    //     .pipe($.size({title: 'build', gzip: true}))
    //     .pipe(exit());
    // });
  });
});


function browserReload() {
  if (shouldReload) {
    browserSync.reload();
  }
}

// gulp.task('build:production',['copy:all', 'copy:temp']);


// //////////////////////////////////////////////////////////////////////////////
// ------------- Producing production ready versions --------------------------//
// ----------------------------------------------------------------------------//

// Copy from the .tmp to _site directory.
// To reduce build times the assets are compiles at the same time as jekyll
// renders the site. Once the rendering has finished the assets are copied.
gulp.task('copy:all', function(done) {
  return gulp.src(
    ['!**/*/main.js', './assets/**','!assets/{icons,icons/**}',
    '!./assets/styles/**/*'

    ])
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:temp', function(done) {
  return gulp.src(['.tmp/assets/**/*'])
    .pipe(gulp.dest('dist'));

});
gulp.task('copy:temp0', function(done) {
  return gulp.src(['.tmp/assets/scripts/*'])
    .pipe(gulp.dest('_site/assets/scripts'));

});
gulp.task('copy:temp1', function(done) {
  return gulp.src(['.tmp/assets/scripts/*'])
    .pipe(gulp.dest('_site/assets/scripts'));

});
gulp.task('copy:temp2', function(done) {
  return gulp.src(['dist/**/*'])
    .pipe(gulp.dest('_site/assets'));

});


gulp.task('default', ['clean', 'styles', 'javascript'], function () {
  prodBuild = true;
  gulp.start('build:production', function () {
    return gulp.src('dist/**/*').pipe(exit())
  });
});

// Create the icons catalog for the showcase.
gulp.task('ee-icons:catalog', function (done) {
  let data = fs.readFileSync('./assets/styles/ee-design-system/_ee-icons.scss', 'utf8');
  let regex = new RegExp('%(ee-icon-[a-z0-9-]+) {', 'mg');

  let icons = [];
  do {
    let matches = regex.exec(data);
    if (!matches) break;

    icons.push(matches[1]);
  } while (true);

  fs.mkdir('docs/_data', (err, res) => {
    if (err && err.code !== 'EEXIST') {
      console.log('err', err);
      if (prodBuild) {
        process.exit(1);
      }
      this.emit('end');
      return done();
    }
    fs.writeFileSync('docs/_data/ee-icons-catalog.json', JSON.stringify(icons));
    done();
  });
});
