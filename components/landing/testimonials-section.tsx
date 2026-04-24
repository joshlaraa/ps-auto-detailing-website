import type { ReactNode } from "react";
import { Star } from "@phosphor-icons/react/ssr";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const testimonials: readonly { quote: ReactNode; author: string }[] = [
  {
    quote:
      "The level of detail is frankly obsessive. My GT3RS looks better than the day it left Zuffenhausen.",
    author: "JULIAN V. | PORSCHE OWNER",
  },
  {
    quote: (
      <>
        <span className="font-clash leading-[0.9] font-bold not-italic tracking-tighter text-white">
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
    <Card className="inline-block min-w-0 shrink-0 border-white/20 bg-white/7 p-8 shadow-xl shadow-black/20 backdrop-blur-sm sm:w-[min(100%,24rem)] sm:p-10 md:w-[26rem] md:p-12">
      <div className="mb-6 flex gap-0.5 text-blue-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-6 w-6" weight="fill" aria-hidden />
        ))}
      </div>
      <p className="mb-8 whitespace-normal font-medium text-white/85 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="font-sans text-xs font-bold text-blue-200 uppercase tracking-widest">
        {author}
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative isolate w-full overflow-hidden bg-slate-950 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand/30 via-blue-500/15 to-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.25),transparent_40%)]"
        aria-hidden
      />
      <Container>
        <Reveal className="mb-12 flex items-center gap-4 md:mb-14 md:gap-6">
          <Eyebrow as="p" tone="onDark" className="shrink-0 text-white">
            Testimonials
          </Eyebrow>
          <span className="h-px flex-1 bg-white/20" aria-hidden />
        </Reveal>
      </Container>

      <div className="overflow-hidden px-6 md:px-8">
        <div className="animate-marquee flex w-max gap-8 md:gap-12">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.author}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
