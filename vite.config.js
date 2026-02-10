import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/sheets-export': {
        target: 'https://docs.google.com',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/sheets-export/,
            '/spreadsheets/d/1iiRQkmHqMarmgjAkbcE3suVcTtH9aniYAf1wr75aQeY/export'
          )
      }
    }
  }
})

