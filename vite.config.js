import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renderSeoHead } from './src/seo.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'page-seo',
    transformIndexHtml(html) {
      return html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, `<!-- seo:start -->${renderSeoHead('/')}<!-- seo:end -->`)
    },
  }],
})
