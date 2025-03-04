import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";
import presetWebFonts from "https://esm.sh/@unocss/preset-web-fonts";

export default defineConfig({
	presets: [
		presetWind3(),
		presetWebFonts({
			provider: "google", // default provider
			fonts: {
				// these will extend the default theme
				sans: "Roboto",
				mono: ["Fira Code", "Fira Mono:400,700"],
				// custom ones
				lobster: "Lobster",
				lato: [
					{
						name: "Lato",
						weights: ["400", "700"],
						italic: true,
					},
					{
						name: "sans-serif",
						provider: "none",
					},
				],
			},
		}),
	],
});
