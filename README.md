# native-public

Public website for **Native Restaurant & Camping**. Fully static (Astro), content lives in JSON files, no database. Design decisions live in [`DESIGN.md`](./DESIGN.md).

## Commands

```bash
npm run dev       # http://localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built site
```

## Editing content (no code needed)

All user-visible text lives in `src/data/*.json`:

| File | Controls |
|---|---|
| `site.json` | Name, phone, WhatsApp, email, address, hours, socials |
| `menu.json` | Signature dishes and full menu by category |
| `camping.json` | Packages, amenities, practical details (camping page is paused; data kept for relaunch) |
| `images.json` | Every photo URL and alt text |
| `faqs.json` | Per-page FAQ entries |

Commit + push to deploy (Vercel builds automatically).

## Important: photos are placeholders

All photography is currently hot-linked from Unsplash, chosen to match each
section. Replace the URLs in `src/data/images.json` with the business's real
photos as soon as they exist, and keep the alt text honest.

## Replace before launch

1. `site.json` — real phone/WhatsApp/email/address/hours
2. `images.json` — real photography
3. `astro.config.mjs` `SITE` and `public/robots.txt` — real domain (keep in sync)
4. `menu.json` / `camping.json` — real items and prices

## Deploy

Separate Vercel project from the management dashboard repo. Region `sin1`.
No environment variables needed (no DB, no APIs).
