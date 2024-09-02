import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	theme: {
    breakpoints: {
			md: "640px",
		},
	},
});
