import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  build: {

    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].min.js',
        chunkFileNames: 'js/[name].[hash].min.js',
        assetFileNames: 'js/[name].[hash].[ext]'
      }
    }
  }
})


