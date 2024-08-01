import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    ["fancy-purple", { color: "purple" }]
  ],
});
