import { access, readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const errors = [];
const seenTitles = new Map();
const seenDescriptions = new Map();

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith('.html') ? [path] : [];
  }));
  return nested.flat();
}

function routeFor(file) {
  const name = relative(dist, file).replaceAll('\\', '/');
  if (name === 'index.html') return '/';
  return `/${name.replace(/\.html$/, '')}`;
}

for (const file of await htmlFiles(dist)) {
  if (file.endsWith('404.html') || file.includes('/assets/') || file.includes('googleeac4ff3325a9dd2a.html')) continue;
  const route = routeFor(file);
  const html = await readFile(file, 'utf8');
  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  const canonicalCount = (html.match(/<link rel="canonical"/g) ?? []).length;
  const descriptions = html.match(/<meta name="description" content="[^"]+"/g) ?? [];
  const description = descriptions[0]?.match(/content="([^"]+)"/)?.[1];
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? '';

  if (h1Count !== 1) errors.push(`${route}: expected one h1, found ${h1Count}`);
  if (canonicalCount !== 1) errors.push(`${route}: expected one canonical, found ${canonicalCount}`);
  if (canonical && new URL(canonical).pathname !== route) errors.push(`${route}: canonical points to ${canonical}`);
  if (descriptions.length !== 1) errors.push(`${route}: expected one meta description`);
  if (!robots.startsWith('index, follow')) errors.push(`${route}: unexpected robots directive "${robots}"`);
  if (html.includes('<div id="root"></div>')) errors.push(`${route}: empty app root`);

  if (title) {
    if (seenTitles.has(title)) errors.push(`${route}: duplicate title also used by ${seenTitles.get(title)}`);
    seenTitles.set(title, route);
  }
  if (description) {
    if (seenDescriptions.has(description)) errors.push(`${route}: duplicate description also used by ${seenDescriptions.get(description)}`);
    seenDescriptions.set(description, route);
  }

  const structuredDataBlocks = [...html.matchAll(/<script id="seo-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (structuredDataBlocks.length !== 1) errors.push(`${route}: expected one structured-data block`);
  for (const match of structuredDataBlocks) {
    try { JSON.parse(match[1]); } catch { errors.push(`${route}: invalid JSON-LD`); }
  }

  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\salt="[^"]*"/.test(tag)) errors.push(`${route}: image missing alt attribute`);
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    if (src?.startsWith('/')) {
      try { await access(join(dist, src)); } catch { errors.push(`${route}: missing image ${src}`); }
    }
  }

  for (const href of [...html.matchAll(/\shref="(\/[^"]*)"/g)].map((match) => match[1])) {
    const target = href.split(/[?#]/)[0];
    if (target.startsWith('/images/') || target.startsWith('/assets/') || target === '/sitemap.xml') continue;
    const targetFile = target === '/' ? join(dist, 'index.html') : join(dist, `${target.slice(1)}.html`);
    try { await access(targetFile); } catch { errors.push(`${route}: broken internal link ${href}`); }
  }
}

const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const indexableRoutes = (await htmlFiles(dist))
  .filter((file) => !file.endsWith('404.html') && !file.includes('googleeac4ff3325a9dd2a.html'))
  .map(routeFor)
  .sort();
if (JSON.stringify([...sitemapUrls].sort()) !== JSON.stringify(indexableRoutes)) {
  errors.push('sitemap routes do not match generated indexable pages');
}

const robotsText = await readFile(join(dist, 'robots.txt'), 'utf8');
if (!/User-agent:\s*\*/i.test(robotsText) || !/Allow:\s*\//i.test(robotsText)) {
  errors.push('robots.txt does not explicitly allow crawling');
}
if (/Disallow:\s*\//i.test(robotsText)) errors.push('robots.txt blocks the site root');
if (!robotsText.includes('https://newvtoursandtravels.com/sitemap.xml')) {
  errors.push('robots.txt does not advertise the canonical sitemap URL');
}

const notFound = await readFile(join(dist, '404.html'), 'utf8');
if (!notFound.includes('noindex, follow')) errors.push('404 page is missing noindex, follow');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`SEO audit passed for ${indexableRoutes.length} indexable pages.`);
}
