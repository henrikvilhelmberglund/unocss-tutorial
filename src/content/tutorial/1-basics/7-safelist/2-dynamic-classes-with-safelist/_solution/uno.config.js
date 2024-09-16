import { defineConfig } from "@unocss/runtime";
import presetUno from "https://esm.sh/@unocss/preset-uno";
import { colors } from "./colors.js";

export default defineConfig({
	presets: [presetUno()],
	safelist: [...colors.map((color) => `bg-${color}-500 hover:bg-${color}-600`.split(" "))],
});
