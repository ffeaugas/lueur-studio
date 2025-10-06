import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/lueur-studio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: process.env.NODE_ENV === 'production' ? 'lueur-studio/public' : 'public',
  assetsInclude: ['**/*.glb', '**/*.otf', '**/*.ttf'],
})
