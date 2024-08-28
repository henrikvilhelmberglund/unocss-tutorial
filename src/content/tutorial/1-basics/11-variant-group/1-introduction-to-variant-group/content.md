---
type: lesson
title: Introduction to variant group
focus: /counter.js
---

# Variant group

Presets are collections of rules, shortcuts, variants, preflights and more. The default preset `presetUno` is a preset that aims to be compatible with other utility-first frameworks like Tailwind CSS.

By creating a preset you can create a new framework or feature inside UnoCSS and if you want to share it you can release it as a package for others to use. 

Presets can be loaded using the `presets` array inside `uno.config.js`. 

```js
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
});
```

UnoCSS has many presets like `presetIcons`, `presetTypography` and `presetIcons` and there are many community presets as well. They can be found here: [official preests](https://unocss.dev/presets/) and here: [community presets](https://unocss.dev/presets/community)

In the next lesson we will create a new preset and use it.