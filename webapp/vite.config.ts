import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// :: ---

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env')

  // :: Allows access to env vars in HTML.
  //    https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
  const htmlPlugin = () => ({
    name: 'html-transform',
    transformIndexHtml(html: string) {
      return html.replace(/%(.*?)%/g, (match, p1) => env[p1])
    },
  })

  return {
    plugins: [react(), htmlPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
