import process from 'process'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load all environment variables
  const env = loadEnv(mode, process.cwd(), '')
  const isVercel = env.VERCEL === '1'

  return {
    plugins: [react()],
    base: isVercel ? '/' : '/NW-Movies/',
  }
})