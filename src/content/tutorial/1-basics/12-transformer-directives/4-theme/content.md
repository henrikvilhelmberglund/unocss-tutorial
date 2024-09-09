---
type: lesson
title: theme()
focus: /uno.config.js
---

# theme()

You can write a preset by using definePreset() which returns a preset with a name, rules and any other properties you might have.

```ts
export default definePreset((options) => {
	return {
		name: "my-preset",
		// rules:
		// shortcuts:
		// etc
	};
});
```

An example preset can be found in `my-preset.js` with a rule imported from `my-button.js`, an animation and layer settings.

Try adding the preset to the config by importing it with

`import myPreset from "./my-preset";`

and adding it to the presets array like this:

`presets: [presetUno(), myPreset()]`

## Layers

You may want to give the user the option to override your utilities. In that case use the layers setting:

After the rule add `{ layer: "my-preset-layer" },` and in the preset (or your config) add this:

```ts
layers: {
			"my-preset-layer": -1,
			components: -1,
			default: 1,
			utilities: 2,
		},
```

This will allow the user to override your utilities since the `my-preset-layer` has the lowest priority.
