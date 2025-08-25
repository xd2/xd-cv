import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base nécessaire pour GitHub Pages si le site est servi depuis /<repo-name>/
  // Remplacez par '/' si vous déployez sur <user>.github.io ou un domaine personnalisé
  base: '/xd-cv/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
})