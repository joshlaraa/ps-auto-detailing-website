import type { Metadata } from "next";
import { GallerySection } from "@/components/landing/gallery-section";
import { PricingSection } from "@/components/landing/pricing-section";

export const metadata: Metadata = {
  title: "Products & Packages | JP AUTO DETAIL",
  description:
    "View JP Auto Detail package pricing and before/after detailing results.",
};

export default function ProductsPage() {
  return (
    <>
      <PricingSection />
      <GallerySection />
    </>
  );
}
