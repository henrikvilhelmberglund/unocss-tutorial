---
type: lesson
title: Using transformerVariantGroup
focus: /uno.config.js
---

# Using transformerVariantGroup

transformerVariantGroup is a transformer that can be imported from `unocss`.

First import the transformer and add it to the transformers array. After doing so you will be able to use it by adding `()` next to the utilities.

```ts
  transformers: [
    transformerVariantGroup(),
  ],
```

When using transformerVariantGroup you can have a single prefix meaning for example `font-(<all font related utilities>)`. You can even nest the groups like in `hover:(text-(4xl blue-300) decoration-(blue-300 6 wavy))`. Here is the HTML for the example in the preview, the first one normal and the second one using transformerVariantGroup:

```html
<p
	class="font-lobster font-bold text-3xl text-blue-500 underline decoration-blue-500 decoration-3 decoration-double hover:text-4xl hover:text-blue-300 hover:decoration-blue-300 hover:decoration-6 hover:decoration-wavy">
	This is text using font-lobster.
</p>

<p
	class="font-(lobster bold) text-(3xl blue-500) underline decoration-(blue-500 3 double) hover:(text-(4xl blue-300) decoration-(blue-300 6 wavy))">
	This is text using font-lobster.
</p>
```

:::warn
`transformerVariantGroup` does not work in the runtime used in this tutorial since it needs to transform the code via a build step. Click the link in the preview to see the final result!
:::