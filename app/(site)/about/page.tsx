import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About | JP AUTO DETAIL",
  description:
    "Meet the JP Auto Detail team and learn how our mobile detailing process works.",
};

export default function AboutPage() {
  return <AboutContent />;
}
