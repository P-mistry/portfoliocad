import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
  const detectedBase = repoName ? `/${repoName}/` : '/portfoliocad/'
  const base = process.env.VITE_BASE || detectedBase

  return {
    plugins: [react()],
    base,
  }
})
 