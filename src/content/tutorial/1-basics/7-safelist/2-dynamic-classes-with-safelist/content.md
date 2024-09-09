---
type: lesson
title: Dynamic classes with safelist
focus: /App.svelte
---

# Dynamic classes with safelist

Let's say we want to have a loop that creates buttons with different colors. See App.svelte to the right.

As you can see it doesn't work properly because UnoCSS doesn't know what color `bg-{color}-500` is. To fix this we can use safelist to add the dynamic colors to always be generated, like this:

`import { colors } from "./colors.js"`

`safelist: [...colors.map((color) => `bg-${color}-500 hover:bg-${color}-600`.split(" "))]`

By doing this we can generate the background rules and hover rules even though they are not plainly visible to UnoCSS.