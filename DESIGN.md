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
price or meta value right-aligned. Used for menu items, camping packages,
amenities, hours, contact methods, FAQs. One primitive, repeated. Cards,
icon grids, stat banners, numbered steps, and colored left-borders are
banned.

Sections must vary in structure. Left-align by default; center nothing
except the mobile menu.

## Motion

Motion (the `motion` package) is used in exactly two places:
1. hero / page-head elements fading up once on load (staggered),
2. nothing else. Hover states are CSS transitions.

No scroll-reveal-on-everything. No parallax.

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
