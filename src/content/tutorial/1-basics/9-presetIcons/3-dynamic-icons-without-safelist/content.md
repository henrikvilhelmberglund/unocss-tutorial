---
type: lesson
title: Dynamic icons without safelist
focus: /uno.config.js
---

# Dynamic icons without safelist

When using large quantities of dynamic icons you may want to avoid using the safelist because all of the icons would load even when not needed.

An example is country flags. It's likely better to use an object with the classes already defined and pass a country code to get the correct icon.