import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";
import transformerDirectives from "https://esm.sh/@unocss/transformer-directives";

export default defineConfig({
	presets: [presetWind3()],
	transformers: [transformerDirectives()],
});
