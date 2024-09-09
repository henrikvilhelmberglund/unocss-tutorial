---
type: lesson
title: Introduction to presetIcons
focus: /counter.js
---

# presetIcons

presetIcons is a preset that allows for using icons in UnoCSS. The icons are provided using `iconify` so to use them install the corresponding package as a dev dependancy, for example `@iconify-json/mdi` for Material Design Icons.

After doing so the icon can be added like this:

```html
<div class="i-mdi-alarm text-orange-400"></div>
```

`i` is a preset for icons, `mdi` is the collection name and `alarm` is the name of the icon.

For a list of icons that can be used, see https://icones.js.org/.