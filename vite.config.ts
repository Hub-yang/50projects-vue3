import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  resolve: {
    alias: {
      '~': `${path.resolve(import.meta.dirname, 'src')}`,
    },
  },
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dirs: ['./src/api/**'],
      dts: true,
    }),
    Components({
      dts: true,
    }),
  ],
  server: {
    open: true,
    hmr: true,
    host: true,
    port: 5173,
  },
})
