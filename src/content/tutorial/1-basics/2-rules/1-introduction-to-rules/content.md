---
type: lesson
title: Introduction to rules
focus: /counter.js
---

# Rules

Now that we know how to configure UnoCSS we can create our own **rules**. Rules define utility classes and the resulting CSS. UnoCSS has many built-in rules inside **presetUno** but also allows for easily adding custom rules.

Rules are created using the `rules` array inside `uno.config.js`.

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    
  ],
});
```

Each rule is an **array** with a **string** or **regex** and an **object** with a **CSS property** and a **CSS value**.

`["rule-name-here", { "css-property": "css-value" }]`

If the CSS property has dashes it needs to be quoted like above.