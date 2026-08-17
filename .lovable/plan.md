# Plan - Fix GitHub Pages Empty Page and Verify Deployment

The user is experiencing an empty page on `ignitevascularcenter.com` (GitHub Pages). My local build investigation showed that `dist/client/index.html` was NOT generated, which is the root cause for a static site. TanStack Start's `static` preset should generate these files, but it might need explicit `prerender` configuration to crawl the routes and emit HTML files.

## Proposed Changes

### Build Configuration
#### [vite.config.ts]
- Explicitly enable prerendering for all known routes to ensure Nitro generates `index.html` and other static pages.

### Static Hosting
#### [public/404.html]
- Add a `404.html` that redirects to `index.html` (standard SPA trick for GitHub Pages) to handle direct navigation to subroutes.

## Verification Plan

### Automated Tests
- Run `npm run build` locally.
- Verify that `dist/client/index.html` exists.
- Verify that subdirectories (e.g., `dist/client/about/index.html`) exist for other routes.

### Manual Verification
- Inspect the generated `index.html` to ensure it contains the root mounting point.
