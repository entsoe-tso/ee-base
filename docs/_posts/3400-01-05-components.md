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
    <a class="button button--primary" role="button"><span>Primary</span></a>
    <button class="button button--base" type="submit"><span>Base</span></button>
    <button class="button button--achromic " type="button"><span>Achromic</span></button>
    <button class="button button--secondary" type="button"><span>Secondary</span></button>
    <br />
    <a class="button button--primary-unbounded">Primary unbounded</a>
    <a class="button button--base-unbounded">Base unbounded</a>
    <a class="button button--secondary-unbounded">Secondary unbounded</a>
    <br />
    <button class="button button--primary-bounded" type="button"><span>Primary bounded</span></button>
    <a class="button button--base-bounded" role="button"><span>Base bounded</span></a>
    <button class="button button--secondary-bounded" type="button"><span>Secondary bounded</span></button>
    <button class="button button--warning-bounded" type="button"><span>Warning bounded</span></button>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<a class="button button--primary" role="button"><span>Primary</span></a>
<button class="button button--base" type="submit"><span>Base</span></button>
<button class="button button--achromic " type="button"><span>Achromic</span></button>
<button class="button button--secondary" type="button"><span>Secondary</span></button>

<a class="button button--primary-unbounded">Primary unbounded</a>
<a class="button button--base-unbounded">Base unbounded</a>
<a class="button button--secondary-unbounded">Secondary unbounded</a>

<button class="button button--primary-bounded" type="button"><span>Primary bounded</span></button>
<a class="button button--base-bounded" role="button"><span>Base bounded</span></a>
<button class="button button--secondary-bounded" type="button"><span>Secondary bounded</span></button>
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
                        <label class="form__label">Radio options (custom)</label>

                        <label class="form__option form__option--inline form__option--custom-radio">
                          <input type="radio" name="form-radio" id="form-radio-1" value="Radio 1" checked />
                          <span class="form__option__text">Radio 1</span>
                          <span class="form__option__ui"></span>
                        </label>
                        <label class="form__option form__option--inline form__option--custom-radio">
                          <input type="radio" name="form-radio" id="form-radio-2" value="Radio 2" />
                          <span class="form__option__text">Radio 2</span>
                          <span class="form__option__ui"></span>
                        </label>
                      </div>
                    </fieldset>

                    <fieldset class="form__fieldset">
                      <legend class="form__legend">Fieldset legend 2</legend>

                      <div class="form__group">
                        <label class="form__label" for="form-select-1">Select</label>
                        <select class="form__control form__control--medium" id="form-select-1">
                          <option>Option 1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>

                      <div class="form__group">
                        <label class="form__label" for="form-input-1">Small</label>
                        <input type="text" class="form__control form__control--small" id="form-input-1" placeholder="This is a placeholder" />
                      </div>

                      <div class="form__group">
                        <label class="form__label" for="form-input-2">Medium</label>
                        <input type="text" class="form__control form__control--medium" id="form-input-2" placeholder="This is a placeholder" />
                      </div>

                      <div class="form__group">
                        <label class="form__label" for="form-input-3">Large</label>
                        <input type="text" class="form__control form__control--large" id="form-input-3" placeholder="This is a placeholder" />
                      </div>

                      <div class="form__group">
                        <label class="form__label" for="form-input-4">XLarge</label>
                        <input type="text" class="form__control form__control--xlarge" id="form-input-4" placeholder="This is a placeholder" />
                      </div>

                      <div class="form__group">
                        <label class="form__label">Checkbox options (custom)</label>
                        <label class="form__option form__option--custom-checkbox">
                          <input type="checkbox" name="form-checkbox" id="form-checkbox-1" value="Checkbox 1" />
                          <span class="form__option__text">Checkbox 1</span>
                          <span class="form__option__ui"></span>
                        </label>
                        <label class="form__option form__option--custom-checkbox">
                          <input type="checkbox" name="form-checkbox" value="form-checkbox-2" />
                          <span class="form__option__text">Checkbox 2</span>
                          <span class="form__option__ui"></span>
                        </label>
                        <label class="form__option form__option--custom-checkbox">
                          <input type="checkbox" name="form-checkbox" value="form-checkbox-3" />
                          <span class="form__option__text">Checkbox 3</span>
                          <span class="form__option__ui"></span>
                        </label>
                      </div>
                    </fieldset>

                    <fieldset class="form__fieldset">
                      <legend class="form__legend">Fieldset legend 3</legend>

                      <div class="form__group">
                        <label class="form__label" for="form-file-1">File input</label>
                        <input type="file" class="form__control" id="form-file-1" />
                      </div>

                      <div class="form__group">
                        <label class="form__label" for="form-textarea-1">Textarea</label>
                        <textarea class="form__control" id="form-textarea-1" rows="4" placeholder="This is a placeholder"></textarea>
                      </div>

                      <div class="form__group">
                        <label class="form__label" for="form-input-5">Input group</label>
                        <div class="form__input-group">
                          <input type="text" class="form__control form__control--medium" id="form-input-5" placeholder="This is a placeholder">
                          <span class="form__input-group-button"><button type="submit" class="button button--achromic button--text-hidden button--medium button--example-icon"><span>Button</span></button></span>
                        </div>
                      </div>

                      <div class="form__group">
                        <label class="form__label" for="form-input-6">Input group</label>
                        <div class="form__input-group">
                          <span class="form__input-group-button"><button type="submit" class="button button--achromic button--text-hidden button--medium button--example-icon"><span>Button</span></button></span>
                          <input type="text" class="form__control form__control--medium" id="form-input-6" placeholder="Search location">
                        </div>
                      </div>
                    </fieldset>
                  </form>

  </div>

  <div class="exhibit__caption">
{% highlight html %}
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
          <label class="form__label">Radio options (custom)</label>

          <label class="form__option form__option--inline form__option--custom-radio">
            <input type="radio" name="form-radio" id="form-radio-1" value="Radio 1" checked />
            <span class="form__option__text">Radio 1</span>
            <span class="form__option__ui"></span>
          </label>
          <label class="form__option form__option--inline form__option--custom-radio">
            <input type="radio" name="form-radio" id="form-radio-2" value="Radio 2" />
            <span class="form__option__text">Radio 2</span>
            <span class="form__option__ui"></span>
          </label>
        </div>
      </fieldset>

      <fieldset class="form__fieldset">
        <legend class="form__legend">Fieldset legend 2</legend>

        <div class="form__group">
          <label class="form__label" for="form-select-1">Select</label>
          <select class="form__control form__control--medium" id="form-select-1">
            <option>Option 1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div class="form__group">
          <label class="form__label" for="form-input-1">Small</label>
          <input type="text" class="form__control form__control--small" id="form-input-1" placeholder="This is a placeholder" />
        </div>

        <div class="form__group">
          <label class="form__label" for="form-input-2">Medium</label>
          <input type="text" class="form__control form__control--medium" id="form-input-2" placeholder="This is a placeholder" />
        </div>

        <div class="form__group">
          <label class="form__label" for="form-input-3">Large</label>
          <input type="text" class="form__control form__control--large" id="form-input-3" placeholder="This is a placeholder" />
        </div>

        <div class="form__group">
          <label class="form__label" for="form-input-4">XLarge</label>
          <input type="text" class="form__control form__control--xlarge" id="form-input-4" placeholder="This is a placeholder" />
        </div>

        <div class="form__group">
          <label class="form__label">Checkbox options (custom)</label>
          <label class="form__option form__option--custom-checkbox">
            <input type="checkbox" name="form-checkbox" id="form-checkbox-1" value="Checkbox 1" />
            <span class="form__option__text">Checkbox 1</span>
            <span class="form__option__ui"></span>
          </label>
          <label class="form__option form__option--custom-checkbox">
            <input type="checkbox" name="form-checkbox" value="form-checkbox-2" />
            <span class="form__option__text">Checkbox 2</span>
            <span class="form__option__ui"></span>
          </label>
          <label class="form__option form__option--custom-checkbox">
            <input type="checkbox" name="form-checkbox" value="form-checkbox-3" />
            <span class="form__option__text">Checkbox 3</span>
            <span class="form__option__ui"></span>
          </label>
        </div>
      </fieldset>

      <fieldset class="form__fieldset">
        <legend class="form__legend">Fieldset legend 3</legend>

        <div class="form__group">
          <label class="form__label" for="form-file-1">File input</label>
          <input type="file" class="form__control" id="form-file-1" />
        </div>

        <div class="form__group">
          <label class="form__label" for="form-textarea-1">Textarea</label>
          <textarea class="form__control" id="form-textarea-1" rows="4" placeholder="This is a placeholder"></textarea>
        </div>

        <div class="form__group">
          <label class="form__label" for="form-input-5">Input group</label>
          <div class="form__input-group">
            <input type="text" class="form__control form__control--medium" id="form-input-5" placeholder="This is a placeholder">
            <span class="form__input-group-button"><button type="submit" class="button button--achromic button--text-hidden button--medium button--example-icon"><span>Button</span></button></span>
          </div>
        </div>

        <div class="form__group">
          <label class="form__label" for="form-input-6">Input group</label>
          <div class="form__input-group">
            <span class="form__input-group-button"><button type="submit" class="button button--achromic button--text-hidden button--medium button--example-icon"><span>Button</span></button></span>
            <input type="text" class="form__control form__control--medium" id="form-input-6" placeholder="Search location">
          </div>
        </div>
      </fieldset>
    </form>

  </div>
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

<div class="exhibit">
  <div class="exhibit__content">
    <article class="card">
      <a href="#" class="card__contents" title="Click me">
        <figure class="card__media">
          <div class="card__thumbnail">
            <img alt="Card thumb" width="768" height="384" src="http://placehold.it/768x384">
          </div>
        </figure>
        <div class="card__copy">
          <header class="card__header">
            <h1 class="card__title">This is a full clickable card</h1>
            <p class="card__subtitle">Lorem ipsum</p>
          </header>
          <div class="card__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a sollicitudin eros. Sed ultricies velit massa, vitae rutrum nulla varius ut. In feugiat congue leo.</p>
          </div>
        </div>
      </a>
    </article>

    <article class="card">
      <div class="card__contents">
        <figure class="card__media">
          <div class="card__thumbnail">
            <img alt="Card thumb" width="768" height="384" src="http://placehold.it/768x384">
          </div>
        </figure>
        <div class="card__copy">
          <header class="card__header">
            <h1 class="card__title"><a href="#" title="Click me">This is a regular card</a></h1>
          </header>
          <div class="card__body">
            <dl>
              <dt>Term 1</dt>
              <dd>Value 1</dd>
              <dt>Term 2</dt>
              <dd>Value 2</dd>
            </dl>
          </div>
        </div>
      </div>
    </article>

    <article class="card card--horizontal">
      <div class="card__contents">
        <figure class="card__media">
          <div class="card__thumbnail">
            <img width="320" height="320" src="http://placehold.it/320x320" alt="Card thumb">
          </div>
        </figure>
        <div class="card__copy">
          <header class="card__header">
            <h1 class="card__title"><a title="Click me" href="#">This is an horizontal card</a></h1>
          </header>
          <div class="card__body">
            <dl>
              <dt>Term 1</dt>
              <dd>Value 1</dd>
              <dt>Term 2</dt>
              <dd>Value 2</dd>
            </dl>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ab ut provident, placeat, repellat ea ex dolorum delectus voluptate unde eos magnam. Eaque nemo eius, voluptate accusantium accusamus, mollitia necessitatibus.</p>
          </div>
        </div>
      </div>
    </article>

  </div>
</div>
