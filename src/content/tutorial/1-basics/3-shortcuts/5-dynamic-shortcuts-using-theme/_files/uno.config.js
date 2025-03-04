import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";

export default defineConfig({
	presets: [presetWind3()],

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
	],
});
