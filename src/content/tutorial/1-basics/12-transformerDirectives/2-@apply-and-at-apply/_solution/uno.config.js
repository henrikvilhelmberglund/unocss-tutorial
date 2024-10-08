import { defineConfig } from "@unocss/runtime";
import presetUno from "https://esm.sh/@unocss/preset-uno";
import transformerDirectives from "https://esm.sh/@unocss/transformer-directives";

export default defineConfig({
	presets: [presetUno()],
	transformers: [transformerDirectives()],
});
