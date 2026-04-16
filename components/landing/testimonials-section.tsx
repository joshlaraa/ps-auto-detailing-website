import type { ReactNode } from "react";
import { Star } from "@phosphor-icons/react/ssr";
import { Card } from "@/components/ui/card";

const testimonials: readonly { quote: ReactNode; author: string }[] = [
  {
    quote:
      "The level of detail is frankly obsessive. My GT3RS looks better than the day it left Zuffenhausen.",
    author: "JULIAN V. | PORSCHE OWNER",
  },
  {
    quote: (
      <>
        <span className="font-clash leading-[0.9] font-bold not-italic tracking-tighter text-foreground">
          JP AUTO DETAIL
        </span>{" "}
        is the only service I trust with my vintage Ferraris. Simply unmatched expertise.
      </>
    ),
    author: "MARCUS R. | COLLECTOR",
  },
  {
    quote:
      "They don't detail cars, they perform automotive surgery. The ceramic coating results are mind-blowing.",
    author: "SARAH L. | AMG OWNER",
  },
];

function TestimonialCard({
  quote,
  author,
}: {
  quote: ReactNode;
  author: string;
}) {
  return (
    <Card className="inline-block min-w-0 shrink-0 p-8 sm:w-[min(100%,24rem)] sm:p-10 md:w-[26rem] md:p-12">
      <div className="mb-6 flex gap-0.5 text-brand">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-6 w-6" weight="fill" aria-hidden />
        ))}
      </div>
      <p className="mb-8 whitespace-normal font-medium text-slate-700 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="font-sans text-xs font-bold text-brand uppercase tracking-widest">
        {author}
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-background py-24 md:py-32">
      <div className="animate-marquee flex gap-8 px-6 md:gap-12 md:px-8">
        {loop.map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}`} {...t} />
        ))}
      </div>
    </section>
  );
}
