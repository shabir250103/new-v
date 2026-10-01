# NewV Tours and Travels

## Changes Made

| Area | Change | Status |
| --- | --- | --- |
| Branding | Replaced the navbar and About page branding with the NewV logo asset. | Done |
| Logo sizing | Increased the logo size responsively for desktop, tablet, and mobile screens. | Done |
| Navigation | Restored the transparent gradient navbar after testing a blurred glass background. | Done |
| Why Choose Us | Removed feature icons and redesigned the cards with numbered blue panels and accent bars. | Done |
| Routing | Added explicit Vercel rewrites to each page's generated HTML; unknown URLs return 404. | Done |
| Validation | Confirmed the project builds successfully with `npm run build`. | Done |

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Google indexing

- `public/robots.txt` allows crawling and points to `public/sitemap.xml`, which lists the seven public pages.
- `src/seo.js` contains titles, descriptions, canonical URLs, social metadata and TravelAgency structured data based on the site's contact details.
- `npm run build` writes page-specific metadata into each route's HTML via `scripts/generate-seo.mjs`. Page content still renders with React. `src/Seo.jsx` updates metadata during client-side navigation.
- Vercel serves the generated HTML through explicit rewrites and returns a 404 for unknown paths. Keep the Google verification HTML file in `public/`.
- When adding a page, update the React routes, SEO page map, sitemap and Vercel rewrites together.

After deployment, verify `/robots.txt`, `/sitemap.xml` and `/googleeac4ff3325a9dd2a.html` load directly. Submit `https://newvtoursandtravels.com/sitemap.xml` in Google Search Console, then use URL Inspection to check the homepage and request indexing. Google decides whether and when to index pages; these files do not guarantee inclusion.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
