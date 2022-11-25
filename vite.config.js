import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "pinia", "vue-router"],
      // 指定配置文件生成的位置与文件名
      dts: "./src/automatic/auto-imports.d.ts",
      dirs: ["./src/api/**"],
      resolvers: [],
    }),
  ],
  server: {
    open: true,
    hmr: true,
    host: "0.0.0.0",
    port: "5173",
  },
  devServer: {
    proxy: "http://127.0.0.1:5173/",
  },
})
