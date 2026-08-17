# Plan - Add WhatsApp Integration

Add a floating WhatsApp button with the number "+91 99661 17292" to provide a direct communication channel for users.

## User Review Required

> [!IMPORTANT]
> The WhatsApp button will be fixed to the bottom-left of the screen, opposite the emergency contact button, to ensure visibility without cluttering the UI.

## Proposed Changes

### Components

#### [NEW] `src/components/home/WhatsAppButton.tsx`
- Create a new fixed-position floating button.
- Use the WhatsApp brand green color (`#25D366`).
- Include a high-quality WhatsApp SVG icon.
- Link to `https://wa.me/919966117292` with a pre-filled welcome message.
- Add a "Chat with us" tooltip on hover.
- Implement a subtle entrance animation (fade/slide).

#### `src/routes/__root.tsx`
- Mount the `WhatsAppButton` component globally so it's accessible across all pages.

## Technical Details
- WhatsApp URL: `https://wa.me/919966117292`
- Branding: Official WhatsApp green `#25D366`.
- Icon: Lucide-react doesn't have a dedicated WhatsApp icon, so I'll use a custom SVG for brand accuracy.
- Position: `fixed bottom-6 left-6 z-50` (on mobile) and `fixed bottom-8 left-8 z-50` (on desktop).
