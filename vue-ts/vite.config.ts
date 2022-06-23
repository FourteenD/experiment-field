import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '~': './',
      "@": "/src"
    }
  },
  css: {
    preprocessorOptions: {
      styl: {
        devSourcemap: true,
        additionalData: `@import ""`
      }
    }
  },
})
