---
nav: true
layout: docs
category: CSS
title: Components
description: Reusable components, including buttons, alerts and more.
permalink: components/
---



## Buttons

### Button Colours

<div class="exhibit">
  <div class="exhibit__content">
    <button class="button button--achromic " type="button"><span>Achromic</span></button>
    <button class="button button--base" type="submit"><span>Base</span></button>
    <a class="button button--primary" role="button"><span>Primary</span></a>
    <button class="button button--secondary" type="button"><span>Secondary</span></button>
    <button class="button button--base-unbounded" type="button"><span>Base unbounded</span></button>
    <button class="button button--primary-unbounded" type="button"><span>Primary unbounded</span></button>
    <button class="button button--secondary-unbounded" type="button"><span>Secondary unbounded</span></button>
    <a class="button button--base-bounded" role="button"><span>Base bounded</span></a>
    <button class="button button--primary-bounded" type="button"><span>Primary bounded</span></button>
    <button class="button button--secondary-bounded" type="button"><span>Secondary bounded</span></button>
    <button class="button button--warning-bounded" type="button"><span>Warning bounded</span></button>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<button class="button" type="button"><span>Achromic</span></button>
<button class="button fill-green" type="submit"><span>Base</span></button>
<a class="button fill-blue" role="button"><span>Primary</span></a>
<button class="button fill-grey" type="button"><span>Secondary</span></button>
<button class="button fill-red" type="button"><span>Base unbounded</span></button>
<button class="button button--primary-unbounded" type="button"><span>Primary unbounded</span></button>
<button class="button button--secondary-unbounded" type="button"><span>Secondary unbounded</span></button>
<button class="button button--warning-bounded" type="button"><span>Warning bounded</span></button>
{% endhighlight %}      
  </div>
</div>

<div class="exhibit">
  <div class="exhibit__content">
    <button class="button button--base-bounded button--small" type="button"><span>Small</span></button>
    <button class="button button--base-bounded button--medium" type="button"><span>Medium</span></button>
    <button class="button button--base-bounded button--large" type="button"><span>Large</span></button>
    <button class="button button--base-bounded button--xlarge" type="button"><span>Xlarge</span></button>
  </div>
  <div class="exhibit__caption">
  {% highlight html %}
    <button class="button button--base-bounded button--small" type="button"><span>Small</span></button>
    <button class="button button--base-bounded button--medium" type="button"><span>Medium</span></button>
    <button class="button button--base-bounded button--large" type="button"><span>Large</span></button>
    <button class="button button--base-bounded button--xlarge" type="button"><span>Xlarge</span></button>
  {% endhighlight %}
  </div>
</div>

<div class="exhibit">
  <div class="exhibit__content">
    <button class="button button--base button--large button--block" type="button"><span>Block</span></button>
    <button class="button button--base-bounded button--large button--semi-fluid" type="button"><span>Semi fluid</span></button>
  </div>
  <div class="exhibit__caption">
  {% highlight html %}
    <button class="button button--base button--large button--block" type="button"><span>Block</span></button>
    <button class="button button--base-bounded button--large button--semi-fluid" type="button"><span>Semi fluid</span></button>
  {% endhighlight %}
  </div>
</div>

<div class="exhibit">
  <div class="exhibit__content">
    <div class="button-group button-group--horizontal" role="group" aria-label="...">
      <button class="button button--base button--large button--active" type="button"><span>Left</span></button>
      <button class="button button--base button--large" type="button"><span>Middle</span></button>
      <button class="button button--base button--large" type="button"><span>Right</span></button>
    </div>
  </div>
  <div class="exhibit__caption">
  {% highlight html %}
    <div class="button-group button-group--horizontal" role="group" aria-label="...">
      <button class="button button--base button--large button--active" type="button"><span>Left</span></button>
      <button class="button button--base button--large" type="button"><span>Middle</span></button>
      <button class="button button--base button--large" type="button"><span>Right</span></button>
    </div>
  {% endhighlight %}
  </div>
</div>

## Forms

<div class="pad4 fill-red dark">Do not use the forms this is to be rewritten</div>

### Examples

<div class="exhibit">
  <div class="exhibit__content">
    <form class="form">
      <fieldset class="form__fieldset">
        <legend class="form__legend">Fieldset legend 1</legend>
        <div class="form__group">
          <label class="form__label" for="form-name">Input text</label>
          <input type="text" class="form__control form__control--medium" id="form-name" name="form-name" placeholder="This is a placeholder" />
        </div>
        <div class="form__group">
          <label class="form__label" for="form-email">Input email</label>
          <input type="email" class="form__control form__control--medium" id="form-email" name="form-email" placeholder="This is a placeholder" />
          <div class="form__help">
            <p>This is some help text.</p>
          </div>
        </div>
        <div class="form__group">
          <label class="form__label">Checkboxes</label>
          <label class="form__option">
            <input type="checkbox" name="form-checkbox" id="form-checkbox-1" value="Checkbox 1" /> Checkbox 1
          </label>
          <label class="form__option">
            <input type="checkbox" name="form-checkbox" value="form-checkbox-2" /> Checkbox 2
          </label>
          <label class="form__option">
            <input type="checkbox" name="form-checkbox" value="form-checkbox-3" /> Checkbox 3
          </label>
        </div>
      </fieldset>
      <fieldset class="form__fieldset">
        <legend class="form__legend">Fieldset legend 2</legend>
        <div class="form__group">
          <label class="form__label" for="form-select-1">Select</label>
          <select class="form__control form__control--medium" id="form-select-1">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>
        <div class="form__group">
          <label class="form__label" for="form-file-1">File input</label>
          <input type="file" class="form__control" id="form-file-1" />
        </div>
        <div class="form__group">
          <label class="form__label" for="form-textarea-1">Textarea</label>
          <textarea class="form__control" id="form-textarea-1" rows="4" placeholder="This is a placeholder"></textarea>
        </div>
        <div class="form__group">
          <label class="form__label">Radios (inline)</label>
          <label class="form__option form__option--inline">
            <input type="radio" name="form-radio" id="form-radio-1" value="Radio 1" checked /> Radio 1
          </label>
          <label class="form__option form__option--inline">
            <input type="radio" name="form-radio" id="form-radio-2" value="Radio 2" /> Radio 2
          </label>
        </div>
      </fieldset>
    </form>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<form class="form">
  <fieldset class="form__fieldset">
    <legend class="form__legend">Fieldset legend 1</legend>
    <div class="form__group">
      <label class="form__label" for="form-name">Input text</label>
      <input type="text" class="form__control form__control--medium" id="form-name" name="form-name" placeholder="This is a placeholder" />
    </div>
    <div class="form__group">
      <label class="form__label" for="form-email">Input email</label>
      <input type="email" class="form__control form__control--medium" id="form-email" name="form-email" placeholder="This is a placeholder" />
      <div class="form__help">
        <p>This is some help text.</p>
      </div>
    </div>
    <div class="form__group">
      <label class="form__label">Checkboxes</label>
      <label class="form__option">
        <input type="checkbox" name="form-checkbox" id="form-checkbox-1" value="Checkbox 1" /> Checkbox 1
      </label>
      <label class="form__option">
        <input type="checkbox" name="form-checkbox" value="form-checkbox-2" /> Checkbox 2
      </label>
      <label class="form__option">
        <input type="checkbox" name="form-checkbox" value="form-checkbox-3" /> Checkbox 3
      </label>
    </div>
  </fieldset>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Fieldset legend 2</legend>
    <div class="form__group">
      <label class="form__label" for="form-select-1">Select</label>
      <select class="form__control form__control--medium" id="form-select-1">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
    </div>
    <div class="form__group">
      <label class="form__label" for="form-file-1">File input</label>
      <input type="file" class="form__control" id="form-file-1" />
    </div>
    <div class="form__group">
      <label class="form__label" for="form-textarea-1">Textarea</label>
      <textarea class="form__control" id="form-textarea-1" rows="4" placeholder="This is a placeholder"></textarea>
    </div>
    <div class="form__group">
      <label class="form__label">Radios (inline)</label>
      <label class="form__option form__option--inline">
        <input type="radio" name="form-radio" id="form-radio-1" value="Radio 1" checked /> Radio 1
      </label>
      <label class="form__option form__option--inline">
        <input type="radio" name="form-radio" id="form-radio-2" value="Radio 2" /> Radio 2
      </label>
    </div>
  </fieldset>
</form>
{% endhighlight %}  
  </div>
</div>


## Newsletter sign up

Be careful using the snippet below when pasting onto sharepoint powered sites as it has a habit of stripping away the form post location.

<div class="exhibit">
  <div class="exhibit__content">
   <div class="fill-yellow pad2 clearfix">
     <div class="limiter clearfix">
       <div class="col8" style="height:40px; padding-top: 4px; font-size: 1.2rem;">
         <strong>GET THE MOST POWERFUL NEWSLETTER IN BRUSSELS</strong>
       </div>
       <div class="col4">
          <form action="https://entsoe.us10.list-manage.com/subscribe/post?u=498429987654de03679e453a1&amp;id=da85e6735a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
            <div id="mc_embed_signup_scroll">

              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Your email" required="" />
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_498429987654de03679e453a1_da85e6735a" tabindex="-1" value="" /></div>
              </div>
              <!--End mc_embed_signup-->
         </form>
       </div>
     </div>
   </div>
  </div>
  <div class="exhibit__caption">
  {% highlight html %}
  <div class="fill-yellow pad2 clearfix">
     <div class="limiter">
       <div class="col8">
         <strong>GET THE MOST POWERFUL NEWSLETTER IN BRUSSELS</strong>
       </div>
       <div class="col4">
          <form action="https://entsoe.us10.list-manage.com/subscribe/post?u=498429987654de03679e453a1&amp;id=da85e6735a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
            <div id="mc_embed_signup_scroll">

              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Your email" required="" />
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_498429987654de03679e453a1_da85e6735a" tabindex="-1" value="" /></div>
              </div>
              <!--End mc_embed_signup-->
         </form>
       </div>
     </div>
  </div>
  {% endhighlight %}
  </div>
</div>


## Full row w. hero image




<div class="exhibit">
  <div class="exhibit__content">
    <header>
  <div class="hero keyline-bottom">
    <h1 class="center pad8y">Heading</h1>
  </div>
  <div class="fill-grey pad4y">
    <div class="limiter clearfix">
      <div class="col6 pad1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</div>
      <div class="col6 pad1">Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  </div>
</header>

<style type="text/css">
  .hero {
    background-image: url('https://placeholdit.imgix.net/~text?txtsize=80&txt=1052%C3%97350&w=1052&h=350');
    background-size: cover;
    background-position: center center;
  }
</style>
  </div>
  <div class="exhibit__caption">
  {% highlight html %}
 <header>
  <div class="hero keyline-bottom">
    <h1 class="center pad8y">Heading</h1>
  </div>
  <div class="fill-grey pad4y">
    <div class="limiter clearfix">
      <div class="col6 pad1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</div>
      <div class="col6 pad1">Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  </div>
</header>

<style type="text/css">
  .hero {
    background-image: url('https://placeholdit.imgix.net/~text?txtsize=80&txt=1052%C3%97350&w=1052&h=350');
    background-size: cover;
    background-position: center center;
  }
</style>

  {% endhighlight %}
  </div>
</div>

## Row Section

<div class="exhibit">
  <div class="exhibit__content">
    <div class="fill-grey pad4y">
      <div class="limiter space-bottom2 pad2">
          <h2>Heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum quis neque a posuere. Duis eros quam, mattis non tempor eget, pellentesque vitae est. Suspendisse egestas bibendum purus eget rutrum. Pellentesque convallis metus vitae sem aliquet, sit amet ullamcorper sem tincidunt. Nam lacinia scelerisque enim vitae lacinia. Suspendisse in mi eget lacus efficitur finibus. Aliquam erat volutpat.</p>

          <p>In vel congue erat. Quisque iaculis ultrices lacus. Vivamus ut iaculis nibh. Quisque sed elit leo. Quisque placerat sagittis mauris a gravida. Sed lectus leo, mollis et erat sit amet, accumsan bibendum ligula. Aenean odio arcu, tincidunt ut tincidunt a, blandit ut turpis. Nulla pharetra odio ut diam imperdiet ultrices.</p>

          <a class="button" href="https://www.entsoe.eu/Pages/default.aspx">Action Call</a>

          <a class="button" href="https://www.entsoe.eu/Pages/default.aspx">Action Call</a>
      </div>
    </div>
  </div>
  <div class="exhibit__caption">
    {% highlight html %}
<div class="fill-grey pad4y">
      <div class="limiter space-bottom2 pad2">
          <h2>Heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum quis neque a posuere. Duis eros quam, mattis non tempor eget, pellentesque vitae est. Suspendisse egestas bibendum purus eget rutrum. Pellentesque convallis metus vitae sem aliquet, sit amet ullamcorper sem tincidunt. Nam lacinia scelerisque enim vitae lacinia. Suspendisse in mi eget lacus efficitur finibus. Aliquam erat volutpat.</p>

          <p>In vel congue erat. Quisque iaculis ultrices lacus. Vivamus ut iaculis nibh. Quisque sed elit leo. Quisque placerat sagittis mauris a gravida. Sed lectus leo, mollis et erat sit amet, accumsan bibendum ligula. Aenean odio arcu, tincidunt ut tincidunt a, blandit ut turpis. Nulla pharetra odio ut diam imperdiet ultrices.</p>

          <a class="button" href="https://www.entsoe.eu/Pages/default.aspx">Action Call</a>

          <a class="button" href="https://www.entsoe.eu/Pages/default.aspx">Action Call</a>
      </div>
    </div>
    {% endhighlight %}
  </div>
</div>

<h2>4 block</h2>

<div class="exhibit">
  <div class="exhibit__content">
    <div class="fill-grey">
      <div class="limiter clearfix pad2y">
      {% for i  in (1..3) %}
        <div class="col4 pad1">
          <div class="pad2 fill-blue dark">
            <h2>Heading {{i}}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
            <a href="#" class="button">Call to action</a>
          </div>
        </div>
      {% endfor %}
      </div>
    </div>
  </div>
  <div class="exhibit__caption">
    {% highlight html %}
    <div class="fill-grey">
      <div class="limiter clearfix pad2y">
      {% for i  in (1..3) %}
        <div class="col4 pad1">
          <div class="pad2 fill-blue dark">
            <h2>Heading {{i}}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
            <a href="#" class="button">Call to action</a>
          </div>
        </div>
      {% endfor %}
      </div>
    </div>
    {% endhighlight %}
  </div>
</div>

## Side pic

<div class="exhibit">
  <div class="exhibit__content">
    <div class="fill-blue pad4y">
      <div class="limiter clearfix" style="position: relative;">
        <div class="col5 fill-white pad2">
          <h2>I am a heading</h2>
          <div class="pad2y">
            <a href="" class="button inline">Call to action</a>
            <a href="" class="button inline">Call to action</a>
            <a href="" class="button inline">Call to action</a>
          </div>
        </div>

        <div class="col7 pin-right">
          <img src="https://placeholdit.imgix.net/~text?txtsize=80&txt=1052%C3%97350&w=1052&h=350">
        </div>
      </div>
    </div>
  </div>
  <div class="exhibit__caption">
    {% highlight html %}
     <div class="fill-blue pad4y">
      <div class="limiter clearfix" style="position: relative;">
        <div class="col5 fill-white pad2">
          <h2>I am a heading</h2>
          <div class="pad2y">
            <a href="" class="button inline">Call to action</a>
            <a href="" class="button inline">Call to action</a>
            <a href="" class="button inline">Call to action</a>
          </div>
        </div>

        <div class="col7 pin-right">
          <img src="https://placeholdit.imgix.net/~text?txtsize=80&txt=1052%C3%97350&w=1052&h=350">
        </div>
      </div>
    </div>
    {% endhighlight %}
  </div>
</div>


## Modal
<div class="exhibit">
  <div class="exhibit__content">
    <div data-hook='react:modal'></div>
  </div>
</div>
