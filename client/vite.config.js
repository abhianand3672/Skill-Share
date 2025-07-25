import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Adjust the target to your backend server
        secure: false,
      }
    }
  },
  plugins: [react()],
})
