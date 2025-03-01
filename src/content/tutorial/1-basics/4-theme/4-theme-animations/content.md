---
type: lesson
title: Animations
focus: /uno.config.js
---

# Animations

You can add custom animations to the theme. A good reference for animations are the premade UnoCSS animations that can be found here: [source: preset-wind theme.ts](https://github.com/unocss/unocss/blob/main/packages-presets/preset-wind4/src/theme/animate.ts)

`animation:` can have 5 properties -

- keyframes (the @keyframes information for the animation, in other words what will change in the animation)

- durations (the length of the animation in seconds)

- timingFns (interpolation functions like linear/ease-in-out)

- properties (special properties like transform-origin and backface-visibility)

- counts (the times the animation should play, either infinite or a number)

In UnoCSS you specify the values you want for each animation in each property.

Meaning, `animate-spin` which should spin 360 degrees forever would look like this in the theme:

```ts
animation: {
  keyframes: {
    'spin': '{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
  },
  counts: {
    'spin': 'infinite',
  }
}
```

It is possible to have arbitrary animations as long as you have some keyframes.

`class="animate-[spin_3s_ease-in-out_2] keyframes-spin"` would use the spin keyframes but change the duration to `3s`, the interpolation to `ease-in-out` and play `2` times.

:::warn
Always include `keyframes-(animationname)` if you write an arbitrary animation to make sure the @keyframes rule is created properly.
:::

Copy this animaion and paste it into `animation:`

```ts
			keyframes: {
				wiggle: "{0%,100% {transform:rotate(-3deg)} 50% {transform:rotate(30deg)}}",
			},
			durations: {
				wiggle: "1s",
			},
			timingFns: {
				wiggle: "ease-in-out",
			},
			counts: {
				wiggle: "infinite",
			},
```
