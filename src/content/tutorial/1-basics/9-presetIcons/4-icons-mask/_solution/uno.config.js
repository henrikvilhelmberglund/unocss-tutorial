import { defineConfig, presetUno } from "unocss";
import myPreset from "./my-preset";

export default defineConfig({
	presets: [presetUno(), myPreset()],
});
