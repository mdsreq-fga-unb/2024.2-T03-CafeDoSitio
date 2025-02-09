import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig(({ mode }) => {
  // Carrega as variáveis do .env na raiz do monorepo
  const env = loadEnv(mode, path.resolve('../../'), '')

  return {
    plugins: [react()],
    base: './',
    envDir: '../../', // Define a raiz do monorepo como local do .env
    define: {
      'import.meta.env': JSON.stringify(env) // Garante que o Vite reconheça as variáveis
    },
    build: {
      target: 'esnext',
      modulePreload: true,
    },
    server: {
      port: 3000,
    }
  }
})
