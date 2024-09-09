---
type: lesson
title: Static shortcuts
focus: /uno.config.js
---

# Static shortcuts

Static rules are one-off shortcuts with a string as a name. Let's make a `fancy-button` shortcut that will give an element the look of a button.

Inside of `uno.config.js` in the shortcuts object, add a new shortcut with `"fancy-button-purple"` as the string, and `"py-2 px-4 border-1 border-purple-600 bg-purple-300 hover:bg-purple-400 rounded-lg shadow-md"` as the utility classes.

You should end up with something like this:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	shortcuts: [
		{
			"fancy-button-purple":
				"py-2 px-4 border-1 border-purple-600 bg-purple-300 hover:bg-purple-400 rounded-lg shadow-md",
		},
	],
});
```

After creating the new shortcut the button in the preview should look like a purple button.
