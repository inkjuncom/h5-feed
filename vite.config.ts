import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePluginFakeServer } from "vite-plugin-fake-server";

export default defineConfig({
  plugins: [react(), vitePluginFakeServer()],
});
