import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/porfolio/',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 5173,
    host: true
  }
})
