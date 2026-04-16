"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type PlanLine = { text: string; strike?: boolean };

const plansOneTime: {
  badge: string;
  price: string;
  lines: PlanLine[];
  ctaVariant: "outline" | "solid";
  featured: boolean;
  ribbon?: string;
}[] = [
  {
    badge: "ESSENTIAL",
    price: "$350",
    lines: [
      { text: "Exterior Precision Wash" },
      { text: "Standard Clay Bar" },
      { text: "Interior Deep Clean" },
      { text: "Paint Correction", strike: true },
      { text: "Ceramic Coating", strike: true },
    ],
    ctaVariant: "outline",
    featured: false,
  },
  {
    ribbon: "THE STANDARD",
    badge: "PRESTIGE",
    price: "$850",
    lines: [
      { text: "1-Step Machine Polish" },
      { text: "Synthetic Paint Sealant" },
      { text: "Concierge Pickup" },
      { text: "Engine Bay Detailing" },
      { text: "9H Ceramic Shield", strike: true },
    ],
    ctaVariant: "solid",
    featured: true,
  },
  {
    badge: "EXHIBITION",
    price: "$1,500+",
    lines: [
      { text: "Full 3-Step Correction" },
      { text: "5-Year Ceramic 9H+" },
      { text: "Wheel-off Detail" },
      { text: "Interior Leather Shield" },
      { text: "Show-Room Perfection" },
    ],
    ctaVariant: "outline",
    featured: false,
  },
];

const toggleBtn = cn(
  "cursor-pointer px-6 py-2 font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-200",
);

export function PricingSection() {
  const [mode, setMode] = useState<"one-time" | "subscription">("one-time");

  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <div className="mb-24 flex flex-col items-center">
          <h2 className="mb-8 text-center font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
            INVESTMENT <span className="text-slate-300">STRUCTURE</span>
          </h2>
          <div className="flex items-center gap-4 bg-slate-200/50 p-2">
            <button
              type="button"
              onClick={() => setMode("one-time")}
              aria-pressed={mode === "one-time"}
              className={cn(
                toggleBtn,
                mode === "one-time"
                  ? "bg-brand text-on-brand"
                  : "text-slate-500 hover:text-foreground",
              )}
            >
              ONE-TIME
            </button>
            <button
              type="button"
              onClick={() => setMode("subscription")}
              aria-pressed={mode === "subscription"}
              className={cn(
                toggleBtn,
                mode === "subscription"
                  ? "bg-brand text-on-brand"
                  : "text-slate-500 hover:text-foreground",
              )}
            >
              SUBSCRIPTION
            </button>
          </div>
          {mode === "subscription" ? (
            <p className="mt-6 max-w-xl text-center text-sm font-medium text-slate-600">
              Subscription retainers are quoted after consultation based on fleet
              size and visit cadence.
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {plansOneTime.map((plan) => (
            <div
              key={plan.badge}
              className={cn(
                "relative border bg-white p-12 text-center",
                plan.featured
                  ? "border-2 border-brand shadow-2xl md:scale-105"
                  : "border-slate-200",
              )}
            >
              {plan.ribbon ? (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand px-6 py-1 font-clash text-[10px] font-bold text-on-brand tracking-[0.3em] uppercase">
                  {plan.ribbon}
                </div>
              ) : null}
              <div className="mb-6 font-sans text-[0.65rem] font-bold text-brand uppercase tracking-widest">
                {plan.badge}
              </div>
              <div className="mb-6 font-clash text-6xl font-bold text-foreground">
                {plan.price}
              </div>
              <div className="mb-12 space-y-4 text-sm font-bold">
                {plan.lines.map((line) => (
                  <p
                    key={line.text}
                    className={
                      line.strike
                        ? "text-slate-200 line-through"
                        : "text-slate-500"
                    }
                  >
                    {line.text}
                  </p>
                ))}
              </div>
              {plan.ctaVariant === "solid" ? (
                <Link
                  href="/contact"
                  className={buttonStyles.blockBrandPricing}
                >
                  CHOOSE PROTOCOL
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className={buttonStyles.blockOutlineWide}
                >
                  CHOOSE PROTOCOL
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
