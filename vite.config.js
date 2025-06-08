import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/y2s1-web-app/',  // Set this to the repository name
  chunkSizeWarningLimit: 1000, // or a size that fits your requirements
})
