import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  shortcuts: [
    {
      "fancy-button-purple":
        "py-2 px-4 border-1 border-purple-600 bg-purple-300 hover:bg-purple-400 rounded-lg shadow-md",
    },
    [
      /^fancy-button-(.*)$/,
      ([, c], { theme }) => {
        if (Object.keys(theme.colors).includes(c))
          return `py-2 px-4 border-1 border-${c}-600 bg-${c}-300 hover:bg-${c}-400 rounded-lg shadow-md`;
      },
    ],
  ],
});
