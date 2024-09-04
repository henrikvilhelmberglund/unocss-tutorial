import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			hotpink: {
				50: "#fef1f8",
				100: "#fee5f2",
				200: "#ffcbe8",
				300: "#ffa1d3",
				400: "#ff69b4",
				500: "#fa3a95",
				600: "#ea1870",
				700: "#cc0a57",
				800: "#a80c47",
				900: "#8c0f3e",
				950: "#560121",
			},
			blanchedalmond: {
				50: "#fff8ed",
				100: "#ffebcd",
				200: "#fed9aa",
				300: "#fdbe74",
				400: "#fb973c",
				500: "#f97916",
				600: "#ea5e0c",
				700: "#c2460c",
				800: "#9a3812",
				900: "#7c3012",
				950: "#431607",
			},
			skyblue: {
				50: "#f2f9fd",
				100: "#e4f2fa",
				200: "#c2e5f5",
				300: "#87ceeb",
				400: "#50b9e0",
				500: "#2aa0cd",
				600: "#1b81ae",
				700: "#17678d",
				800: "#175775",
				900: "#184962",
				950: "#102f41",
			},
		},
	},
	shortcuts: [
		{
			"fancy-button-purple":
				"py-2 px-4 border-1 border-purple-600 bg-purple-300 hover:bg-purple-400 rounded-lg shadow-md",
		},
		[
			/^fancy-button-(.*)$/,
			([, c], { theme }) => {
				if (Object.keys(theme.colors).includes(c))
					return `py-2 px-4 border-1 border-${c}-600 bg-${c}-300 hover:bg-${c}-400 rounded-lg shadow-md`;
			},
		],
	],
});
