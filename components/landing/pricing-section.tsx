"use client";

import Link from "next/link";
import { useState } from "react";

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

export function PricingSection() {
  const [mode, setMode] = useState<"one-time" | "subscription">("one-time");

  return (
    <section className="bg-slate-50 px-6 py-32 md:px-12">
      <div className="mb-24 flex flex-col items-center">
        <h2 className="mb-8 text-center font-clash text-5xl font-bold tracking-tighter text-slate-900 uppercase">
          INVESTMENT <span className="text-slate-300">STRUCTURE</span>
        </h2>
        <div className="flex items-center gap-4 bg-slate-200/50 p-2">
          <button
            type="button"
            onClick={() => setMode("one-time")}
            className={`cursor-pointer px-6 py-2 font-sans text-xs font-bold tracking-widest uppercase transition-colors ${
              mode === "one-time"
                ? "bg-blue-800 text-white"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            ONE-TIME
          </button>
          <button
            type="button"
            onClick={() => setMode("subscription")}
            className={`cursor-pointer px-6 py-2 font-sans text-xs font-bold tracking-widest uppercase transition-colors ${
              mode === "subscription"
                ? "bg-blue-800 text-white"
                : "text-slate-500 hover:text-slate-900"
            }`}
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        {plansOneTime.map((plan) => (
          <div
            key={plan.badge}
            className={`relative border bg-white p-12 text-center ${
              plan.featured
                ? "border-2 border-blue-800 shadow-2xl md:scale-105"
                : "border-slate-200"
            }`}
          >
            {plan.ribbon ? (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-800 px-6 py-1 font-clash text-[10px] font-bold text-white tracking-[0.3em] uppercase">
                {plan.ribbon}
              </div>
            ) : null}
            <div className="mb-6 font-sans text-[0.65rem] font-bold text-blue-800 uppercase tracking-widest">
              {plan.badge}
            </div>
            <div className="mb-6 font-clash text-6xl font-bold text-slate-900">
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
                className="block w-full cursor-pointer bg-blue-800 py-4 text-center font-sans text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-blue-700"
              >
                CHOOSE PROTOCOL
              </Link>
            ) : (
              <Link
                href="/contact"
                className="block w-full cursor-pointer border border-slate-200 py-4 text-center font-sans text-xs font-bold tracking-widest text-slate-900 uppercase transition-all hover:border-blue-800 hover:text-blue-800"
              >
                CHOOSE PROTOCOL
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
