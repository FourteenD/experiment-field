import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path"

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
      "@": resolve(__dirname, "src"),
    }
  },
  css: {
    preprocessorOptions: {
      styl: {
        devSourcemap: true,
        additionalData: `@import "./src/common/styl/base.styl";`
      }
    }
  },
})
