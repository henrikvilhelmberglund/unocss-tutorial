---
type: lesson
title: Introduction to transformerVariantGroup
focus: /uno.config.js
---

# transformerVariantGroup

Variant group transformer is a feature that allows for using parentheses to group related utilities.

For example, instead of 

```html
<p class="hover:bg-gray-400 hover:font-medium">text</p>
```

You could write:

```html
<p class="hover:(bg-gray-400 font-medium)">text</p>
```

and get the same result.

:::warn
`transformerVariantGroup` does not work in the runtime used in this tutorial since it needs to transform the code via a build step.
:::