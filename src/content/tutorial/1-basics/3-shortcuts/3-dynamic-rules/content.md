---
type: lesson
title: Dynamic shortcuts
focus: /uno.config.js
---

# Dynamic rules

Our `fancy-button-purple` shortcut works fine but what if we want lots of colors? Creating a separate shortcut for each color is a lot of work. Instead we can use **dynamic shortcuts**.

Dynamic shortcuts are rules with a **regex** in the name. Let's make a dynamic `fancy-button-(color here)` utility that will change the button color to the specified color.

The name should be this: `/^fancy-button-(.*)$/`


<details>
  <summary>New to regex?</summary>

`//` is how a regex is specified. `^` is the start of the string and `$` is the end of the string. `.*` means `match any character` and putting parantheses around like `(.*)` will create a capturing group that catches the content and allows for matching against the whole group.

</details>

---

Inside of `uno.config.js` we can modify `"fancy-button-purple"` to accept a regex instead. The syntax changes slightly and now looks like this:

``[/^fancy-button-(.*)$/, ([, c]) => `py-2 px-4 border-1 border-${c}-600 bg-${c}-300 hover:bg-${c}-400 rounded-lg shadow-md`],``

<details>
  <summary>Matching numbers in regex</summary>

> For a regex that should match numbers here is an example: ``[/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })]``

</details>

---

We now have this arrow function which starts with `([, c])` where `c` will match whatever is after `fancy-` and allow us to use the `c` value in the color utilities like `bg-${c}-300`. 

You should end up with something like this:

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  shortcuts: [
    [/^fancy-button-(.*)$/, ([, c]) => `py-2 px-4 border-1 border-${c}-600 bg-${c}-300 hover:bg-${c}-400 rounded-lg shadow-md`]
  ],
});
```

After creating the new dynamic rule all of the text in the preview should have its own color. There is a potential problem though, since we used the `bg-${c}-300` syntax we can't really get a skyblue or hotpink button like before. Can we fix this?