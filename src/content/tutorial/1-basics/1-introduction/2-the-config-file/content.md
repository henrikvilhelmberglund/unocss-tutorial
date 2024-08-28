---
type: lesson
title: Configuring UnoCSS
focus: /uno.config.js
---

# Configuring UnoCSS

UnoCSS has a config file called `uno.config.js|ts`. This file allows you to easily customize UnoCSS. We will use this file later to add **rules**, **shortcuts** and more.

Right now we want to enable the default UnoCSS preset which is called **presetUno**. A preset is a collection of rules, shortcuts and other settings.

To enable the preset simply import `presetUno` from `unocss` and add it to the `presets` array in the config file like this: `presets: [presetUno()],`. It may take a few seconds for the changes to appear.

**presetUno** is a superset of popular utility-first frameworks such as Tailwind CSS and Windi CSS. This means that if you write Tailwind utility classes they should work as expected.
