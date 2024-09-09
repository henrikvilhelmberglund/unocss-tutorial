---
type: lesson
title: Dynamic rules
focus: /uno.config.js
---

# Dynamic rules

Our `fancy-purple` rule works fine but what if we want lots of colors? Creating a separate rule for each color is a lot of work. Instead we can use dynamic rules.

Dynamic rules are rules with a regex in the name. Let's make a dynamic `fancy-(color here)` utility that will change the color to the specified color.

The name should be this: `/^fancy-(.*)$/`

<details>
  <summary>New to regex?</summary>

:::info
`//` is how a regex is specified. `^` is the start of the string and `$` is the end of the string. `.*` means `match any character` and putting parantheses around like `(.*)` will create a capturing group that catches the content and allows for matching against the whole group.
:::

</details>

---

Inside of `uno.config.js` we can modify `"fancy-purple"` to accept a regex instead. The syntax changes slightly and now looks like this:

``[/^fancy-(.*)$/, ([, c]) => ({ color: `${c}` })],``

<details>
  <summary>Matching numbers in regex</summary>

:::tip
For a regex that should match numbers here is an example: ``[/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })]``
:::

</details>

---

We now have this arrow function which starts with `([, c])` where `c` will match whatever is after `fancy-` and allow us to use the `c` value in ``({ color: `${c}` })``.

You should end up with something like this:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	rules: [[/^fancy-(.*)$/, ([, c]) => ({ color: `${c}` })]],
});
```

After creating the new dynamic rule all of the text in the preview should have its own color.
