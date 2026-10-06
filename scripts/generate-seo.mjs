import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { seoPages, renderSeoHead, siteUrl } from '../src/seo.js';

const output = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', output), 'utf8');
const marker = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
if (!marker.test(template)) throw new Error('SEO markers missing from built HTML');

const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
});
const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

try {
  for (const path of Object.keys(seoPages)) {
    const filename = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
    const destination = new URL(filename, output);
    await mkdir(dirname(fileURLToPath(destination)), { recursive: true });
    const appHtml = render(path);
    const html = template
      .replace(marker, `<!-- seo:start -->${renderSeoHead(path)}<!-- seo:end -->`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    await writeFile(destination, html);
  }
} finally {
  await vite.close();
}

const sitemapUrls = Object.keys(seoPages)
  .map((path) => `  <url><loc>${siteUrl}${path}</loc><lastmod>2026-10-06</lastmod></url>`)
  .join('\n');
await writeFile(new URL('sitemap.xml', output), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`);
await writeFile(new URL('404.html', output), `<!doctype html>
<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
${renderSeoHead('/404')}</head><body><main><h1>Page not found</h1><p>The page you requested does not exist.</p><a href="/">Return to NewV Tours and Travels</a></main></body></html>`);
console.log(`Generated metadata for ${Object.keys(seoPages).length} pages and a 404 page.`);
