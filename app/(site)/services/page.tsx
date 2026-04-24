import type { Metadata } from "next";
import { ServicesSection } from "@/components/landing/services-section";

export const metadata: Metadata = {
  title: "Services | JP AUTO DETAIL",
  description:
    "Explore mobile auto detailing packages, add-ons, and service-day expectations from JP Auto Detail.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
