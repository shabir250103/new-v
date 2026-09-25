# NewV Tours and Travels

## Changes Made

| Area | Change | Status |
| --- | --- | --- |
| Branding | Replaced the navbar and About page branding with the NewV logo asset. | Done |
| Logo sizing | Increased the logo size responsively for desktop, tablet, and mobile screens. | Done |
| Navigation | Restored the transparent gradient navbar after testing a blurred glass background. | Done |
| Why Choose Us | Removed feature icons and redesigned the cards with numbered blue panels and accent bars. | Done |
| Routing | Added a Vercel SPA rewrite so direct visits to routes such as `/about` and `/packages` work in production. | Done |
| Validation | Confirmed the project builds successfully with `npm run build`. | Done |

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
