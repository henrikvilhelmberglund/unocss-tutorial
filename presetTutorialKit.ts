import { definePreset } from "unocss"
import { rules, shortcuts, theme } from "@tutorialkit/theme";

export default definePreset(() => {
  return {
    name: 'presetTutorialKit',
    rules,
    shortcuts,
    theme
  }
})