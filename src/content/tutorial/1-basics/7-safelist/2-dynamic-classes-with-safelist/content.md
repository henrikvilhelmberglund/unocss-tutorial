---
type: lesson
title: Dynamic classes with safelist
focus: /App.svelte
---

# Dynamic classes with safelist

:::warn
This example works in the runtime because the runtime is designed to support dynamic classes (since it doesn't run in build time), but when not using the runtime integration these colors would not be visible without adding them to the safelist.
:::

Let's say we want to have a loop that creates buttons with different colors. See App.svelte to the right.

This doesn't work properly _(except in this tutorial using the runtime)_ because UnoCSS doesn't know what color `bg-{color}-500` is. To fix this we can use safelist to add the dynamic colors to always be generated, like this:

`import { colors } from "./colors.js"`

`safelist: [...colors.map((color) => `bg-${color}-500 hover:bg-${color}-600`.split(" "))]`

By doing this we can generate the background rules and hover rules even though they are not plainly visible to UnoCSS.