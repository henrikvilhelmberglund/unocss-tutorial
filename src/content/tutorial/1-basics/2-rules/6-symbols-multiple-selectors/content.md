---
type: lesson
title: Symbols and multiple selectors
focus: /uno.config.js
---

# Symbols and multiple selectors

Symbols is a new feature in UnoCSS that allows for easily editing adding selectors, wrapping the entire CSS property and more.

To use them we need to change 

```ts
function* ([, c]) {
``` 

to this: 

``` ts
function* ([, c], { symbols }) {
```

:::tip

`symbols.parent`: The parent wrapper of the generated CSS rule (eg. @supports, @media, etc.)

`symbols.selector`: A function to modify the selector of the generated CSS rule (see the example below)

`symbols.variants`: An array of variant handlers that are applied to the current CSS object

`symbols.layer`: A string/function/regex match that sets the UnoCSS layer of the generated CSS rule

`symbols.shortcutsNoMerge`: A boolean to disable the merging of the current rule in shortcuts
:::

For example we can edit the selector to create a hover property:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      /^fancy-(.*)$/,
      function* ([, c], { symbols }) {
        yield { color: `${c}` };
        yield { "text-decoration": `underline ${c}` };
        yield { 
          [symbols.selector]: selector => `${selector}:hover`,
          "text-decoration-thickness": `8px` 
          };
      },
    ],
  ],
});
```

In this case we need to use a symbol with the `yield` syntax to edit the selector so the CSS property is applied when hovered. 
