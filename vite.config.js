// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // Allows access from your phone
    port: 5173,           // Optional: specify port
    strictPort: true,     // Optional: avoids fallback ports
  }
})
