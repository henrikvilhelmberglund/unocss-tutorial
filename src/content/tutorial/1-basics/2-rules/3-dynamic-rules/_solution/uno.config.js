import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [/^fancy-(.*)$/, ([, c]) => ({ color: `${c}` })]
  ],
});
