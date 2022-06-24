import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

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
      "@": resolve(__dirname, "/src"),
      vue: "vue/dist/vue.esm-bundler.js"
    }
  },
  css: {
    preprocessorOptions: {
      // styl样式全局注入
      styl: {
        imports: [resolve(__dirname, "./src/common/styl/base.styl")]
      }
    }
  },
})
