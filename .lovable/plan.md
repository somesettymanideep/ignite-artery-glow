# Fix for 404 error on GitHub Pages

The project was showing a 404 page at `ignitevascularcenter.com` because it was not correctly configured for static hosting on GitHub Pages. This plan updates the build and prerendering strategy to ensure all routes are available as static HTML files.

## User Review Required

> [!IMPORTANT]
> The current setup uses a custom prerendering script. I have updated it to ensure that every page (About, Contact, Treatments, etc.) has its own `index.html` in its own folder, which is how GitHub Pages handles clean URLs without a server.

- **Check if you have any secret environment variables**: Since this is a static export, `process.env` variables will only be available if they are prefixed with `VITE_` or handled during the build process.

## Proposed Changes

### Build Configuration
- Update `vite.config.ts` to use `preset: "static"`.
- This ensures the build output is optimized for static hosting.

### Prerendering Script
- Enhance `scripts/prerender.mjs` to:
    - Prerender all top-level routes (`/`, `/about`, etc.).
    - Prerender all dynamic service routes (`/services/varicose-veins-treatment`, etc.) based on the data in `src/lib/services-data.ts`.
    - Create a `.nojekyll` file so GitHub Pages doesn't ignore files starting with underscores (like `_nitro`).
    - Generate a `CNAME` file for the custom domain `ignitevascularcenter.com`.
    - Create a `404.html` fallback (a copy of `index.html`) to handle any remaining client-side routing.

### Deployment Workflow
- The existing `.github/workflows/deploy.yml` is already configured to deploy the `dist/client` folder to the `gh-pages` branch, which is correct.

## Technical Details
- **Vite Preset**: `static` instead of `cloudflare-pages` or others that assume a server-side runtime.
- **Output Structure**: `dist/client/about/index.html` instead of `dist/client/about.html` ensures that `ignitevascularcenter.com/about` works correctly.
- **SPA Fallback**: `404.html` is a standard way to handle Single Page Application (SPA) routing on GitHub Pages when a user refreshes a sub-page.
