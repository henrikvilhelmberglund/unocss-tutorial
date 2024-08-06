import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      /^fancy-(.*)$/,
      function* ([, c]) {
        yield { color: `${c}` };
        yield { "text-decoration": `underline ${c}` };
      },
    ],
  ],
});
