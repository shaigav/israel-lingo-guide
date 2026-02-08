import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin'

// https://vitejs.dev
export default defineConfig({
  base: '/israel-lingo-guide/', 
  plugins: [react()],
})
