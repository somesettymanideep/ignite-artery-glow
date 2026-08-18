# Plan - Fix GitHub Pages Deployment 404

The user is experiencing 404 errors after deploying a TanStack Start application to GitHub Pages. TanStack Start is a full-stack framework that typically requires a server runtime (SSR). GitHub Pages only supports static hosting.

To fix this, we need to convert the project to a static-only build (SSG/SPA) that works on GitHub Pages, or guide the user towards a platform that supports the current SSR configuration (like Netlify or Cloudflare Workers). However, since they explicitly mentioned GitHub Pages and adding nameservers, I will optimize for a static build that works on GitHub Pages.

## Proposed Changes

### Configuration
- **vite.config.ts**
  - Switch the Nitro preset from `netlify` to `github-pages` or a generic static preset if supported.
  - Set the `base` URL if they are deploying to a subpath (e.g., `username.github.io/repo-name/`), though "connected domain" suggests they might be at the root.
- **src/router.tsx**
  - Ensure the router is configured to use `createHashHistory` or ensure the static server (GitHub Pages) is configured to handle client-side routing. Since GitHub Pages doesn't support SPA fallbacks natively without a `404.html` hack, I'll add a `public/404.html` that redirects back to `index.html`.

### Static Assets
- Verify all asset paths are relative or use a consistent base path.

## Technical Details
- TanStack Start defaults to SSR. On GitHub Pages, we must use a static target.
- I will create a `public/404.html` which is a standard workaround for SPAs on GitHub Pages to prevent 404s on refresh or direct entry to sub-routes.
- I will update `vite.config.ts` to output a static site.

## Action Plan
1. Create `public/404.html` to handle client-side routing fallbacks on GitHub Pages.
2. Update `vite.config.ts` to use a static Nitro preset.
3. Verify `package.json` build scripts.
4. Inform the user that GitHub Pages is a static host and TanStack Start's server-side features (like server functions) will not work unless they use a compatible host, but the UI will now load.
