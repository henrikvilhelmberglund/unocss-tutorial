---
type: lesson
title: Dynamic shortcuts using theme
focus: /uno.config.js
---

# Dynamic shortcuts using theme

To add custom colors you can add a theme object with a colors key containing the colors you want to add. If you only want a single shade you can add `hotpink: "#fa3a95",` but in our case we want all of the shades from `50` to `950`. Add this to the config:

```js
theme: {
    colors: {
      hotpink: {
        50: "#fef1f8",
        100: "#fee5f2",
        200: "#ffcbe8",
        300: "#ffa1d3",
        400: "#ff69b4",
        500: "#fa3a95",
        600: "#ea1870",
        700: "#cc0a57",
        800: "#a80c47",
        900: "#8c0f3e",
        950: "#560121",
      },
      blanchedalmond: {
        50: "#fff8ed",
        100: "#ffebcd",
        200: "#fed9aa",
        300: "#fdbe74",
        400: "#fb973c",
        500: "#f97916",
        600: "#ea5e0c",
        700: "#c2460c",
        800: "#9a3812",
        900: "#7c3012",
        950: "#431607",
      },
      skyblue: {
        50: "#f2f9fd",
        100: "#e4f2fa",
        200: "#c2e5f5",
        300: "#87ceeb",
        400: "#50b9e0",
        500: "#2aa0cd",
        600: "#1b81ae",
        700: "#17678d",
        800: "#175775",
        900: "#184962",
        950: "#102f41",
      },
    },
  },
```

:::info
Note that it's also possible to add a `DEFAULT` property with a color value if you want to be able to use for example `bg-hotpink` without a number suffix.
:::

After adding these colors we can use them anywhere in our project, for example `bg-hotpink-500`. Of course we can also use them in our shortcuts!

We have a slight problem though. If we pass in a color that is not available in the theme it will still look like a button and may not be obvious that the color was not detected properly. In this case we can add a check and only return the utility classes if the color actually exists.

```js
  [/^fancy-button-(.*)$/, ([, c], { theme }) => {
    if (Object.keys(theme.colors).includes(c))
      return `py-2 px-4 border-1 border-${c}-600 bg-${c}-300 hover:bg-${c}-400 rounded-lg shadow-md`
  }],
```

By doing so we will quickly notice that our shortcut didn't match the color we passed in.