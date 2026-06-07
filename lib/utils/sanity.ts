import { client } from "@/sanity/lib/client";
import type { Product } from "@/lib/products";

export async function getSanityProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(num asc) {
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
  }`;

  try {
    const data = await client.fetch<Product[]>(query);
    return data || [];
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    return [];
  }
}
