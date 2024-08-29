---
type: lesson
title: Dynamic classes without safelist
focus: /App.svelte
---

# Dynamic classes without safelist

Safelist works well for dynamic classes, but there is another way to use dynamic classes without safelist.

Since the problem is that UnoCSS can't find the classes, it is possible to fix the problem by making the classes explicit. A way to accomplish this is by using objects with static classes.

```js
const classes = {
	red: "bg-red-500 hover:bg-red-600",
	blue: "bg-blue-500 hover:bg-blue-600",
	green: "bg-green-500 hover:bg-green-600 outline outline-green-400",
};
```

By then using the object and its property, for example in a loop `classes[color]` it is possible to get the correct classes generated without using safelist.

Another potential benefit of this method is that you can add classes, remove classes or in other ways edit the classes in each key. This means you can make each version unique without using template literals, eg. `color === green ? "green classes" : ""`, instead you can just add them to `green:` directly.

In the example a green outline was added for the green button.
