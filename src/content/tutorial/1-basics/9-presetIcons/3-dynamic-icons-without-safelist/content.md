---
type: lesson
title: Dynamic icons without safelist
focus: /uno.config.js
---

# Dynamic icons without safelist

When using large quantities of dynamic icons you may want to avoid using the safelist because all of the icons would load even when not needed.

An example is country flags. It's likely better to use an object with the classes already defined and pass a country code to get the correct icon:

```ts
export const flags = {
  "af": "i-flag-af-4x3",
  "ax": "i-flag-ax-4x3",
  "al": "i-flag-al-4x3",
  // ... more flags
```

By doing this you could do `flags["ax"]` to get `i-flag-ax-4x3` and since the utility is complete (without any dynamic string interpolation) it will work in UnoCSS without using safelist.

You could also use it in a loop:

```svelte
	{#each Object.entries(flags) as [_, icon]}
		<div class="{icon} size-12"></div>
	{/each}
```