"use client";

import nextDynamic from "next/dynamic";

const NextStudio = nextDynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioClient({ config }: { config: any }) {
  return <NextStudio config={config} />;
}
