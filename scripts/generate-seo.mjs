import { readFile, writeFile } from 'node:fs/promises';
import { seoPages, renderSeoHead } from '../src/seo.js';

const output = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', output), 'utf8');
const marker = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
if (!marker.test(template)) throw new Error('SEO markers missing from built HTML');

for (const path of Object.keys(seoPages)) {
  const filename = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
  const html = template.replace(marker, `<!-- seo:start -->${renderSeoHead(path)}<!-- seo:end -->`);
  await writeFile(new URL(filename, output), html);
}
await writeFile(new URL('404.html', output), `<!doctype html>
<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
${renderSeoHead('/404')}</head><body><main><h1>Page not found</h1><p>The page you requested does not exist.</p><a href="/">Return to NewV Tours and Travels</a></main></body></html>`);
console.log(`Generated metadata for ${Object.keys(seoPages).length} pages and a 404 page.`);
