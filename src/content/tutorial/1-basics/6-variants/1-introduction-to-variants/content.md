---
type: lesson
title: Introduction to variants
focus: /counter.js
---

# Variants

Variants are special functions that can modify existing rules. An example is `hover:` which adds `:hover` to the end of the selector so the rule only is active when you hover the element.

Variants can be created using the `variants` array inside `uno.config.js`. 

```js
import { defineConfig } from "unocss";

export default defineConfig({
  variants: [],
});
```

UnoCSS has many prebuilt variants like `hover:`, `dark:` and `md:`. The implementations of these can be found in the [source: variants](https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/_variants).

In the next lesson we will create a new variant and use it.