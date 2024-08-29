---
type: lesson
title: Introduction to safelist
focus: /counter.js
---

# Safelist

Safelist is a feature that allows for always generating certain rules even if they are not detected in the extraction phase. Only rules that UnoCSS can find are generated which means that if you have a dynamic rule like `p-{i}` it is not going to work.

To solve this issue we can add the classes that should be generated to `safelist`.

Safelist can be set using the `safelist` array inside `uno.config.js`.

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	safelist: "p-1 p-2 p-3 p-4".split(" "),
	// or safelist: ["p-1", "p-2", "p-3", "p-2"]
});
```

It is also possible to use a function:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	safelist: [...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`)],
});
```

In the next lesson we will use safelist to solve a problem with dynamic classes.
