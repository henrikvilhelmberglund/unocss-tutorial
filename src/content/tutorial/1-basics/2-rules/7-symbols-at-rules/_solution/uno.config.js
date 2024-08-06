import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      /^sometimes-a-grid$/,
      function* ([, d], { symbols }) {
        yield {
          [symbols.parent]: "@media (max-width: 800px)",
          display: "grid",
        };
        yield {
          display: "flex",
        };
      },
    ],
    [
      /^fancy-(.*)$/,
      function* ([, c], { symbols }) {
        yield { color: `${c}` };
        yield { "text-decoration": `underline ${c}` };
        yield {
          [symbols.selector]: (selector) => `${selector}:hover`,
          "text-decoration-thickness": `8px`,
        };
      },
    ],
  ],
});
