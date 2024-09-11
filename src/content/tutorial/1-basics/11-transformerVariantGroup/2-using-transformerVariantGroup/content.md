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

:::warn
`transformerVariantGroup` does not work in the runtime since it needs to transform the code via a build step. Click the link in the preview to see the final result!
:::