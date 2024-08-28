---
type: lesson
title: Colors
focus: /uno.config.js
---

# Colors

You can add custom colors to the theme.

```js
  theme: {
    colors: {
      'very-cool': '#0000ff', // class="text-very-cool"
    }
  }
```

After doing so it's possible to use the color with for example `bg-very-cool`.

It is possible to create a color with multiple shades like this:

```js
theme: {
    colors: {
      random: {
        50: "color-mix(in srgb, oklch(95% 0.10 var(--hue)) 30%, oklch(100% 0 360))",
        100: "color-mix(in srgb, oklch(95% 0.10 var(--hue)) 80%, oklch(100% 0 360))",
        200: "oklch(90% 0.12 var(--hue))",
        300: "oklch(85% 0.20 var(--hue))",
        400: "oklch(74% 0.20 var(--hue))",
        500: "oklch(62% 0.20 var(--hue))",
        600: "oklch(54% 0.23 var(--hue))",
        700: "oklch(49% 0.21 var(--hue))",
        800: "oklch(42% 0.17 var(--hue))",
        900: "oklch(37% 0.14 var(--hue))",
        950: "oklch(29% 0.09 var(--hue))",
        960: "oklch(23% 0.09 var(--hue))",
        970: "oklch(17% 0.09 var(--hue))",
        980: "oklch(11% 0.09 var(--hue))",
        990: "oklch(6% 0.09 var(--hue))",
      },
    },
  },
```

Add these lines to the colors in the config.

Above is an example of a theme color that changes the hue using a `--hue` CSS variable. Of course it's also possible to do something simpler, like shades using colors in hex.

Note that it's also possible to add a `DEFAULT` property with a color value if you want to be able to use `bg-random` without a number suffix.

:::tip
The default colors from the source code can be found here: https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_theme/colors.ts
:::

