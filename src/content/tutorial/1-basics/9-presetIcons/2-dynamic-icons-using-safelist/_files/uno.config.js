import { defineConfig } from "@unocss/runtime";
import presetUno from "https://esm.sh/@unocss/preset-uno";
import presetIcons from "https://esm.sh/@unocss/preset-icons/browser";

export default defineConfig({
	presets: [
		presetUno({
			safelist: [
				["left", "up", "right", "down"].map((i) =>
					`grid-area-[${i}] i-carbon-arrow-${i}`.split(" ")
				),
			],
		}),
		presetIcons({ cdn: "https://esm.sh/" }),
	],
});
