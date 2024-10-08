---
type: lesson
title: Using transformerVariantGroup
focus: /uno.config.js
---

# Using transformerVariantGroup

transformerVariantGroup is a transformer that can be imported from `unocss`.

First import the transformer and add it to the transformers array. After doing so you will be able to use it by adding `()` next to the utilities.

```ts
  transformers: [
    transformerVariantGroup(),
  ],
```

When using transformerVariantGroup you can have a single prefix meaning for example `font-(<all font related utilities>)`. You can even nest the groups like in `hover:(text-(4xl blue-300) decoration-(blue-300 6 wavy))`. Here is the HTML for the example in the preview, the first one normal and the second one using transformerVariantGroup:

```html
<p
	class="font-lobster font-bold text-3xl text-blue-500 underline decoration-blue-500 decoration-3 decoration-double hover:text-4xl hover:text-blue-300 hover:decoration-blue-300 hover:decoration-6 hover:decoration-wavy">
	This is text using font-lobster.
</p>

<p
	class="font-(lobster bold) text-(3xl blue-500) underline decoration-(blue-500 3 double) hover:(text-(4xl blue-300) decoration-(blue-300 6 wavy))">
	This is text using font-lobster.
</p>
```

:::warn
`transformerVariantGroup` does not work in the runtime used in this tutorial since it needs to transform the code via a build step. See this example on the playground for the final result: [play](https://unocss.dev/play/?version=0.62.3&html=DwBwUAkAxgNghgZwQXgEQDMD2A7ALgWhkwCMFcBTAJwAIs99jMYATaigDwIGZ2Y3zODGAFdy%2BAKwAGSdWHZmVGAEts5agqiZKcXEpxDRE6evKbtu-VxNmde7PmaZhxGGoAWmAG5UAXBwIALLzUHt6UfgIELoZcxqG%2BGlq2%2BtFisTLx4YnmdvgAbCFeCaZJFvYA7nCeAJ6oAHyQACpuSgjUrfycsggqAOa0OAREpBSUAHRgwAD0IA2T4NDwSGh0BAAUw2RU1IwsAJSd6zx8qUaSB3IKlMqq1qW5a6dSMlaOzq4HmT5r-vhrQScRGlpAdssl7I8gfh0tQCpUans9vUmi02h1-N0%2BgN6JtRhNprMwEA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcEWSIUB1DBwBixGDKpsAhrjpZoIDFABqx9qZgBxKBC5gkAXzhZXIOADkXCoSdHQBSEgYAB6QsOjYxlwANvCYOPhEJMCkABTIqFAp9ABccADaVKjlARJcdDAQIAC0RckYAeSIcFLJ0GUBtGgBcJ4AurITRlCm5pbWdGXlJmYWUFa29sCOLm5guQCUU6h0ABbQMHUGZQWogXUNTc1nF1cBAzAxMM3JpHCf0W%2B0FMpAwcHOADdrCUAd9PsZkp0qJ41PJGIsKlU5KIlCpDrJhGjmKx2NxeAJ8Vj1OIpGZ8liThIERgygBGAB0ACYCXcJGhcANTqwwIsAPSi%2BggdlnUVIu6jA486kwLS6fR0emEiAQ4CYKADUgQCCkdqdODihJYJKpOTa3XWKgWXDXRBYi0wU6iOAAd2AyWScC%2BGFwaH%2Bnst1vgHowVixdFmAwAShAOBBGnK7iBiBAlgEdMAZnAiJgzXmC8Y4ABZbMlAAsAAZ6%2BQAOyNgLHO4Wh6NfzEehYvocBrQwIAGRTw6gGdQyWMjSWDNd8vluGMVgGo7nEGny%2B9GByQoxNQb9dLrdPHeXcGAMARwAkZTYXAwPNQKMXtyvq-XgXjZme1h8Du8o0HaeoDCo%2BDAaMPIdu%2BngHFQUwIUgQA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA)
:::