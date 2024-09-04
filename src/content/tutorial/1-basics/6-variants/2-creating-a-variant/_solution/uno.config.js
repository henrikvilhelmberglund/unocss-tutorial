import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	variants: [
		(matcher) => {
			if (!matcher.startsWith("my-hover:")) return matcher;
			return {
				matcher: matcher.slice(9),
				selector: (s) => `${s}:hover`,
			};
		},
	],
});
