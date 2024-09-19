---
type: lesson
title: "@screen"
focus: /uno.config.js
---

# @screen

`@screen` is a way to create media queries using the breakpoints in the theme. `@screen` should be used when you can't (or don't want to) use the utility classes in the elements like `grid grid-cols-2 xs:grid-cols-1` which is the normal recommended way in most cases.

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen xs {
  .grid {
    --uno: grid-cols-1;
  }
}
```

:::warn
`transformerDirectives` does not work in the runtime used in this tutorial since it needs to transform the code via a build step. See this example on the playground for the final result: [play](https://unocss.dev/play/?version=0.62.3&html=DwEwlgbgBAxgNgQwM5ILwCIDmAnMJ0B8AUAJDAAOBAKgKYAeALsAPSWkUECyA9tjVA3pNWxFuAjEgA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcEWWwCGuOlmggMUACLBaE3gDd6lAL5wsUCCDgByLiol06TpEgwAPSLDo2OpcADbwmDj4RCTApAAUyKhQYfQAXHAA2plOElx0MA4AtCmhGE7kiHBSodAZTrRoTnBWlQhwoer8%2BvUw9DDNVgC6Q2pQmtq6%2BnQZmRpaOlB6hsYYpsAWdPEAlKNUdAAW0DB5MDOIVKi5%2BYUgRYfHp069fjBFoaRwfb5v0JqkGDgRwsUDS3zefXUoQqVFaVBECnOmUuclEShUO1kwnkjBYbE4PD4-ExKIR4ikWkSKNQdAkUIwGQAjAA6ABMWNQ1TQuHqB1YYBmAHpBfQQMzDoKYZyWttZHsrNskEA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmjraYoUwzGYWNjYlWBpjzAtlFeg2AEx%2B-doB6MiUCPRgOBP%2Bo7AnFlMz9HNgS02rkZlgW1tAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA)
:::