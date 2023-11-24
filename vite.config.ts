import { defineConfig } from "vite";

const isProd = process.env.NODE_ENV === "production";

const base: string | undefined = isProd ? "/commit-university/" : "";

isProd && console.log("** BUILDING FOR PROD 🚀 **");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [],
  base,
});
