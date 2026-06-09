export interface Product {
  slug: string;
  sku: string;
  num: string;
  title: string;
  titleAccent?: string; // italic accent word in the title
  titleAfter?: string;  // text after the accent
  sub: string;
  category: string;
  material: string;
  dimensions: string;
  weight: string;
  finish: string;
  deck: string;
  maker: string;
  leadTime: string;
  provenance: { title: string; body: string }[];
  images: number; // count of images in public/assets/products/<slug>/
  hasVideo: boolean;
  imageFormat?: "avif" | "png"; // override image format when a specific uploaded asset is more reliable
  videoFile?: string; // override filename (without extension) if SKU doesn't match the uploaded MP4 name
  theme?: string;
  colorPalette?: string;
  mood?: string;
  tags?: string[];
  mediaSource?: "hostinger" | "cms";
  sanityImageUrl?: string;
  sanityVideoUrl?: string;
  featured?: boolean;
  newArrival?: boolean;
}
