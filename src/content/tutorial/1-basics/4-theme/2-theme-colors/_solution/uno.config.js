import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			"very-cool": "#0000ff", // class="text-very-cool"
			random: {
				50: "color-mix(in srgb, oklch(95% 0.10 var(--hue)) 30%, oklch(100% 0 360))",
				100: "color-mix(in srgb, oklch(95% 0.10 var(--hue)) 80%, oklch(100% 0 360))",
				200: "oklch(90% 0.12 var(--hue))",
				300: "oklch(85% 0.20 var(--hue))",
				400: "oklch(74% 0.20 var(--hue))",
				500: "oklch(62% 0.20 var(--hue))",
				600: "oklch(54% 0.23 var(--hue))",
				700: "oklch(49% 0.21 var(--hue))",
				800: "oklch(42% 0.17 var(--hue))",
				900: "oklch(37% 0.14 var(--hue))",
				950: "oklch(29% 0.09 var(--hue))",
				960: "oklch(23% 0.09 var(--hue))",
				970: "oklch(17% 0.09 var(--hue))",
				980: "oklch(11% 0.09 var(--hue))",
				990: "oklch(6% 0.09 var(--hue))",
			},
		},
	},
});
