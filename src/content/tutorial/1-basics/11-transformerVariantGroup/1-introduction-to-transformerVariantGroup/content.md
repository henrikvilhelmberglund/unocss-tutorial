---
type: lesson
title: Introduction to transformerVariantGroup
focus: /uno.config.js
---

# Transformer variant group

Transformer variant group is a feature that allows for using parentheses to group related utilities.

For example, instead of 

```html
<p class="hover:bg-gray-400 hover:font-medium">text</p>
```

You could write:

```html
<p class="hover:(bg-gray-400 font-medium)">text</p>
```

and get the same result.