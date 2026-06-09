/**
 * Migration script for About page images — downloads the three Google Drive
 * images and uploads them directly to Sanity CMS under the siteSettings document,
 * completely removing the Google Drive dependency.
 *
 * Run with:
 *   SANITY_AUTH_TOKEN=your_token node scripts/migrate-about-assets.mjs
 */

import { createClient } from '@sanity/client'

const projectId = 'jroqjzv6'
const dataset   = 'production'

const token = process.env.SANITY_AUTH_TOKEN

if (!token) {
  console.error(`
❌  No SANITY_AUTH_TOKEN found.

Please run:
   SANITY_AUTH_TOKEN=your_token node scripts/migrate-about-assets.mjs
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

const images = [
  {
    field: 'aboutHeroImage',
    filename: 'about_hero.jpg',
    url: 'https://drive.google.com/thumbnail?id=1lflDkjhiKbgMX0bUbNBytnzKZvGoZXvL&sz=w2000-h2000',
  },
  {
    field: 'aboutMissionImage',
    filename: 'about_mission.jpg',
    url: 'https://drive.google.com/thumbnail?id=1aTXvDaA1RipD3zSM2cdNxkq6H125bT8T&sz=w2000-h2000',
  },
  {
    field: 'aboutStudioImage',
    filename: 'about_studio.jpg',
    url: 'https://drive.google.com/thumbnail?id=1Md2WXXnw3l1RuH4DC1jQkgMQ-OqoV6BJ&sz=w2000-h2000',
  },
]

async function run() {
  console.log('🌱 Starting About page assets migration...')

  const updateFields = {}

  for (const img of images) {
    console.log(`\n--------------------------------------------------`)
    console.log(`Processing: ${img.field}`)
    console.log(`Downloading: ${img.url}`)

    try {
      const res = await fetch(img.url)
      if (!res.ok) {
        throw new Error(`Failed to download image (status: ${res.status})`)
      }
      const buffer = Buffer.from(await res.arrayBuffer())

      console.log(`Uploading asset "${img.filename}" to Sanity...`)
      const asset = await client.assets.upload('image', buffer, {
        filename: img.filename,
        contentType: 'image/jpeg',
      })
      console.log(`✅ Asset uploaded: ${asset._id}`)

      updateFields[img.field] = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      }
    } catch (err) {
      console.error(`❌ Failed migrating ${img.field}:`, err.message)
    }
  }

  if (Object.keys(updateFields).length > 0) {
    console.log(`\n--------------------------------------------------`)
    console.log(`Patching "siteSettings" document with uploaded references...`)
    try {
      await client.patch('siteSettings').set(updateFields).commit()
      console.log(`🎉 Successfully migrated all About page assets to Sanity CMS!`)
    } catch (err) {
      console.error(`❌ Failed to update siteSettings document:`, err.message)
    }
  } else {
    console.log('\n⚠️ No fields to update.')
  }
}

run().catch((err) => {
  console.error('❌ Migration crashed:', err)
  process.exit(1)
})
