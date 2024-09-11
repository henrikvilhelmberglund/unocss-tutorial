---
type: lesson
title: Using presetWebFonts
focus: /uno.config.js
---

# Using presetWebFonts

Like other presets this preset can be imported from `unocss`.

First import the preset and add it to the presets array. After doing so, add a `fonts` property with the fonts you want to use. This will allow you to write a `font-<property>` utility class to use the font, for example `font-lobster`.

Copy the following to `uno.config.js` to use the preset:

```ts
presetWebFonts({
  provider: 'google', // default provider
  fonts: {
    // these will extend the default theme
    sans: 'Roboto',
    mono: ['Fira Code', 'Fira Mono:400,700'],
    // custom ones
    lobster: 'Lobster',
    lato: [
      {
        name: 'Lato',
        weights: ['400', '700'],
        italic: true,
      },
      {
        name: 'sans-serif',
        provider: 'none',
      },
    ],
  },
})
```