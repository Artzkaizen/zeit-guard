// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "artzkaizen.github.io",
  base: "https://github.com/artzkaizen/zeit-guard",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
