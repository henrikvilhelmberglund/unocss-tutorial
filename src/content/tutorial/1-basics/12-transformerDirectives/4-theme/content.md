---
type: lesson
title: theme()
focus: /uno.config.js
---

# theme()

`theme()` is a function that makes it possible to access the theme using dot-config syntax.

```css
.btn-blue {
  background-color: theme('colors.blue.500');
}
```

Where `theme('colors.blue.500')` will be compiled to `#3b82f6;`. `theme()` can also be used in rules or shortcuts, or even in utilities: 

```html
<button class="bg-blue-400 px-[calc(theme(breakpoints.xl)/2)] py-xl">button</button>
```