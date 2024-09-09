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
			sm: "320px",
			md: "640px",
		},
	};
};
```
