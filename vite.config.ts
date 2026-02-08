import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev
export default defineConfig({
  base: '/israel-lingo-guide/', 
  plugins: [react()],
})
