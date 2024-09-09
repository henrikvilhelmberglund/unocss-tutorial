---
type: lesson
title: Introduction to shortcuts
focus: /counter.js
---

# Shortcuts

Shortcuts allow you to combine several utility classes into a new single utility class.

:::info
Note that when using a component based framework simply writing the classes in a component is an alternative to using shortcuts.
:::

Rules are created using the `shortcuts` object or array inside `uno.config.js`.

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	shortcuts: [
		// object for non regex shortcuts
		{
			btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
		},
	],
});
```

There are static shortcuts and dynamic shortcuts.

Each static shortcut is a key with a string property with utility classes.

`"shortcut-name-here": "a-bunch of utility-classes"`

:::tip
If the name is a string and has dashes it needs to be quoted like above.
:::

Each dynamic shortcut is an array with a string or regex and a function that returns a string of utility classes .

``[/^shortcut-name-here$/, ([, optionalRegexMatch]) => `a-bunch of utility-classes`],``
