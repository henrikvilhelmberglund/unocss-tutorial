import { defineConfig, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno()],
	theme: {
	},
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

