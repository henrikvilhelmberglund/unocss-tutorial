// vite.config.ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  server: {
    warmup: {
      clientFiles: [
        './App.svelte',
        './uno.config.js'
      ],
    },
  },
});
