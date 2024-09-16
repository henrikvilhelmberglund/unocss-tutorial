import { defineConfig } from "@unocss/runtime";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	theme: {},
	extendTheme: (theme) => {
		return {
			...theme,
			breakpoints: {
				...theme.breakpoints,
				md: "640px",
			},
		};
	},
});
