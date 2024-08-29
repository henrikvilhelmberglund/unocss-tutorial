import { defineConfig, presetUno } from "unocss";
import { colors } from "./colors.js"

export default defineConfig({
  presets: [presetUno()],
  safelist: []
});
