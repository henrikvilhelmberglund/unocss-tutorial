import { defineConfig } from "@unocss/runtime";
import presetUno from "https://esm.sh/@unocss/preset-uno";
import myPreset from "./my-preset";

export default defineConfig({
	presets: [presetUno(), myPreset()],
});
