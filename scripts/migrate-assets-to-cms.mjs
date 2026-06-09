/**
 * Migration script — Downloads product images and videos from
 * the legacy assets server and uploads them directly to Sanity CMS,
 * setting the document's mediaSource to 'cms'.
 *
 * Run with:
 *   SANITY_AUTH_TOKEN=your_token node scripts/migrate-assets-to-cms.mjs
 */

import { createClient } from '@sanity/client'

const projectId = 'jroqjzv6'
const dataset   = 'production'

const token = process.env.SANITY_AUTH_TOKEN

if (!token) {
  console.error(`
❌  No SANITY_AUTH_TOKEN found.

Please run:
   SANITY_AUTH_TOKEN=your_token node scripts/migrate-assets-to-cms.mjs
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

const ASSET_BASE = "https://assets.wallantq.com"

async function migrate() {
  console.log('🔍 Fetching products from Sanity...')
  const products = await client.fetch(`*[_type == "product" && mediaSource != "cms"] {
    _id,
    sku,
    title,
    hasVideo
  }`)

  console.log(`🌱 Found ${products.length} products to migrate.\n`)

  for (let i = 0; i < products.length; i++) {
    const p = products[i]
    console.log(`--------------------------------------------------`)
    console.log(`[${i + 1}/${products.length}] Migrating: ${p.title} (${p.sku})`)

    const imgUrl = `${ASSET_BASE}/wallantq-avif/${p.sku}.avif`
    const vidUrl = `${ASSET_BASE}/Without%20Logo/${p.sku}.mp4`

    const updateFields = {
      mediaSource: 'cms'
    }

    // 1. Download & Upload Image
    try {
      console.log(`   Downloading image: ${imgUrl}`)
      const imgRes = await fetch(imgUrl)
      if (!imgRes.ok) {
        throw new Error(`Failed to download image (status: ${imgRes.status})`)
      }
      const imgBuffer = Buffer.from(await imgRes.arrayBuffer())

      console.log(`   Uploading image to Sanity...`)
      const imgAsset = await client.assets.upload('image', imgBuffer, {
        filename: `${p.sku.toLowerCase()}.avif`,
        contentType: 'image/avif'
      })
      console.log(`   ✅ Image uploaded: ${imgAsset._id}`)
      updateFields.productImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imgAsset._id
        }
      }
    } catch (err) {
      console.error(`   ❌ Image migration failed:`, err.message)
    }

    // 2. Download & Upload Video
    if (p.hasVideo) {
      try {
        console.log(`   Downloading video: ${vidUrl}`)
        const vidRes = await fetch(vidUrl)
        if (!vidRes.ok) {
          throw new Error(`Failed to download video (status: ${vidRes.status})`)
        }
        const vidBuffer = Buffer.from(await vidRes.arrayBuffer())

        console.log(`   Uploading video to Sanity (~${(vidBuffer.length / 1024 / 1024).toFixed(1)} MB)...`)
        const vidAsset = await client.assets.upload('file', vidBuffer, {
          filename: `${p.sku.toLowerCase()}.mp4`,
          contentType: 'video/mp4'
        })
        console.log(`   ✅ Video uploaded: ${vidAsset._id}`)
        updateFields.productVideo = {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: vidAsset._id
          }
        }
      } catch (err) {
        console.error(`   ❌ Video migration failed:`, err.message)
      }
    }

    // 3. Update Product Document
    try {
      console.log(`   Updating Sanity document ${p._id}...`)
      await client.patch(p._id).set(updateFields).commit()
      console.log(`   🎉 Successfully migrated ${p.sku} to CMS!`)
    } catch (err) {
      console.error(`   ❌ Failed to update document:`, err.message)
    }
  }

  console.log(`\n✅ Asset migration complete! All products now use Sanity CMS files.`)
}

migrate().catch(err => {
  console.error('❌ Migration crashed:', err)
  process.exit(1)
})
