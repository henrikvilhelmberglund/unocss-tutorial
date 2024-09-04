---
type: lesson
title: Introduction to blocklist
focus: /counter.js
---

# Blocklist

Blocklist is a feature that allows for blocking utilities so they do not generate rules. This can be useful if you have conflicts between UnoCSS and other CSS styles and need to stop UnoCSS from generating a certain rule.

Blocklist can be set using the `blocklist` array inside `uno.config.js`. Unlike `safelist` you can use regex to define a pattern.

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	blocklist: ["p-1", /^p-[2-4]$/],
});
```

As with `safelist` it is also possible to use a string as above or a function:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	blocklist: [...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`)],
});
```
