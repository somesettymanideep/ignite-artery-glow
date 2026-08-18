# Plan: Enable Image Download in Admin Panel

Add a feature to the admin panel to allow downloading medical reports (base64 images) submitted via the Second Opinion form.

## User Review Required

> [!IMPORTANT]
> This feature assumes that medical reports are currently being stored as base64 data strings in the local store.

## Proposed Changes

### Admin Panel

#### [src/routes/admin.tsx](src/routes/admin.tsx)
- Update the table rows to detect if a value is a base64 image string (common in the `file` field of Second Opinion submissions).
- For such values, render a "Download Image" button or link instead of (or alongside) the raw string.
- Add a helper function to trigger a browser download for base64 data.

### Technical Details
- **Base64 Detection**: Use a regex or prefix check (`data:image/`) to identify images in the submission data.
- **Download Implementation**: Create a temporary anchor element with the base64 URI and a `download` attribute to save the file.
- **UI**: Add an icon-based download button in the table cell to keep the interface clean.

## Verification Plan

### Automated Tests
- N/A (Manual verification is more suitable for this UI change in the sandbox).

### Manual Verification
1. Submit a Second Opinion request with an "uploaded" image (simulated by the current form logic).
2. Log in to the Admin Panel (`admin`/`123456`).
3. Navigate to the "Second Opinion" tab.
4. Verify that the "Download Image" button appears for the medical report field.
5. Click the button and confirm the image downloads correctly.
