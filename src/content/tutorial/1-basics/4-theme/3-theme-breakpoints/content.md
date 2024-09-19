---
type: lesson
title: Breakpoints
focus: /uno.config.js
---

# Breakpoints

You can add custom breakpoints to the theme. By default breakpoints are replaced instead of merged, meaning you will lose the default breakpoints when changing `breakpoints: {}` in the theme, so if you want to keep the defaults you're not changing it is recommended to extend the theme.

The way you can extend breakpoints is by using `extendTheme()`:

```ts
extendTheme: (theme) => {
    return {
      ...theme,
      breakpoints: {
        ...theme.breakpoints,
        sm: '320px',
        md: '640px',
      },
    }
  },
```

:::warn
This example does not work when using the runtime, instead see this example on the playground: 

[before](https://unocss.dev/play/?html=DwBwBAxgNghgznAvAIjgWwFwAsCWATPAUwDtkA%2BASTDiwHsBXKPMAI0LFwJOAHoQyAUANBkAyjmIR2ATwaQYxaoXYAXLOxgtaAN1WEAHioA01TGDy1CcYgHIVYAO60ATgGsAdGEC8G4CI93vyA&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCCMMUwARgK4zDoCeZF1tAJIBjAlT6UaMAKpYIcAL5x0UCCDgByNnOFUqGgFAHUAD0iwUGAIZsANvDSYc%2BQsCIAKBAbhwYAC1QQVAAuRG8fOBZKKwBrSGwYKlCvCIiQZFCNADYAFgAGMBMNEnCfBRKyirgoO2pQgG16jWE2Khg1AFoa21RixDhRW2hMymQNRQBdCaqqP2gYFsTk0s0Wts7Z%2BcWNTJhTGA7bIl99jugrLCJUODmAN1QoYL2TA72rW2Lw8vD%2BKSS4eorX60WQQdwASiqPmB9EYzHYnB4EKh5EkQlEWConhWPiowneITgAEYAHQAJhRPmEyCwmT8jDASQA9EzqCASbMmZ9UgpIeFpgZeQYgA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA)

[after](https://unocss.dev/play/?html=DwBwBAxgNghgznAvAIjgWwFwAsCWATPAUwDtkA%2BASTDiwHsBXKPMAI0LFwJOAHoQyAUANBkAyjmIR2ATwaQYxAOQAXaoXbKs7GC1oA3DYQAeygDTVMYAO60ATgGs4AQjCBeDcDge735A&config=JYWwDg9gTgLgBAbzgEwKYDNgDtUGEJaYDmANHGFKgM6owCCMMUwARgK4zDoCeZF1tAJIBjAlT6UaMAKpYIcAL5x0UCCDgByNnOFUqGgFAHUAD0iwUGAIZsANvDSYc%2BQsCIAKBAbhxTMVFjIACoAFqggqABccO4wYREAlHAAvAB8iN4%2BcJQwbFBYGVlZAHSlceGoJJlFLJRWANaQ2DBU0V5FRaXF5RHFtagNTVgtVR1ZVCDRGgDMAEwADGAmGqNjcCDIUwBsACyLy6tFCoeKmceZUHbU0QDaNxrCbFQwagC0l7aoK4hworbQU0oyA0igAuqDVlQQtAYI8Wm1qppHs83lCYXCNFN-CYYK9bEQ4NjcdArFgiKg4NCAG6oKCRImvfxWWwrM6rfhSVpwG6Ijm0WQQdwJE58%2BiMZjsTg8IUiyRCURYKieRE%2BKjCZlROAARmKsxOPmEyCwUxCjDArQA9BbqCBilCLayjsLMhCDAoEgYgA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA) 
:::

:::tip
extendTheme() can also be used to alias colors:

```ts
  extendTheme: (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      customgray: theme.colors.slate
    },
  }
},
```
:::