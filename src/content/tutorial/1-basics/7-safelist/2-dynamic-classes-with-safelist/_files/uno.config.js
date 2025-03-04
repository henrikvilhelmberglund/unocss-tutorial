import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";
import { colors } from "./colors.js";

export default defineConfig({
	presets: [presetWind3()],
	safelist: [],
});
