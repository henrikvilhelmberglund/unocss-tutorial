---
type: lesson
title: "@apply and --at-apply"
focus: /uno.config.js
---

# @apply and --at-apply

`@apply` is a way to use utilities inside of normal CSS.

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

`--at-apply` is basically the same thing but is also vanilla CSS compatible which makes it useful when `@apply` would give an error. In addition to `--at-apply` there is also `--uno-apply` and `--uno` which are aliases.

```css
.custom-div {
  --at-apply: text-center my-0 font-medium;
}
```

:::tip
Overusing `@apply` makes you lose some of the advantages of atomic CSS such as having the styling closely tied to the actual element (eg. in the `class` property). If you want an abstraction try out the `shortcuts` feature instead.
:::
