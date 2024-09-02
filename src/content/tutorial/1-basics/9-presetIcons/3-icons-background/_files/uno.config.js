import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
	presets: [presetUno(), presetIcons({ cdn: "https://esm.sh/" })],
});
