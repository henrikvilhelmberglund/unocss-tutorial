import { defineConfig } from "unocss";
import { presetUno } from "@unocss/preset-uno";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "*.{js,ts}",
      ],
      // exclude files
      // exclude: []
    },
  },
  presets: [presetUno()],
  rules: [["green", { color: "green" }]],
});
