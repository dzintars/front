# Modules

Definition

- Contain content
- Are the majority of your site
- Each module is an interface that your users have to learn
- Each module is code that has to be written, delivered, and maintained

Examples

- Tabs
- Customized list view (table)
- Button

Purpose

- Isolate Modules from each other
- Prevent styles from coming in or out

## Sub-Modules

Modules could have Module Variations. Sometimes called Sub-Modules.
For example Buttons. You could have, small, large, dark etc. But all of them uses the same base.
Same border-radius, same drop-shadow, same font-size. Usually they have one or two differences
between base button. Mby color, or typography should be slightly bigger, or icon above the button
texts instead of sides.
Start with base modules and only later make an variation as slim as it can be.
We are dealing there with single html element which should be displayed slightly different way.

## Sub-Components

Module child elements

Dialog.
Content itself could be anything in any shape.
But it always has the Header with the tile and close button, the Body with overflow and the Footer which has some submit or cancel buttons.
Try to make strong boundaries to isolate component from root nodes and eliminate style bleeding into child nodes.
As example, Dialog should not care how the body content should look like. It's the job of body
elements itself.

```html
<div class="modal modal-large">
  <form>
    <div class="modal-header">
      <h2>Heading</h2>
      <button class="button btn-clean">Close</button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button class="btn">Cancel</button>
      <button class="btn btn-go">Save</button>
    </div>
  </form>
</div>
```
