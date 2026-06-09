import { client } from '@/sanity/lib/client'
import type { Product } from '@/lib/products'

export interface SiteSettings {
  // Marquee
  marqueeItems: string[]

  // Hero
  heroHeadlinePre: string
  heroHeadlineAccent: string
  heroHeadlinePost: string
  heroDescription: string
  heroSubNote: string

  // Featured
  featuredEyebrow: string
  featuredHeadlinePre: string
  featuredHeadlineAccent: string
  featuredHeadlinePost: string
  featuredProducts: Product[]

  // New Arrivals
  newArrivalsEyebrow: string
  newArrivalsHeadlinePre: string
  newArrivalsHeadlineAccent: string
  newArrivalsHeadlinePost: string

  // Philosophy
  philosophyEyebrow: string
  philosophyHeadingPre: string
  philosophyHeadingAccent: string
  philosophyHeadingPost: string
  philosophyBody: string[]
  philosophyAttribution: string

  // Values
  values: { num: string; title: string; body: string }[]

  // Bespoke
  bespokeEyebrow: string
  bespokeHeadlinePre: string
  bespokeHeadlineAccent: string
  bespokeHeadlinePost: string
  bespokeBody1: string
  bespokeBody2: string

  // Editorial
  editorialQuotePre: string
  editorialQuoteAccent: string

  // CTA Band
  ctaEyebrow: string
  ctaHeadingPre: string
  ctaHeadingPost: string
  ctaBody: string

  // Trust Badges
  trustBadges: { title: string; sub: string }[]

  // About Page Images
  aboutHeroImageUrl?: string
  aboutMissionImageUrl?: string
  aboutStudioImageUrl?: string
}

/** Hardcoded defaults — the site looks exactly as before if Sanity has no data */
export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  marqueeItems: [
    'Premium Handcrafted Dimensional Wood Relief',
    'Hand-painted with protective PU coat',
    'Complimentary shipping across India',
  ],

  heroHeadlinePre: 'Objects of',
  heroHeadlineAccent: 'quiet',
  heroHeadlinePost: 'conviction.',
  heroDescription:
    'Premium handcrafted dimensional wood relief art — each piece is individually hand-finished with a protective PU coat and curated to bring a lasting, quiet presence to refined spaces.',
  heroSubNote: '15 ready designs · custom wall art available',

  featuredEyebrow: 'Featured · Selection Nº 04',
  featuredHeadlinePre: 'A collection curated\nfor those who',
  featuredHeadlineAccent: 'notice',
  featuredHeadlinePost: '.',
  featuredProducts: [],

  newArrivalsEyebrow: 'Just in · New arrivals',
  newArrivalsHeadlinePre: 'Recently added\nto the',
  newArrivalsHeadlineAccent: 'catalogue',
  newArrivalsHeadlinePost: '.',

  philosophyEyebrow: 'Atelier · Our philosophy',
  philosophyHeadingPre: "We don't create",
  philosophyHeadingAccent: 'décor',
  philosophyHeadingPost: '\nWe create presence.',
  philosophyBody: [
    'Wallantq is a collection of considered moments — the rhythm, depth, and quiet power a wall can hold. Each piece is crafted layer by layer, shaped by intention, to become a part of a space that speaks.',
    'We don\'t follow trends; we follow meaning.',
    'There is no mass production, no shortcuts, just craftsmanship, patience, and purpose. If a piece connects with you, it belongs in your story.',
  ],
  philosophyAttribution: '— the founder',

  values: [
    {
      num: 'Nº 01',
      title: 'Dimensional Wood Relief',
      body: 'Each piece is built from individually hand-cut and layered wood elements, hand-painted with a protective PU coat. No shortcuts, no mass production.',
    },
    {
      num: 'Nº 02',
      title: 'Private enquiry',
      body: 'No cart, no checkout. Write to us on WhatsApp or email and receive a personal reply within 24 hours.',
    },
    {
      num: 'Nº 03',
      title: 'Your vision, our creation',
      body: 'Every design is fully customizable — size, palette, finish — crafted to fit your space and your story.',
    },
    {
      num: 'Nº 04',
      title: '7-day guarantee',
      body: 'Not satisfied? Return within 7 days, no questions asked. Every piece ships with a hand-written card and care instructions.',
    },
  ],

  bespokeEyebrow: 'Bespoke · Personalised designs',
  bespokeHeadlinePre: 'Your wall.\nYour',
  bespokeHeadlineAccent: 'vision',
  bespokeHeadlinePost: 'Our craft.',
  bespokeBody1:
    'We create fully personalised wall art — commissioned to fit your space, your palette, and your story. Whether it\'s a mandala for a meditation room, a family heritage piece, or an abstract for a corporate lobby, every design begins with a conversation.',
  bespokeBody2: 'No templates. No stock. Just the piece that belongs in your home.',

  editorialQuotePre: 'The most important things in a room\nare the ones that make you',
  editorialQuoteAccent: 'pause',

  ctaEyebrow: 'A private line',
  ctaHeadingPre: 'Looking for something',
  ctaHeadingPost: 'in particular?',
  ctaBody:
    "Describe what you're searching for — a particular tone, a size for a narrow wall, a piece for a quiet hallway — and we'll return with hand-picked suggestions within 24 hours.",

  trustBadges: [
    { title: 'Free Shipping', sub: 'Complimentary within India' },
    { title: '7 Day Guarantee', sub: 'Money back, no questions' },
    { title: 'Your Vision, Our Creation', sub: 'Fully customizable' },
    { title: '100% Secure', sub: 'Private & secure enquiry' },
  ],

  aboutHeroImageUrl: '',
  aboutMissionImageUrl: '',
  aboutStudioImageUrl: '',
}

const QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  marqueeItems,
  heroHeadlinePre, heroHeadlineAccent, heroHeadlinePost,
  heroDescription, heroSubNote,
  featuredEyebrow, featuredHeadlinePre, featuredHeadlineAccent, featuredHeadlinePost,
  featuredProducts[]-> {
    "slug": slug.current,
    sku,
    num,
    title,
    titleAccent,
    titleAfter,
    sub,
    category,
    material,
    dimensions,
    weight,
    finish,
    deck,
    maker,
    leadTime,
    provenance[] {
      title,
      body
    },
    hasVideo,
    imageFormat,
    videoFile,
    theme,
    colorPalette,
    mood,
    tags,
    featured,
    newArrival,
    mediaSource,
    "sanityImageUrl": productImage.asset->url,
    "sanityVideoUrl": productVideo.asset->url
  },
  newArrivalsEyebrow, newArrivalsHeadlinePre, newArrivalsHeadlineAccent, newArrivalsHeadlinePost,
  philosophyEyebrow, philosophyHeadingPre, philosophyHeadingAccent, philosophyHeadingPost,
  philosophyBody, philosophyAttribution,
  values[] { num, title, body },
  bespokeEyebrow, bespokeHeadlinePre, bespokeHeadlineAccent, bespokeHeadlinePost,
  bespokeBody1, bespokeBody2,
  editorialQuotePre, editorialQuoteAccent,
  ctaEyebrow, ctaHeadingPre, ctaHeadingPost, ctaBody,
  trustBadges[] { title, sub },
  "aboutHeroImageUrl": aboutHeroImage.asset->url,
  "aboutMissionImageUrl": aboutMissionImage.asset->url,
  "aboutStudioImageUrl": aboutStudioImage.asset->url
}`

/**
 * Fetch site settings from Sanity.
 * Any field that is null/undefined falls back to the hardcoded DEFAULT_SITE_SETTINGS value
 * so the site always looks correct even if the client hasn't filled anything in yet.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await client.fetch<Partial<SiteSettings> | null>(QUERY)
    if (!data) return DEFAULT_SITE_SETTINGS

    // Merge: use Sanity value if present and non-empty, otherwise fall back to default
    const d = DEFAULT_SITE_SETTINGS
    return {
      marqueeItems:              (data.marqueeItems?.length)          ? data.marqueeItems              : d.marqueeItems,
      heroHeadlinePre:           data.heroHeadlinePre           || d.heroHeadlinePre,
      heroHeadlineAccent:        data.heroHeadlineAccent        || d.heroHeadlineAccent,
      heroHeadlinePost:          data.heroHeadlinePost          || d.heroHeadlinePost,
      heroDescription:           data.heroDescription           || d.heroDescription,
      heroSubNote:               data.heroSubNote               || d.heroSubNote,
      featuredEyebrow:           data.featuredEyebrow           || d.featuredEyebrow,
      featuredHeadlinePre:       data.featuredHeadlinePre       || d.featuredHeadlinePre,
      featuredHeadlineAccent:    data.featuredHeadlineAccent    || d.featuredHeadlineAccent,
      featuredHeadlinePost:      data.featuredHeadlinePost      || d.featuredHeadlinePost,
      featuredProducts:          (data.featuredProducts?.length)        ? data.featuredProducts.filter(Boolean) : d.featuredProducts,
      newArrivalsEyebrow:        data.newArrivalsEyebrow        || d.newArrivalsEyebrow,
      newArrivalsHeadlinePre:    data.newArrivalsHeadlinePre    || d.newArrivalsHeadlinePre,
      newArrivalsHeadlineAccent: data.newArrivalsHeadlineAccent || d.newArrivalsHeadlineAccent,
      newArrivalsHeadlinePost:   data.newArrivalsHeadlinePost   || d.newArrivalsHeadlinePost,
      philosophyEyebrow:         data.philosophyEyebrow         || d.philosophyEyebrow,
      philosophyHeadingPre:      data.philosophyHeadingPre      || d.philosophyHeadingPre,
      philosophyHeadingAccent:   data.philosophyHeadingAccent   || d.philosophyHeadingAccent,
      philosophyHeadingPost:     data.philosophyHeadingPost     || d.philosophyHeadingPost,
      philosophyBody:            (data.philosophyBody?.length)  ? data.philosophyBody  : d.philosophyBody,
      philosophyAttribution:     data.philosophyAttribution     || d.philosophyAttribution,
      values:                    (data.values?.length)          ? data.values          : d.values,
      bespokeEyebrow:            data.bespokeEyebrow            || d.bespokeEyebrow,
      bespokeHeadlinePre:        data.bespokeHeadlinePre        || d.bespokeHeadlinePre,
      bespokeHeadlineAccent:     data.bespokeHeadlineAccent     || d.bespokeHeadlineAccent,
      bespokeHeadlinePost:       data.bespokeHeadlinePost       || d.bespokeHeadlinePost,
      bespokeBody1:              data.bespokeBody1              || d.bespokeBody1,
      bespokeBody2:              data.bespokeBody2              || d.bespokeBody2,
      editorialQuotePre:         data.editorialQuotePre         || d.editorialQuotePre,
      editorialQuoteAccent:      data.editorialQuoteAccent      || d.editorialQuoteAccent,
      ctaEyebrow:                data.ctaEyebrow                || d.ctaEyebrow,
      ctaHeadingPre:             data.ctaHeadingPre             || d.ctaHeadingPre,
      ctaHeadingPost:            data.ctaHeadingPost            || d.ctaHeadingPost,
      ctaBody:                   data.ctaBody                   || d.ctaBody,
      trustBadges:               (data.trustBadges?.length)     ? data.trustBadges     : d.trustBadges,
      aboutHeroImageUrl:         data.aboutHeroImageUrl         || d.aboutHeroImageUrl,
      aboutMissionImageUrl:      data.aboutMissionImageUrl      || d.aboutMissionImageUrl,
      aboutStudioImageUrl:       data.aboutStudioImageUrl       || d.aboutStudioImageUrl,
    }
  } catch (err) {
    console.error('[getSiteSettings] Failed to fetch from Sanity, using defaults:', err)
    return DEFAULT_SITE_SETTINGS
  }
}
