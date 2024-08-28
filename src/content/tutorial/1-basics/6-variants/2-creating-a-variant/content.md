---
type: lesson
title: Creating a variant
focus: /uno.config.js
---

# Creating a variant

You can create a variant by adding it to the variants array:

```js
import { defineConfig } from "unocss";

export default defineConfig({
  variants: [],
});
```

Here is an example of a hover variant:

```js
  // hover:
  (matcher) => {
    if (!matcher.startsWith('hover:'))
      return matcher
    return {
      // slice `hover:` prefix and passed to the next variants and rules
      matcher: matcher.slice(6),
      selector: s => `${s}:hover`,
    }
  },
```

If the matcher doesn't start with `hover:` we can simply return the matcher string since we're not interested in it. After that we slice the `hover:` prefix (6 characters) and edit the resulting selector by adding `:hover` to the end.

Add the following to variants, I'm calling it `my-hover:` so we can see that it works.

```js
  (matcher) => {
    if (!matcher.startsWith('my-hover:'))
      return matcher
    return {
      matcher: matcher.slice(9),
      selector: s => `${s}:hover`,
    }
  },
```