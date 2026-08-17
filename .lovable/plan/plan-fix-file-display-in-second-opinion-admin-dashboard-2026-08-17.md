# Plan: Fix File Display in Second Opinion Admin Dashboard

The user reported that when a second opinion form is submitted, the image file is not displaying in the admin dashboard.

## Diagnosis
1.  **Form Submission (`src/routes/second-opinion.tsx`):** The `onChange` handler for the file input currently only stores the file name (`e.target.files?.[0]?.name`).
2.  **Storage (`src/lib/admin-store.ts`):** The store saves data as strings. Storing just the file name doesn't allow for viewing the actual image in the admin panel.
3.  **Admin Panel (`src/routes/admin.tsx`):** The dashboard renders data as text. It doesn't have specific logic to render Base64 image strings as images or handle file downloads.

## Proposed Changes

### 1. `src/routes/second-opinion.tsx`
-   Update `submit` function to convert the selected file to a Base64 string before calling `addSubmission`.
-   Update `onChange` of the file input to handle the file conversion.

### 2. `src/routes/admin.tsx`
-   Add logic to the table cell renderer to check if a value is a Base64 image string.
-   If it's an image, render a thumbnail that can be clicked to view the full size.
-   If it's a Base64 PDF (future-proofing), provide a download link.

### 3. `src/lib/admin-store.ts`
-   Increase the robustness of the `addSubmission` clean-up to handle larger Base64 strings (though localStorage has limits, it should handle a few small images).

## Verification Plan
1.  **Manual Test:** Open the second-opinion page, fill the form, upload an image, and submit.
2.  **Admin Check:** Log in to `/admin` and verify the file column shows the image or a link to it.
3.  **Code Review:** Ensure no existing features are broken and syntax is correct.
