import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	rules: [
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
