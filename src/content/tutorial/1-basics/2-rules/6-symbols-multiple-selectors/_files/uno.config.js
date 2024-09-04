import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	rules: [
		[
			/^fancy-(.*)$/,
			function* ([, c]) {
				yield { color: `${c}` };
				yield { "text-decoration": `underline ${c}` };
			},
		],
	],
});
