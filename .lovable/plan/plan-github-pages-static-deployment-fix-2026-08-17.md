# Plan: GitHub Pages Static Deployment Fix

The user wants to deploy to GitHub Pages instead of Netlify. Since GitHub Pages is a static host and the app uses TanStack Start (which defaults to SSR), we need to switch to a static deployment strategy (SSG).

## Proposed Changes

### Configuration
- Update `vite.config.ts` to use a static Nitro preset (e.g., `static` or `github-pages`).
- Remove `netlify.toml` as it's no longer needed for GitHub Pages.
- Add a custom build step or configuration to generate a `404.html` (copy of `index.html`) to handle client-side routing.

### Technical Details
- TanStack Start supports static generation.
- GitHub Pages requires a `404.html` to handle routes that don't match a physical file on the server (like `/about` or `/services`).
- The `CNAME` file is already in `public/`, which is correct for GitHub Pages custom domains.

## File Changes
1. `vite.config.ts`: Update Nitro preset to `static`.
2. `netlify.toml`: Delete (via shell).
3. `package.json`: (Optional) Update build script if needed for static generation, though TanStack Start usually handles this via the Nitro preset.

## Verification Plan
1. Run `npm run build` locally in the sandbox.
2. Verify `dist` folder contains `index.html` and assets.
3. Check if we need to manually create `dist/404.html` or if Nitro does it.
