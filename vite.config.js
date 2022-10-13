import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    hmr: true,
  },
  devServer: {
    proxy: "http://127.0.0.1:5174/",
  },
})
