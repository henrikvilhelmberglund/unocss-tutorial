import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	theme: {
		breakpoints: {
			md: "640px",
		},
	},
});
