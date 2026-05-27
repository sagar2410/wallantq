import type { Product } from "@/lib/products";

const HOSTINGER_BASE = "https://wallantq.com/assets/wallantq";
const ASSET_VERSION = "2026-05-07-1";

/**
 * Returns the Hostinger-hosted image URL for a product.
 * Files are stored as {SKU}.avif in the AVIF folder (compressed, ~600 KB vs 37 MB PNG).
 * Run compress-images.sh and upload output to public_html/assets/wallantq/AVIF/ on Hostinger.
 */
export function getProductImageUrl(product: Product): string {
  if (product.imageFormat === "png") {
    return `${HOSTINGER_BASE}/PNG/${product.sku}.png?v=${ASSET_VERSION}`;
  }
  return `${HOSTINGER_BASE}/wallantq-avif/${product.sku}.avif?v=${ASSET_VERSION}`;
}

export function getProductPngUrl(product: Product): string {
  return `${HOSTINGER_BASE}/PNG/${product.sku}.png?v=${ASSET_VERSION}`;
}

/**
 * Returns the Hostinger-hosted video URL for a product, or undefined if none.
 * Files are stored as {SKU}.mp4 in the Without Logo folder.
 */
export function getProductVideoUrl(product: Product): string | undefined {
  if (product.hasVideo) {
    const filename = product.videoFile ?? product.sku;
    return `${HOSTINGER_BASE}/Without%20Logo/${filename}.mp4?v=${ASSET_VERSION}`;
  }
  return undefined;
}
