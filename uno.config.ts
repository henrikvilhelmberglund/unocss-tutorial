import { unoConfig } from './src/content/tutorial/1-basics/1-introduction/1-welcome/_files/uno.config';
import { unoCSSConfig } from '@tutorialkit/astro';
import { globSync, convertPathToPattern } from 'fast-glob';
import fs from 'node:fs/promises';
import { basename, dirname, join, sep } from 'node:path';
import { defineConfig, mergeConfigs, presetIcons, presetUno, transformerDirectives } from 'unocss';

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
  ...unoCSSConfig,
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
    presetIcons({
      collections: {
        ...customIconCollection,
      },
    }),
  ],
});
