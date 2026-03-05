import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePluginFakeServer } from "vite-plugin-fake-server";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), vitePluginFakeServer()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        search: resolve(__dirname, "views/search.html"),
        rule: resolve(__dirname, "views/rule.html"),
        coupon: resolve(__dirname, "views/coupon.html"),
      },
    },
  },
});
