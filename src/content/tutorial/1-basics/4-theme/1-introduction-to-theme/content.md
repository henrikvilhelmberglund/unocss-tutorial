---
type: lesson
title: Introduction to theme
focus: /counter.js
---

# Theme

Theme allows you to add or replace default values for colors, breakpoints, animations and more.

The theme is created using the `theme` object inside `uno.config.js`.

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			"very-cool": "#0000ff", // class="text-very-cool"
		},
	},
});
```

Colors can be an object if you want something that works like `bg-blue-500` for example:

```js
colors: {
      'very-cool': {
        50: '#0000ff',
        100: '#3333ff',
        // and so on
      }
    }
```

Breakpoints can be defined if you want to change the defaults or add new devices.

:::warn
Breakpoints are not merged but instead replace the default values. This means that you will need to provide values for all breakpoints you want to use.
:::

In the next lessons we'll look at theme and colors, breakpoints and animations.

:::tip
For a list of everything you can configure inside the theme, see this: https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_theme/types.ts
:::
