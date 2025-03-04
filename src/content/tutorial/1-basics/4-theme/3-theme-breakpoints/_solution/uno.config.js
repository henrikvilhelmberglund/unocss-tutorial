import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";

export default defineConfig({
	presets: [presetWind3()],
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
