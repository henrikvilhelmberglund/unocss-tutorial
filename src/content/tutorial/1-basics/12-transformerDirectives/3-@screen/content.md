---
type: lesson
title: "@screen"
focus: /uno.config.js
---

# @screen

`@screen` is a way to create media queries using the breakpoints in the theme. `@screen` should be used when you can't (or don't want to) use the utility classes in the elements like `grid grid-cols-2 xs:grid-cols-1` which is the normal recommended way in most cases.

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen xs {
  .grid {
    --uno: grid-cols-1;
  }
}
```