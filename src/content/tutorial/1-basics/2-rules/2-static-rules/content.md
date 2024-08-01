---
type: lesson
title: Static rules
focus: /uno.config.js
---

# Static rules

Static rules are one-off rules with a **string** as a name. Let's make a `fancy-purple` utility that will change the color to purple.

Inside of `uno.config.js` add a new rule with `"fancy-purple"` as the string, `color` as the CSS property and `"purple"` as the CSS value.

You should end up with something like this:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    ["fancy-purple", { color: "purple" }]
  ],
});
```

After creating the new rule the text in the preview should turn purple.