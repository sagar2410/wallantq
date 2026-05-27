# Handoff: Wallantq — Premium Info Website

## Overview

Wallantq Gallery Private Limited is an Indian wall art, wall hanging, and installation art company moving from its current WordPress site at https://wallantq.com/ to a **premium Next.js + Tailwind CSS** build.

The goal is a premium **info + enquiry** website (no add-to-cart / checkout in the first build). A visitor who falls in love with a piece opens a **private enquiry** — a modal that auto-fills the product reference and sends a detailed message to the owner through one of: inline form, WhatsApp deep link, or email (mailto). The owner receives an enquiry tied to a specific product.

The founder will provide their own product photos and video from their Drive; this package ships with placeholder imagery that should be replaced 1:1.

## About the Design Files

The files in `design/` are **design references created in HTML** — a single-file prototype showing the intended look, rhythm, typography, color, and interactions. They are **not production code to copy directly**.

The task is to **recreate these HTML designs in Next.js + Tailwind CSS** using the patterns the developer establishes for the codebase (App Router, React Server Components where possible, component library of their choice, etc.). Tailwind tokens should be derived from the CSS variables in the prototype (listed in Design Tokens below).

## Fidelity

**High-fidelity.** Final colors, typography, spacing, and interactions are specified. The developer should recreate pixel-perfectly, then slot in the founder's real photography/video in place of the striped placeholders.

## Stack to build

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 with a custom theme wiring the tokens below
- **Fonts:** `next/font/google` — Cormorant Garamond (or Playfair Display — tweakable), Inter, JetBrains Mono
- **Imagery:** `next/image` with blur placeholders; an `<Placeholder>` component fallback that matches the prototype's striped look for missing assets
- **Content:** MDX or a lightweight CMS (Sanity / Payload) so the founder can edit products, events, and journal without code — the brief specifically asks for an admin panel
- **Enquiry modal:** Server action posts to a studio inbox + sends a Telegram/WhatsApp Business notification to the owner; client also exposes WhatsApp and mailto deep links
- **Deployment:** Vercel

## Pages / Screens

The prototype shows **3 primary surfaces**; the full product brief (see `brief/Wallantq_Product_Brief.pdf`) adds several more that must be implemented.

### 1. Home (`/`) — in prototype

- Top marquee strip (value props) on a dark band
- Sticky top bar: left nav (Atelier / Collection / Journal), centered wordmark with `est. 2019` sup, right actions (Search / Enquire / account icon)
- **Hero** — 2-col grid 1.15:1, min 78vh. Left: mono kicker, display-serif headline with italicized accent word, short deck, hero meta stats + underline CTA. Right: full-bleed hero image/video with `IMG · 001 / 12` overlay tag
- **Featured collection** — asymmetric 12-column grid, 5 products with staggered vertical offsets (see CSS `.grid-home .pcard:nth-child`). Each card = image (aspect 4/5), title (serif 22px), sub (sans 12px muted), number (mono 10px)
- **Story split** — full-bleed media left, copy right. Serif heading with italic accent, 2 paragraphs, signature line
- **Values strip** — 4 columns divided by hairlines, numbered Nº 01–04
- **Editorial pullquote** — centered italic serif on `--bg-2` background
- **CTA band** — "Private enquiry" with solid button
- **Footer** — dark (`--fg` bg, `--bg` text), 2fr/1fr/1fr/1fr grid: brand + description, Catalogue, Studio, Private line

### 2. Collection (`/collection`) — in prototype

- Col-head: mono eyebrow, massive serif headline (`Nº 142 quiet things.`), sub-deck + "Showing 24 of 142"
- Sticky filter bar: chip filters (pill, mono uppercase) + Grid/Index view toggle
- Product grid — density-responsive (2 / 3 / 4 cols via `data-density`)
- Commission CTA band + footer

### 3. Product Detail (`/collection/[slug]`) — in prototype

- 50/50 split, min 100vh
- **Left (gallery):** on `--bg-2`, main image (aspect 4/5) + 4-thumb row with active outline in brass
- **Right (info):** breadcrumb, `Nº 012 · one of one` kicker, serif title with italic accent, deck, 2×2 specs table (material / dimensions / weight / finish), enquire row ("Offered by private enquiry / ₹ on request" + primary button), 3-col extras (maker / lead time / delivery), fineprint
- **Provenance section** on `--bg-2`: 1fr/2fr split, numbered 4-item ordered list with hairline dividers
- Related "Kindred pieces" grid + footer

### 4. Private Enquiry Modal — in prototype

Opens from any product card or the global "Enquire" link. 960px max, 0.9fr/1.1fr grid.

- Left: product hero image with `Nº 012` tag
- Right: mono "Private enquiry" kicker, serif heading "Write to *the owner* about this piece."
- **Product ref card** — 60px image + `Enquiring about` label + product name (auto-filled)
- **Channel picker** — 3 equal-width cells (Form / WhatsApp / Email) with icon + name + sub. Active = brass border
- Fields: Name, City (row), Contact, Note (textarea). Underline-only inputs, labels in mono 10px uppercase
- Footer row: fineprint left, primary button right
- Behavior:
  - Form → server action → writes to DB + notifies owner (Telegram/WhatsApp Business/email)
  - WhatsApp → `wa.me/<owner-number>?text=<prefilled>` with product name + note
  - Email → `mailto:studio@wallantq.com?subject=Enquiry · <product>&body=<prefilled>`

### 5. Pages from the brief NOT yet in prototype — build in Next.js

From `brief/Wallantq_Product_Brief.pdf`:

- **About Us** — vision, founder story, commitment to premium
- **Custom Design / Bespoke wizard** — multi-step form the brief describes in detail:
  1. Country / state / city
  2. Type of property
  3. Where it will be placed
  4. Describe interior
  5. Colour preferences
  6. Approximate size
  7. Open-ended "what you're looking for"
  8. Photo upload of the space
  9. Personal info
  - After submit: show curated suggestions from catalogue + option to request customisation or go fully bespoke. Provide approximate quotation, then 24h reply with mockups
- **Premium segment** gated page — "design will not be available to all in public" per brief. Implement access via enquiry-gated reveal (email capture unlocks viewing)
- **B2B / Trade** — shop owners, distributors, interior designers, architects, hotels, cafes, gov. Separate CTA flow with enterprise/bulk enquiry
- **Events** — upcoming + ongoing events/sale/new drop with images, dates, CTA. Admin-editable
- **Journal / Editorial** — nav already points to this; use for storytelling
- **Contact**
- **Admin panel** — Sanity Studio or Payload CMS covering: products, categories, events, journal posts, testimonials, enquiry inbox, B2B/commission submissions
- **Country-aware layout** — brief mentions "country wise layout setting"; infer locale and localize copy + currency on request

## Interactions & Behavior

- **Nav:** client-side routing; current page underlined in top bar
- **Hero:** if a video exists, autoplay muted loop; fall back to still image
- **Cards:** hover → subtle `filter: brightness(0.96)` on image + move arrow in underline CTAs
- **Modal:** open → fade backdrop 250ms + content rise 300ms `cubic-bezier(.2,.8,.2,1)`. Close on × / backdrop click / Escape
- **Tweaks / theming:** in the prototype there's a Tweaks panel — in production this becomes CMS-controlled theme (no UI needed for end users)
- **Animations:** scroll-reveal (Framer Motion or CSS `animation-timeline: view()`) on section heads and product cards — fade up 16px over 600ms
- **Sticky filter bar** on Collection, top: 72px (below sticky nav)

## State Management

Minimal. Most pages are server-rendered. Client state only for:
- Enquiry modal (open, selected product, channel, form fields)
- Collection filter chip
- Gallery active thumb

Use React Server Components + server actions for form submission. No global store needed.

## Design Tokens

### Color (palette: ivory — default)

```
--ivory        #f5f1ea   background
--ivory-2      #ede7dc
--cream        #faf7f1   secondary background (--bg-2)
--ink          #1a1815   foreground text
--ink-2        #2b2824
--muted        #6b6459   secondary text
--stone        #c9c1b2   placeholder base
--line         #d9d2c4   hairlines
--brass        #a8864a   accent (primary)
--brass-deep   #8a6b36
```

### Alternate palettes (CMS-switchable, included in prototype)

- **stone:** `#e8e2d3 / #24201a / #7a5c2e`
- **mono:** `#f4f4f2 / #0c0c0a / #0c0c0a`
- **forest:** `#efece3 / #1c211b / #3e5136`
- **oxblood:** `#f3ede3 / #1e1614 / #6b1f27`

### Typography

- **Display serif:** Cormorant Garamond (400, 500) — weights 300/400/500/600 + italic 400. Fallback: Playfair Display. Letter-spacing `-0.015em` to `-0.02em` at large sizes.
- **Body sans:** Inter (300/400/500/600). Base body 15px / 1.55, letter-spacing `0.005em`
- **Mono:** JetBrains Mono (400/500) — used for eyebrows, metadata, footer labels, numerals. Always uppercase, `0.22em` letter-spacing, 10–11px

Heading scale (clamped):
- H1 hero: `clamp(52px, 7.2vw, 118px)` / 0.94
- H1 collection: `clamp(52px, 7vw, 112px)` / 0.96
- H2 section: `clamp(36px, 4.6vw, 68px)` / 1.02
- H3 split: `clamp(32px, 3.6vw, 54px)` / 1.05
- Product title: `clamp(40px, 5vw, 72px)` / 1.0
- Card title: 22px / 1.15
- Mono eyebrow: 10–11px / uppercase / 0.22em tracking

### Spacing

- Max content width: 1440px
- Horizontal pad: `clamp(24px, 4vw, 72px)`
- Section vertical pad: `clamp(72px, 10vw, 140px)`
- Grid gutter: 28–40px

### Radius / Shadow

Almost no radius — hairline edges only. Exceptions: chips, swatches, icon buttons (`border-radius: 999px`). No soft shadows — only the modal uses a deep shadow (`0 20px 50px rgba(0,0,0,0.15)`). Borders are 1px `--line`.

### Placeholder imagery

The prototype uses striped placeholder blocks — see `.ph` CSS. Build an `<ImagePlaceholder label="..." />` React component that mirrors this when a product image is missing, so the site never shows a broken state while the founder uploads assets.

## Assets

The founder will deliver:
- Product photography (hero + detail shots per product, 4+ per SKU)
- Hero video (for home)
- Studio/founder photography
- Logo (currently rendered as text wordmark in the prototype — replace once available)

Organize under `public/assets/`:
```
public/assets/
  products/<slug>/01.jpg, 02.jpg, ...
  products/<slug>/film.mp4
  studio/
  logo/
```

## Files in this bundle

- `design/Wallantq.html` — the hi-fi prototype (open in a browser). Contains Home, Collection, Product, Modal, and the Tweaks panel. All CSS tokens, layout math, and animation easings are in this one file.
- `brief/Wallantq_Product_Brief.pdf` — the founder's original product brief. **Read this first** — it covers premium segment logic, B2B models, events, custom-design wizard, and admin/ecom requirements the prototype does not yet visualize.
- `README.md` — this file.

## Implementation order suggestion

1. Scaffold Next.js + Tailwind, wire fonts + token theme
2. Build layout primitives: `<Shell>`, `<SectionHead>`, `<Placeholder>`, `<MonoEyebrow>`, `<UnderlineCTA>`, `<Button>`, `<Marquee>`, `<TopBar>`, `<Footer>`
3. Home page
4. Collection page + filter state
5. Product detail page
6. Enquiry modal + server action + WhatsApp/mailto helpers
7. Drop in CMS (Sanity recommended) for products, events, journal, settings (palette, display font)
8. Bespoke / custom-design multi-step form (from brief)
9. About, B2B/Trade, Events, Contact
10. Admin panel polish + country-aware settings

## Brand voice / copywriting notes

Quiet, confident, specific, slightly literary. Words to favor: *quiet, considered, private, in-rotation, one-of-one, signed, studio, atelier, kindred, enquire.* Avoid: *shop, buy, add to cart, discount, sale* (events page handles seasonal moments separately).
