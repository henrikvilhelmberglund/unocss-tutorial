import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";
import myPreset from "./my-preset";

export default defineConfig({
	presets: [presetWind3(), myPreset()],
});
