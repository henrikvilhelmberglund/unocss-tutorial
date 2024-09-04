import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	shortcuts: [
		{
			"fancy-button-purple":
				"py-2 px-4 border-1 border-purple-600 bg-purple-300 hover:bg-purple-400 rounded-lg shadow-md",
		},
		[
			/^fancy-button-(.*)$/,
			([, c]) =>
				`py-2 px-4 border-1 border-${c}-600 bg-${c}-300 hover:bg-${c}-400 rounded-lg shadow-md`,
		],
		[
			/^fancy-button2-(.*)$/,
			([, c]) =>
				`py-2 px-4 border-1 border-[color-mix(in_srgb,_${c}_70%,_black)] bg-[color-mix(in_srgb,_${c}_100%,_white)] hover:bg-[color-mix(in_srgb,_${c}_50%,_white)] rounded-lg shadow-md`,
		],
	],
});
