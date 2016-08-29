---
layout: docs
category: CSS
title: Components
description: Reusable components, including buttons, alerts and more.
---

## Buttons

### Colors

<div class="exhibit">
  <div class="exhibit__content">
    <button class="button" type="button"><span>Achromic</span></button>
    <button class="button fill-green" type="submit"><span>Base</span></button>
    <a class="button fill-blue" role="button"><span>Primary</span></a>
    <button class="button fill-grey" type="button"><span>Secondary</span></button>
    <button class="button fill-red" type="button"><span>Base unbounded</span></button>
    <button class="button button--primary-unbounded" type="button"><span>Primary unbounded</span></button>
    <button class="button button--secondary-unbounded" type="button"><span>Secondary unbounded</span></button>
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