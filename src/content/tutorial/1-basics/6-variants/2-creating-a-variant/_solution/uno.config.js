import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";

export default defineConfig({
	presets: [presetWind3()],
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
