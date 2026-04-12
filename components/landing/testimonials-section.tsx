import { Star } from "@phosphor-icons/react/ssr";

const testimonials = [
  {
    quote:
      "The level of detail is frankly obsessive. My GT3RS looks better than the day it left Zuffenhausen.",
    author: "JULIAN V. | PORSCHE OWNER",
  },
  {
    quote:
      "Precision Labs is the only service I trust with my vintage Ferraris. Simply unmatched expertise.",
    author: "MARCUS R. | COLLECTOR",
  },
  {
    quote:
      "They don't detail cars, they perform automotive surgery. The ceramic coating results are mind-blowing.",
    author: "SARAH L. | AMG OWNER",
  },
] as const;

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="inline-block min-w-[400px] border border-slate-200 bg-white p-12">
      <div className="mb-6 flex gap-0.5 text-blue-800">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-6 w-6" weight="fill" aria-hidden />
        ))}
      </div>
      <p className="mb-8 whitespace-normal font-medium text-slate-700 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="font-sans text-xs font-bold text-blue-800 uppercase tracking-widest">
        {author}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-32">
      <div className="animate-marquee flex gap-12 px-12 whitespace-nowrap">
        {loop.map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}`} {...t} />
        ))}
      </div>
    </section>
  );
}
