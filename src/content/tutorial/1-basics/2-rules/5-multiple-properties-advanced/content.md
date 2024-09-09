---
type: lesson
title: Multiple CSS properties (using yield)
focus: /uno.config.js
---

# Multiple CSS properties (using yield)

Another way is to generate multiple CSS properties is to use JS generator functions.

Here is how it would look:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	rules: [
		[
			/^fancy-(.*)$/,
			function* ([, c]) {
				yield { color: `${c}` };
				yield { "text-decoration": `underline ${c}` };
			},
		],
	],
});
```

The yield syntax is powerful and allows us to use symbols to add things like multi selector rules which we'll cover in the next lesson.
