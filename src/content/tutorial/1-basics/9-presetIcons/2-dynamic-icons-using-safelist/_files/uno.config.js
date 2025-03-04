import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";
import presetIcons from "https://esm.sh/@unocss/preset-icons/browser";

export default defineConfig({
	presets: [
		presetWind3({
			safelist: [
				["left", "up", "right", "down"].map((i) =>
					`grid-area-[${i}] i-carbon-arrow-${i}`.split(" ")
				),
			],
		}),
		presetIcons({ cdn: "https://esm.sh/" }),
	],
});
