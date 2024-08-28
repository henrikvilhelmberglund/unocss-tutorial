import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('my-hover:'))
        return matcher
      return {
        matcher: matcher.slice(9),
        selector: s => `${s}:hover`,
      }
    },
  ]
});
