import type { Metadata } from "next";
import { ServicesSection } from "@/components/landing/services-section";

export const metadata: Metadata = {
  title: "Services | JP AUTO DETAIL",
  description:
    "Explore JP Auto Detail service tiers, from maintenance details to ceramic protection.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
