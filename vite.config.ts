import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// config when running on the server
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: ['gamehub.niklasedelstam.dev']
  },
})
/* config when running locally:
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
})
*/