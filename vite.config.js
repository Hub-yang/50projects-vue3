import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      dirs: ['./src/api/**'],
    }),
  ],
  server: {
    open: true,
    hmr: true,
    host: '0.0.0.0',
    port: '5173',
  },
  devServer: {
    proxy: 'http://127.0.0.1:5173/',
  },
})
