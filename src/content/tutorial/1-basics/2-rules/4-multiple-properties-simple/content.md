---
type: lesson
title: Multiple CSS properties (simple)
focus: /uno.config.js
---

# Multiple CSS properties (simple)

There are a few ways to have a rule with multiple CSS properties. The most basic way is to simple include several properties inside of the object.

Add an underline like this:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [[/^fancy-(.*)$/, ([, c]) => ({ color: `${c}`, "text-decoration": `underline ${c}` })]],
});
```

If you want linebreaks it can look slightly awkward because you need opening braces and then a return statement, like this:

```js
	rules: [
		[
			/^fancy-(.*)$/,
			([, c]) => {
				return {
					color: `${c}`,
					"text-decoration": `underline ${c}`,
				};
			},
		],
	],
```

We'll look at an alternative syntax in the next lesson.
