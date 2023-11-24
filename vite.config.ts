import { defineConfig } from "vite";

const base: string | undefined =
  process.env.NODE_ENV === "production" ? "/commit-university/" : "";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [],
  base,
});