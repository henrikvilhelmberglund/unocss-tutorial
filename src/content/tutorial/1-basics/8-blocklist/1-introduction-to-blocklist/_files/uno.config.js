import { defineConfig } from "@unocss/runtime";
import presetUno from "https://esm.sh/@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	blocklist: [...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`)],
});
