import type { Metadata } from "next";
import { AnatomySection } from "@/components/landing/anatomy-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HomeServicesShowcase } from "@/components/landing/home-services-showcase";
import { PillarsSection } from "@/components/landing/pillars-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export const metadata: Metadata = {
  title: "Home | JP AUTO DETAIL",
  description:
    "Mobile detailing, paint correction, and ceramic protection services in San Diego.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <HomeServicesShowcase />
      <AnatomySection />
      <TestimonialsSection />
    </>
  );
}
