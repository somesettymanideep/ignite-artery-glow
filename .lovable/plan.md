# SEO and Robots Directives Plan

This plan implements canonical tags, robots directives, and URL normalization to prevent duplicate content issues and ensure proper search engine indexing. It also confirms the favicon is correctly linked.

## Proposed Changes

### 1. Global SEO Configuration
- Define a base URL constant for production.
- Implement a global `robots` meta tag in `index.html`.
- Add canonical tags to all main routes to prevent duplication between `.lovable.app` and custom domains.

### 2. Route-Specific SEO Enhancements
- Update `src/routes/index.tsx` (Home): Add `robots: "index, follow"` and refine keywords.
- Update `src/routes/about.tsx` (About): Add `robots: "index, follow"`.
- Update `src/routes/contact.tsx` (Contact): Add `robots: "index, follow"`.
- Update `src/routes/treatments.tsx` (Treatments): Add `robots: "index, follow"`.
- Update `src/routes/gallery.tsx` (Gallery): Add `robots: "index, follow"`.
- Update `src/routes/case-studies.tsx` (Case Studies): Add `robots: "index, follow"`.
- Update `src/routes/second-opinion.tsx` (Second Opinion): Add `robots: "index, follow"`.

### 3. Favicon Verification
- Ensure the `<link rel="icon">` in `index.html` correctly points to `/favicon.png`.

## Technical Details
- **Base URL**: `https://ignite-artery-glow.lovable.app` (primary canonical host).
- **URL Normalization**: Canonical links will use the primary host to ensure search engines attribute all traffic to a single source, even if the site is accessed via the preview URL or custom domains.
- **Robots Directives**: Using `index, follow` for public pages. Admin or sensitive utility pages (if any were added in the future) would be `noindex, nofollow`.

## Verification Plan
- Check `index.html` for global robots and favicon tags.
- Verify each route's generated `<head>` contains a `<link rel="canonical">` pointing to the primary production URL.
- Verify each route's generated `<head>` contains a `<meta name="robots" content="index, follow">` tag.
