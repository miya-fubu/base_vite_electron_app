import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const path = require('path')

export default defineConfig({
  base: path.resolve(__dirname, './dist_vite'),
  plugins: [
    reactRefresh()
  ],
  build: {
    outDir: "dist_vite"
  }
})
