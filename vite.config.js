import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcssOptions: {
      config: "postcss.config.js",
    },
  },
});
