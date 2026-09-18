import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Permite escuchar en todas las direcciones de red local
    allowedHosts: [
      '.ngrok-free.app', // Permite cualquier subdominio gratuito de ngrok
      '.ngrok.io',       // Permite dominios estándar de ngrok
    ],
  },
})