import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        // tailwindcss - processed via CLI
        autoprefixer,
      ],
    },
  },
})
