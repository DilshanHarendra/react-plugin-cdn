import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000
  },
  build:{
    rollupOptions:{
      output:{
        entryFileNames: 'plugin.main.js',
        assetFileNames: 'plugin.main.css',
        chunkFileNames: "chunk.js",
      }
    }
  }
})
