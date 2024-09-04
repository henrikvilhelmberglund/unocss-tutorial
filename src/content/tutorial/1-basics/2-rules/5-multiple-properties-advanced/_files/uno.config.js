import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	rules: [[/^fancy-(.*)$/, ([, c]) => ({ color: `${c}`, "text-decoration": `underline ${c}` })]],
});
