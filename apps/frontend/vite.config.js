import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'esnext', // Gera código compatível com módulos modernos
    modulePreload: true,
  },
  server: {
    port: 3000,
  }
})
