import type { Metadata } from "next";
import { AnatomySection } from "@/components/landing/anatomy-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ProcessSection } from "@/components/landing/process-section";
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
      <ProcessSection />
      <AnatomySection />
      <TestimonialsSection />
    </>
  );
}
