import { defineConfig } from "@unocss/runtime";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			"very-cool": "#0000ff", // class="text-very-cool"
		},
	},
});
