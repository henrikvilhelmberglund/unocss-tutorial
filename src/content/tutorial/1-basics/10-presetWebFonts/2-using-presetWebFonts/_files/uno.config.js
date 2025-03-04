import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";
import presetWebFonts from "https://esm.sh/@unocss/preset-web-fonts";

export default defineConfig({
	presets: [presetWind3()],
});
