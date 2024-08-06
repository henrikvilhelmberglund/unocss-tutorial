---
type: lesson
title: Symbols - at rules
focus: /uno.config.js
---

# Symbols - at rules

Symbols can also be used for implementing at rules such as **@supports**.

> symbols.parent: The parent wrapper of the generated CSS rule (eg. @supports, @media, etc.)

We can add an at rule wrapper by using `symbols.parent`:

```js
    [
      /^sometimes-a-grid$/,
      function* ([, d], { symbols }) {
        yield {
          [symbols.parent]: "@media (max-width: 800px)",
          display: "grid",
        };
        yield {
          display: "flex",
        };
      },
    ],
```

Try adding `{ symbols }` in the function, the `symbols.parent` line and inspecting the div in the DOM.

> Note that this is a slightly contrived example because UnoCSS already supports common breakpoint variants such as `lg:`, `sm:` and so on, but `symbols.parent` can be useful in custom rules.