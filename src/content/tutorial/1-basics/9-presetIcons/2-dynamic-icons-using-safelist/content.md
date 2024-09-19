---
type: lesson
title: Dynamic icons using safelist
focus: /uno.config.js
---

# Dynamic icons using safelist

:::warn
This example works in the runtime because the runtime is designed to support dynamic classes (since it doesn't run in build time), but when not using the runtime integration these colors would not be visible without adding them to the safelist.
:::

When trying to use dynamic icons (for example using a loop) it is possible that UnoCSS can't properly generate the utilities.

To fix this we can use safelist:

```ts
safelist: [
	["left", "up", "right", "down"].map((i) => `grid-area-[${i}] i-carbon-arrow-${i}`.split(" ")),
],
```

This will make sure `i-carbon-arrow-left` is available even though we render with a loop using `i-carbon-arrow-${i}`.

Note that it's also possible to use dynamic icons without a safelist, we will look at this in the next lesson.