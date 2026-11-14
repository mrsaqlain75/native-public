# DESIGN.md — Native Public Site

The design choices for this site, written down once so they are never
re-decided per page. Read this before building or restyling anything.

## Purpose

A public website for Native Restaurant & Camping. It must read as
authored, warm, and specific. It must never read as a generated template.

## Palette (locked)

Base + ink + exactly one accent. No gradients, no glows, no shadows.

| Token | Value | Use |
|---|---|---|
| `bone` | `#F4EDE3` | page background, warm paper |
| `sand` | `#E7DCC8` | alternate surface (photo fallbacks, quiet blocks) |
| `ink`  | `#221A12` | text, dark sections (espresso brown, not gray) |
| `ink-soft` | `#5C4F40` | secondary text on bone |
| `clay` | `#A44A24` | the only accent: labels, links, focus rings |
| `clay-deep` | `#7C3519` | accent hover |

Rules: flat colors only. Borders are `ink/15` hairlines. Dark sections are
`ink` with `bone` text (high contrast, passes WCAG AA). Never introduce a
fourth hue.

## Type (locked)

| Role | Font | Notes |
|---|---|---|
| Display / headings | **Fraunces** (variable, opsz) | weight 500–600, letter-spacing −0.02em on large sizes, line-height 1.05–1.3 |
| Body / UI | **Manrope** | weight 400–700, line-height 1.6–1.8 |

Not Inter. Not Roboto. Not Space Grotesk + Instrument Serif. Not the
"serif italic for one word" trick. Hero sizes are dramatic
(`clamp(2.75rem, 7vw, 6rem)`), not incremental.

## Layout primitive (the signature)

**The hairline row**: full-width rows divided by `border-t border-ink/15`,
containing a Fraunces name on the left, optional description below, and a
price or meta value right-aligned. Used for menu teasers, amenities,
contact methods, FAQs. Cards, icon grids, stat banners, numbered steps,
and colored left-borders are banned.

**Photo variant**: when a row carries photography (full menu page,
camping packages), the row becomes a two-column grid on a shared
hairline: photo on the left (`aspect-[4/3]`), name / dotted leader /
price / description on the right. Every dish and every tent gets a photo.

Sections must vary in structure. Left-align by default; center nothing
except the mobile menu.

## Titles and labels

- Page heads use literal titles: "Our Menu", "Camping & Tents", "Gallery",
  "About Us", "Contact Us". No poetic page titles, no kicker/pre-title
  above them. The home hero tagline is the one exception.
- Text placed over photos is always bone/bone-80, never ink-soft or clay.

## Buttons (locked)

| Style | Classes | Use |
|---|---|---|
| Primary | `bg-clay text-bone px-8 py-4 text-sm font-bold hover:bg-clay-deep` | the one main CTA per section |
| Secondary (light bg) | `border border-ink/50 text-ink px-8 py-4 hover:bg-ink hover:text-bone` | WhatsApp/phone beside a primary |
| Secondary (photo/dark bg) | `bg-bone text-ink px-8 py-4 hover:bg-sand` | high-contrast on photos |

Bordered text links are reserved for tertiary "see all" links.

## Interaction

- Motion package: one-shot entrance on heroes/page heads only.
- Mobile nav: full-screen ink overlay, numbered Fraunces links, contact
  block at the bottom. No dropdown drawer.
- Gallery: uniform `grid-cols-2 lg:grid-cols-3` grid (no masonry), every
  photo opens in a full-screen dark lightbox (Esc / backdrop closes).
- Hours are rendered as "Open 24 hours, 7 days a week" from `site.json`.

## Copy rules

- Concrete over abstract. "Reserve a table", "Message us about camping".
- Banned words: unlock, elevate, seamless, discover, indulge, experience
  (as a verb), curated, journey.
- No em-dashes in site copy. Short sentences. Specific details (fire,
  pines, hours, prices) instead of adjectives.
- Max two CTAs per section: one primary, one quiet text link.

## Images

- Content-matched real photography only. No emoji, no AI illustrations,
  no gradient placeholders.
- Every photo gets a `sand` background behind it (graceful while loading
  or if a URL dies) and descriptive alt text.
- Current photos are Unsplash placeholders standing in for the business's
  real photography; swap the URLs in `src/data/*.json` when real photos
  exist. Art direction should stay warm and low-light (fire, dusk, wood).

## Anti-slop checklist (run before shipping any page)

1. No purple, no gradients, no colored glows or box-shadows.
2. Not Inter; headings and body are visibly different families.
3. No three-identical-card grids, no icon-topped features, no stat rows.
4. No badge pill above the hero headline.
5. No all-caps section labels.
6. Max two CTAs per section; CTAs are specific verbs.
7. No emoji anywhere in the UI.
8. Contrast: body text passes WCAG AA on both bone and ink surfaces.
9. Touch targets ≥ 44px.
10. Remove all text: the layout should still look like no other site.
