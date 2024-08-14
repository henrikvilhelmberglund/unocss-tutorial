import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			"very-cool": "#0000ff", // class="text-very-cool"
		},
	},
});
