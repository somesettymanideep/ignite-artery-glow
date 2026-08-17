# Deployment Fix: Ignite Vascular Center

The user reports a 404 error on their custom domain (ignitevascularcenter.com) after deploying to GitHub Pages. However, the project is configured for **Netlify SSR** (`nitro: { preset: "netlify" }` in `vite.config.ts`). GitHub Pages does not support TanStack Start's SSR features natively (it only supports static files).

## Analysis
- **Current State**: The project uses TanStack Start, which requires a server runtime (Node.js, Netlify Functions, etc.) for SSR.
- **Problem**: Deploying an SSR app to a static host (GitHub Pages) results in a 404 because the server entry point (index.html/server-functions) is not being handled correctly by the host's routing.
- **Solution**: 
    1. If the user wants to stay on GitHub Pages, we would need to convert to Static Site Generation (SSG), which TanStack Start supports via `prerender` and a static preset.
    2. However, the user previously mentioned "we deploy netlify" (see context summary), and the config is already set for Netlify.
    3. The 404 on `ignitevascularcenter.com` likely means the DNS is pointed to GitHub Pages instead of Netlify, or Netlify is not configured to handle the custom domain.

## Plan

### Step 1: Fix `CNAME` Conflict
The `CNAME` file in the root is a GitHub Pages convention. If they are moving to Netlify, this should be in `public/` or managed via Netlify UI. I will move it to `public/` to ensure it's included in the build output, or remove it if they prefer managing via UI. Since they have a file named `ignitevascularcenter.com` in `public/`, I'll check that.

### Step 2: Ensure Netlify Configuration is Robust
The `netlify.toml` currently only has an asset proxy. I will add a "catch-all" redirect for SPA/SSR routing to ensure Netlify Functions handle all paths correctly.

### Step 3: Provide DNS Instructions
Since I cannot change the user's DNS settings, I will provide clear instructions on how to point their domain to Netlify.

### Step 4: Add `404.html` fallback (Static safety)
For environments that fall back to static files, I'll add a `public/404.html` that redirects back to index (or is a copy of it) if applicable, though for SSR this is less critical than the Nitro preset.

## Technical Details
- **Vite Config**: Already set to `nitro: { preset: "netlify" }`.
- **Netlify Redirects**: Need to ensure all requests go to the Nitro handler.
- **Domain**: DNS must point to Netlify's name servers or `A` records.

---

### File Changes

1. **netlify.toml**
   - Add catch-all redirect for the Nitro SSR handler.
   
2. **public/CNAME** (New)
   - Add the domain to `public/CNAME` just in case they are using a build tool that looks for it, though Netlify uses its own settings.

3. **src/routes/sitemap[.]xml.ts**
   - Update `BASE_URL` to `https://ignitevascularcenter.com`.

4. **Cleanup**
   - Remove root-level `CNAME`.
