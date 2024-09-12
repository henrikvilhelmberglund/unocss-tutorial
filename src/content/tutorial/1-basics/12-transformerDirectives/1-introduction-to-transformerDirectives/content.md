---
type: lesson
title: Introduction to transformerDirectives
focus: /counter.js
---

# transformerDirectives

Directives transformer is a feature that allows for using `@apply`, `--at-apply`, `@screen` and `theme()`. We will go over these in separate lessons.

The transformer can be imported with `import { transformerDirectives } from 'unocss'` and then used in the transformers array:

```ts
import { transformerDirectives } from 'unocss'

export default defineConfig({
  // ...
  transformers: [
    transformerDirectives(),
  ],
})
```

:::warn
`transformerDirectives` does not work in the runtime used in this tutorial since it needs to transform the code via a build step.
:::