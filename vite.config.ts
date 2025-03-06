import path from "path";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite"; // ✅ Use Tailwind Vite plugin

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
