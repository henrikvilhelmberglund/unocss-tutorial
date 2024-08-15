import { globSync, convertPathToPattern } from 'fast-glob';
import fs from 'node:fs/promises';
import { basename, dirname, join, sep } from 'node:path';
import presetTutorialKit from './presetTutorialKit';
import { defineConfig, definePreset, mergeConfigs, presetIcons, presetUno, transformerDirectives } from 'unocss';

const iconPaths = globSync('./icons/languages/*.svg');

const customIconCollection = iconPaths.reduce(
  (acc, iconPath) => {
    const collectionName = basename(dirname(iconPath));
    const [iconName] = basename(iconPath).split('.');

    acc[collectionName] ??= {};
    acc[collectionName][iconName] = async () => fs.readFile(iconPath, 'utf8');

    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>,
);

export default defineConfig({
  
  content: {
    inline: globSync([
      `${convertPathToPattern(join(require.resolve('@tutorialkit/components-react'), '..')).replaceAll(sep, "/")}/**/*.js`,
      `${convertPathToPattern(join(require.resolve('@tutorialkit/astro'), '..')).replaceAll(sep, "/")}/default/**/*.astro`,
    ]).map((filePath) => {
      return () => fs.readFile(filePath, { encoding: 'utf8' });
    }),
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: {
        dark: '[data-theme="dark"]',
      },
    }),
    presetTutorialKit(),
    presetIcons({
      collections: {
        ...customIconCollection,
      },
    }),
  ],
});
