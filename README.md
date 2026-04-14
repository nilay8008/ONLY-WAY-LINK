# LinkTree — Nuxt 3 + Tailwind

A clean, animated personal link page built with **Nuxt 3**, **Tailwind CSS**, and **nuxt-icon**.

## Quick Start

```bash
# Install dependencies
npm install

# Dev server → http://localhost:3000
npm run dev

# Production build
npm run build
npm run preview
```

## Customising Your Profile

Edit **`composables/useProfile.ts`** — everything lives there:

| Field | What to change |
|-------|---------------|
| `name` | Your display name |
| `bio` | Tagline / short bio |
| `avatar` | URL to your profile photo |
| `socials[]` | Social icon links (icon names from [Iconify](https://icones.js.org)) |
| `links[]` | Your link cards (icon, label, href) |

### Changing the Avatar

Replace the `avatar` URL in `useProfile.ts` with your own image URL or drop an image into `/public/` and use `/your-photo.jpg`.

### Adding / Removing Links

```ts
links: [
  {
    id: 'unique-id',        // any unique string
    icon: 'uil:globe',      // any Iconify icon (uil:*, mdi:*, heroicons:*, etc.)
    label: 'My Website',    // displayed text
    href: 'https://...',    // destination URL
  },
  // ...
]
```

### Icon names

This project uses **[Iconify](https://icones.js.org)** via `nuxt-icon`.
Browse icons at https://icones.js.org — prefix format: `collection:icon-name`  
(e.g. `uil:twitter`, `mdi:github`, `heroicons:heart`)

## Project Structure

```
├── app.vue
├── nuxt.config.ts
├── tailwind.config.js
├── assets/
│   └── css/main.css          # Tailwind directives + animation utilities
├── composables/
│   └── useProfile.ts         # ← Edit your profile here
├── components/
│   ├── LinkCard.vue           # Individual link row
│   └── SocialIcon.vue        # Social icon button
└── pages/
    └── index.vue             # Main page
```

## Deployment

Works with any static host. For Vercel / Netlify:

```bash
npm run generate   # outputs to .output/public
```
