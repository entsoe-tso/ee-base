'use strict';
var fs = require('fs');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var browserSync = require('browser-sync');
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

// /////////////////////////////////////////////////////////////////////////////
// --------------------------- Variables -------------------------------------//
// ---------------------------------------------------------------------------//

// The package.json
var pkg;

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Helper functions --------------------------------//
// ---------------------------------------------------------------------------//

function readPackage () {
  pkg = JSON.parse(fs.readFileSync('package.json'));
}
readPackage();

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Callable tasks ----------------------------------//
// ---------------------------------------------------------------------------//

gulp.task('serve', ['build'], function () {
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

  gulp.watch(['docs/**/*.html', 'docs/**/*.md', '_config*'], function() {
    runSequence('jekyll', reload);
  });

  // watch for changes
  gulp.watch(['assets/styles/*/*.scss'], function() {
    runSequence('styles', ['copy:assets'], reload)
  });

  // gulp.watch('assets/icons/**', ['oam:icons']);
  // gulp.watch('sandbox/assets/graphics/collecticons/**', ['collecticons']);

  // gulp.watch(['sandbox/assets/styles/**/*.scss', 'assets/styles/**/*.scss'], ['styles']);
  // gulp.watch('package.json', ['vendorScripts']);
});

gulp.task('clean', function () {
  return del(['.tmp', 'dist'])
    .then(function () {
      // $.cache.clearAll();
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
  return gulp.src('.tmp/assets/**')
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('_site/assets'));
});


gulp.task('copy:css', function(done) {
  return gulp.src('.tmp/assets/styles/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:fonts', function(done) {
  return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:images', function(done) {
  return gulp.src('assets/graphics/**')
    .pipe(gulp.dest('dist'))
});

gulp.task('copy', ['copy:css', 'copy:fonts', 'copy:images'], function(done) {

});


// Build the jekyll website.
gulp.task('jekyll', function (done) {
  var args = ['build'];
  args.push('--config=_config.yml');
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
    entries: ['./sandbox/assets/scripts/main.js'],
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

// Vendor scripts. Basically all the dependencies in the package.js.
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
// ------------------------ Collecticon tasks --------------------------------//
// -------------------- (Font generation related) ----------------------------//
// ---------------------------------------------------------------------------//
// gulp.task('collecticons', function (done) {
//   var args = [
//     'node_modules/collecticons-processor/bin/collecticons.js',
//     'compile',
//     'sandbox/assets/graphics/collecticons/',
//     '--font-embed',
//     '--font-dest', 'sandbox/assets/fonts',
//     '--font-name', 'Collecticons',
//     '--font-types', 'woff',
//     '--style-format', 'sass',
//     '--style-dest', 'sandbox/assets/styles/',
//     '--style-name', 'collecticons',
//     '--class-name', 'collecticons',
//     '--author-name', 'Development Seed',
//     '--author-url', 'https://developmentseed.org/',
//     '--no-preview'
//   ];

//   return cp.spawn('node', args, {stdio: 'inherit'})
//     .on('close', done);
// });

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- OAM icons tasks ---------------------------------//
// -------------------- (Font generation related) ----------------------------//
// ---------------------------------------------------------------------------//
// gulp.task('oam:icons', function (done) {
//   var args = [
//     'node_modules/collecticons-processor/bin/collecticons.js',
//     'compile',
//     'assets/icons/',
//     '--font-embed',
//     '--font-dest', 'assets/fonts',
//     '--font-name', 'OAM DS Icons',
//     '--font-types', 'woff',
//     '--style-format', 'sass',
//     '--style-dest', 'assets/styles/oam-design-system',
//     '--style-name', 'oam-ds-icons',
//     '--class-name', 'oam-ds-icon',
//     '--author-name', 'Development Seed',
//     '--author-url', 'https://developmentseed.org/',
//     '--no-preview'
//   ];

//   return cp.spawn('node', args, {stdio: 'inherit'})
//     .on('close', done);
// });

// //////////////////////////////////////////////////////////////////////////////
// --------------------------- Helper tasks -----------------------------------//
// ----------------------------------------------------------------------------//

gulp.task('styles', function () {
  return gulp.src('assets/styles/main.scss')
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
    // .pipe(reload({stream: true}));
});

// Main build task
// Builds the site. Destination --> _site
gulp.task('build', function(done) {
  runSequence('clean', ['jekyll', 'styles'], 'copy:assets', done);
});

function browserReload() {
  if (shouldReload) {
    browserSync.reload();
  }
}