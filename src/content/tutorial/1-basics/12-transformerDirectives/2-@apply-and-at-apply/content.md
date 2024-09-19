---
type: lesson
title: "@apply and --at-apply"
focus: /uno.config.js
---

# @apply and --at-apply

`@apply` is a way to use utilities inside of normal CSS.

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

`--at-apply` is basically the same thing but is also vanilla CSS compatible which makes it useful when `@apply` would give an error. In addition to `--at-apply` there is also `--uno-apply` and `--uno` which are aliases.

```css
.custom-div {
  --at-apply: text-center my-0 font-medium;
}
```

:::warn
`transformerDirectives` does not work in the runtime used in this tutorial since it needs to transform the code via a build step. See this example on the playground for the final result: [play](https://unocss.dev/play/?version=0.62.3&html=DwEwlgbgfAsgngAgHYHsBOBbAhgGweCYAegKgCgzRIEBjHLAZwYF4AiGgVwYBcUMBaAq1iJOPPvkjFSFIA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcEWWwCGuOlmggMUACLBaE3gDd6SAL5wsUCCDgByLiol06TpEgwAPSLDo2OpcADbwmDj4RCTApAAUyKhQYfQAXHAA2lSomU4SXHQwDgC0KaEYTuSIcFKh0BlOtGhOcFbVCHCh6vz6GQBEMPQw-VYAurITVBpaOlB6UHQZmTPauvpGJub08QCUU6h0ABbQMAUwS4g5zgVFpcen506NQ74wJaGkcK-v0JqkGDgJwsUDSPxKQ3UoSqVHaVBECku2VQwnkjGUED2slRomYrHY3F4Aix1wR4ikWkS10OEihGAyAEYAHQAJmxKIkaFwjSOrDASwA9AL6CAmccBTCUW1dpNKFZdkggA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmjraBhjYODaMMABupv5BIeGIcrbICNZ8OKE2npZY1ja8U6g4fv3aQA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA)
:::

:::tip
Overusing `@apply` makes you lose some of the advantages of atomic CSS such as having the styling closely tied to the actual element (eg. in the `class` attribute). If you want an abstraction try out the `shortcuts` feature instead.
:::
