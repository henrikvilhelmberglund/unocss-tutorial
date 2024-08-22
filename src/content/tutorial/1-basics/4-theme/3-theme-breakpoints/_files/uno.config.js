import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	theme: {
    breakpoints: {
      // in the runtime that this tutorial uses breakpoints are actually merged, so this is here to show how it would look normally
			sm: undefined,
			// 
			md: "640px",
		},
	},
});
