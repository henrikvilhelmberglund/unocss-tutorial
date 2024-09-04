import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";
import { colors } from "./colors.js";

export default defineConfig({
	presets: [presetUno()],
	safelist: [],
});
