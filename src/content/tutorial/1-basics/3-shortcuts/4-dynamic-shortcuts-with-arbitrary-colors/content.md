---
type: lesson
title: Dynamic rules with arbitrary colors
focus: /uno.config.js
---

# Dynamic rules with arbitrary colors

Our dynamic shortcut worked fine for purple because it's available as a color in UnoCSS. 

:::tip
See [UnoCSS source: colors.ts](https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_theme/colors.ts) for a list of all available colors.
:::

What about CSS colors like `hotpink` though? Since `hotpink` is not available as a default color we can't change the lightness value with the `-500` syntax. 

Instead we could use the CSS `color-mix()` function to blend the colors with black and white to get the desired result.

Add this shortcut:

```js
[/^fancy-button2-(.*)$/, ([, c]) => `py-2 px-4 border-1 border-[color-mix(in_srgb,_${c}_70%,_black)] bg-[color-mix(in_srgb,_${c}_100%,_white)] hover:bg-[color-mix(in_srgb,_${c}_50%,_white)] rounded-lg shadow-md`]
```

In UnoCSS we can't have spaces in arbitrary brackets `[not ok]`, they have to be replaced with underscores: `[this_is_ok]`. 

This shortcut looks a bit complicated but what we're really doing is using the color-mix() function, taking in an sRGB color and mixing a certain percentage of the color we passed in to the shortcut with black or white.

:::info
There is actually a better way to use your own colors in UnoCSS: the `theme` object. We will look at this in the next lesson.
:::