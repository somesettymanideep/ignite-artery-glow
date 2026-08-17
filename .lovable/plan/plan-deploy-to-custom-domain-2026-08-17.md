# Plan: Deploy to Custom Domain

The project is currently configured for Netlify, but the user wants to deploy to "ignitevascularcenter.com". Since this is a TanStack Start project, it requires a Node.js/Edge runtime for SSR. I will configure the project for a static export if possible, or ensure the current Netlify deployment is correctly configured for the custom domain. However, the user specifically mentioned "deploy to the github pages", which usually hosts static sites. TanStack Start can be deployed to GitHub Pages if we use `preset: 'static'`.

## User Review Required

> [!IMPORTANT]
> GitHub Pages only supports static hosting. TanStack Start's SSR features (like server functions) will not work on GitHub Pages. If you need server-side features, Netlify or Vercel is recommended.
> I will proceed with configuring for GitHub Pages as requested.

## Proposed Changes

### Build Configuration
- Update `vite.config.ts` to use `preset: 'static'` in Nitro.
- Set the `base` path if deploying to a subfolder (not needed for apex domain).

### GitHub Actions
- Create `.github/workflows/deploy.yml` to automate deployment to GitHub Pages.

### Domain Configuration
- Ensure `CNAME` exists in `public/` (it already exists in root, I should move it to `public/` so it's included in the build).

## Technical Details
- Nitro Preset: `static`
- Build Output: `.output/public`
- Deployment Tool: GitHub Actions (gh-pages)

## Verification Plan
- Run `npm run build` to ensure static output is generated in `.output/public`.
- Verify `CNAME` is present in the output.
