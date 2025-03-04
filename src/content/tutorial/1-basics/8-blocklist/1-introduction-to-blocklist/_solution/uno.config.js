import { defineConfig } from "@unocss/runtime";
import presetWind3 from "https://esm.sh/@unocss/preset-wind3";

export default defineConfig({
	presets: [presetWind3()],
	blocklist: [...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`)],
});
