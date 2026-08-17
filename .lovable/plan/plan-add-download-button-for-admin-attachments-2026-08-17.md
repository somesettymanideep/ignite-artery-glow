# Plan: Add Download Button for Admin Attachments

The user wants a "Download" button for each attachment in the admin dashboard to ensure files can be retrieved even if previews fail.

## Proposed Changes

### 1. `src/routes/admin.tsx`
- Modify the attachment cell rendering logic.
- For images: Keep the existing preview thumbnail, but add a small "Download" button next to it.
- For other files (like PDFs): Ensure the download button is clearly visible and functional.
- Use a consistent style for these action buttons.

## Verification Plan
1. **Manual Verification:** 
   - Open the admin dashboard (`/admin`).
   - Check existing submissions with attachments.
   - Verify that images have a download button that triggers a browser download.
   - Verify that PDFs still have their download button.
2. **Build Check:** Run `npm run build` to ensure no TypeScript errors or regressions.
