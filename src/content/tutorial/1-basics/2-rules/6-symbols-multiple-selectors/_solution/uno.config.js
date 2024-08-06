import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      /^fancy-(.*)$/,
      function* ([, c], { symbols }) {
        yield { color: `${c}` };
        yield { "text-decoration": `underline ${c}` };
        yield { 
          [symbols.selector]: selector => `${selector}:hover`,
          "text-decoration-thickness": `8px` 
          };
      },
    ],
  ],
});
