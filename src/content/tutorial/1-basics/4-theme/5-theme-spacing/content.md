---
type: lesson
title: Spacing
focus: /uno.config.js
---

# Spacing

You can customize the spacing values that are used in for example `p-4`. By default `p-4` is `1 rem`.

To change this edit the spacing property inside theme:

```ts
  theme: {
    spacing: {
      4: "10rem" // this would change p-4 to be 10 rem
    }
```

It is also possible to use a function. Here is an example that uses a `size` CSS variable to configure the spacing.

```ts
  theme: {
    spacing: {
       ...Array.from({ length: 100 }, (_, i) => `calc(var(--size)*${i}rem)`)
    },
  },
```
