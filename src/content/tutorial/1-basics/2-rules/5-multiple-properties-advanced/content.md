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

This is not the main reason to use this syntax though. The yield syntax allows us to add **multi selector rules** which is the next lesson.
