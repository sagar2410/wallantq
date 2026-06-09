/**
 * Seed script — populates the siteSettings document in Sanity
 * with all the current live default values.
 *
 * Run once with:
 *   node scripts/seed-site-settings.mjs
 *
 * You will be prompted to log in via browser (uses Sanity CLI auth).
 * Or set SANITY_AUTH_TOKEN in your environment to skip the prompt.
 */

import { createClient } from '@sanity/client'

const projectId = 'jroqjzv6'
const dataset   = 'production'

// Use SANITY_AUTH_TOKEN env var if set, otherwise the CLI session token
const token = process.env.SANITY_AUTH_TOKEN

if (!token) {
  console.error(`
❌  No SANITY_AUTH_TOKEN found.

To get your token:
  1. Go to https://www.sanity.io/manage/project/${projectId}/api
  2. Click "Add API token" → choose "Editor" permissions
  3. Copy the token and run:
     SANITY_AUTH_TOKEN=your_token node scripts/seed-site-settings.mjs
`)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const defaults = {
  _id:   'siteSettings',
  _type: 'siteSettings',

  // Marquee
  marqueeItems: [
    'Premium Handcrafted Dimensional Wood Relief',
    'Hand-painted with protective PU coat',
    'Complimentary shipping across India',
  ],

  // Hero
  heroHeadlinePre:    'Objects of',
  heroHeadlineAccent: 'quiet',
  heroHeadlinePost:   'conviction.',
  heroDescription:    'Premium handcrafted dimensional wood relief art — each piece is individually hand-finished with a protective PU coat and curated to bring a lasting, quiet presence to refined spaces.',
  heroSubNote:        '15 ready designs · custom wall art available',

  // Featured
  featuredEyebrow:        'Featured · Selection Nº 04',
  featuredHeadlinePre:    'A collection curated\nfor those who',
  featuredHeadlineAccent: 'notice',
  featuredHeadlinePost:   '.',
  featuredProducts: [
    { _key: 'fp1', _ref: 'product_wanxmf05', _type: 'reference' },
    { _key: 'fp2', _ref: 'product_wmnxmf22', _type: 'reference' },
    { _key: 'fp3', _ref: 'product_wmnxmf27_sq', _type: 'reference' },
    { _key: 'fp4', _ref: 'product_wmnxmf39', _type: 'reference' },
    { _key: 'fp5', _ref: 'product_winxmf01', _type: 'reference' },
  ],

  // New Arrivals
  newArrivalsEyebrow:        'Just in · New arrivals',
  newArrivalsHeadlinePre:    'Recently added\nto the',
  newArrivalsHeadlineAccent: 'catalogue',
  newArrivalsHeadlinePost:   '.',

  // Philosophy
  philosophyEyebrow:      'Atelier · Our philosophy',
  philosophyHeadingPre:   "We don't create",
  philosophyHeadingAccent:'décor',
  philosophyHeadingPost:  '\nWe create presence.',
  philosophyBody: [
    'Wallantq is a collection of considered moments — the rhythm, depth, and quiet power a wall can hold. Each piece is crafted layer by layer, shaped by intention, to become a part of a space that speaks.',
    "We don't follow trends; we follow meaning.",
    'There is no mass production, no shortcuts, just craftsmanship, patience, and purpose. If a piece connects with you, it belongs in your story.',
  ],
  philosophyAttribution: '— the founder',

  // Values
  values: [
    { _key: 'v1', num: 'Nº 01', title: 'Dimensional Wood Relief',   body: 'Each piece is built from individually hand-cut and layered wood elements, hand-painted with a protective PU coat. No shortcuts, no mass production.' },
    { _key: 'v2', num: 'Nº 02', title: 'Private enquiry',           body: 'No cart, no checkout. Write to us on WhatsApp or email and receive a personal reply within 24 hours.' },
    { _key: 'v3', num: 'Nº 03', title: 'Your vision, our creation', body: 'Every design is fully customizable — size, palette, finish — crafted to fit your space and your story.' },
    { _key: 'v4', num: 'Nº 04', title: '7-day guarantee',           body: 'Not satisfied? Return within 7 days, no questions asked. Every piece ships with a hand-written card and care instructions.' },
  ],

  // Bespoke
  bespokeEyebrow:       'Bespoke · Personalised designs',
  bespokeHeadlinePre:   'Your wall.\nYour',
  bespokeHeadlineAccent:'vision',
  bespokeHeadlinePost:  'Our craft.',
  bespokeBody1:         "We create fully personalised wall art — commissioned to fit your space, your palette, and your story. Whether it's a mandala for a meditation room, a family heritage piece, or an abstract for a corporate lobby, every design begins with a conversation.",
  bespokeBody2:         'No templates. No stock. Just the piece that belongs in your home.',

  // Editorial
  editorialQuotePre:    'The most important things in a room\nare the ones that make you',
  editorialQuoteAccent: 'pause',

  // CTA Band
  ctaEyebrow:    'A private line',
  ctaHeadingPre: 'Looking for something',
  ctaHeadingPost:'in particular?',
  ctaBody:       "Describe what you're searching for — a particular tone, a size for a narrow wall, a piece for a quiet hallway — and we'll return with hand-picked suggestions within 24 hours.",

  // Trust Badges
  trustBadges: [
    { _key: 'b1', title: 'Free Shipping',             sub: 'Complimentary within India' },
    { _key: 'b2', title: '7 Day Guarantee',           sub: 'Money back, no questions' },
    { _key: 'b3', title: 'Your Vision, Our Creation', sub: 'Fully customizable' },
    { _key: 'b4', title: '100% Secure',               sub: 'Private & secure enquiry' },
  ],

  // About page images (will be uploaded by client in Studio)
  aboutHeroImage: null,
  aboutMissionImage: null,
  aboutStudioImage: null,
}

async function seed() {
  console.log('🌱 Seeding siteSettings document...')
  try {
    const result = await client.createOrReplace(defaults)
    console.log('✅ Done! Document ID:', result._id)
    console.log('   Go to your Studio and click Publish to make it live.')
  } catch (err) {
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
}

seed()
