import { resolve } from "path";
import { defineConfig } from "vite";

const isProd = process.env.NODE_ENV === "production";

const base: string | undefined = isProd ? "/commit-university/" : "";

isProd && console.log("** BUILDING FOR PROD 🚀 **");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "slides/index.html"),
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  plugins: [],
  base,
});
