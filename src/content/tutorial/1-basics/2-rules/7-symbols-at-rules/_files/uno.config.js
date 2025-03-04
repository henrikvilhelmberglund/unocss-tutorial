import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";

export default defineConfig({
	presets: [presetWind3()],
	rules: [
		[
			/^sometimes-a-grid$/,
			function* ([, d]) {
				yield {
					display: "grid",
				};
				yield {
					display: "flex",
				};
			},
		],
		[
			/^fancy-(.*)$/,
			function* ([, c], { symbols }) {
				yield { color: `${c}` };
				yield { "text-decoration": `underline ${c}` };
				yield {
					[symbols.selector]: (selector) => `${selector}:hover`,
					"text-decoration-thickness": `8px`,
				};
			},
		],
	],
});
