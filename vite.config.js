import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/clinycare-web/",
  plugins: [tailwindcss()],
});
