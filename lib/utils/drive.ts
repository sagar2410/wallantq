import type { Product } from "@/lib/products";

const ASSET_BASE = "https://assets.wallantq.com";
const ASSET_VERSION = "2026-05-07-1";

/**
 * Returns the Cloudflare R2-hosted image URL for a product.
 * Files are stored as {SKU}.avif in the AVIF folder (compressed, ~600 KB vs 37 MB PNG).
 * Run compress-images.sh and upload output to the R2 bucket.
 */
export function getProductImageUrl(product?: Product): string {
  if (!product) return "";
  if (product.mediaSource === "cms" && product.sanityImageUrl) {
    return product.sanityImageUrl;
  }
  if (product.imageFormat === "png") {
    return `${ASSET_BASE}/PNG/${product.sku}.png?v=${ASSET_VERSION}`;
  }
  return `${ASSET_BASE}/wallantq-avif/${product.sku}.avif?v=${ASSET_VERSION}`;
}

export function getProductPngUrl(product?: Product): string {
  if (!product) return "";
  if (product.mediaSource === "cms" && product.sanityImageUrl) {
    return product.sanityImageUrl;
  }
  return `${ASSET_BASE}/PNG/${product.sku}.png?v=${ASSET_VERSION}`;
}

/**
 * Returns the Cloudflare R2-hosted video URL for a product, or undefined if none.
 * Files are stored as {SKU}.mp4 in the Without Logo folder.
 */
export function getProductVideoUrl(product?: Product): string | undefined {
  if (!product) return undefined;
  if (product.mediaSource === "cms" && product.sanityVideoUrl) {
    return product.sanityVideoUrl;
  }
  if (product.hasVideo) {
    const filename = product.videoFile ?? product.sku;
    return `${ASSET_BASE}/Without%20Logo/${filename}.mp4?v=${ASSET_VERSION}`;
  }
  return undefined;
}
