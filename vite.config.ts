import { resolve } from "path";
import { defineConfig } from "vite";

const isProd = process.env.NODE_ENV === "production";

// chaging base path based on environment (needed for GH pages)
const base: string | undefined = isProd ? "/commit-university/" : "";

isProd && console.log("** BUILDING FOR PROD 🚀 **");

// https://vitejs.dev/config/
export default defineConfig({
  // multiple HTML entry points
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  // "locking" the dev server port to :3000
  server: {
    host: true,
    port: 3000,
  },
  plugins: [],
  base,
});
