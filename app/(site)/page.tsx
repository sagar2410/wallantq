import { getSanityProducts } from "@/lib/utils/sanity";
import { getSiteSettings } from "@/lib/utils/siteSettings";
import HomePageClient from "@/components/HomePageClient";

export default async function HomePage() {
  const products = await getSanityProducts();
  const siteSettings = await getSiteSettings();

  return <HomePageClient initialProducts={products} initialSiteSettings={siteSettings} />;
}
