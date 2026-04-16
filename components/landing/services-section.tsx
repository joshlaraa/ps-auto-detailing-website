import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const tiers = [
  {
    index: "01",
    title: "EXPRESS ATELIER",
    description:
      "The maintenance standard for those who demand perfection daily. Precision wash and interior refresh.",
    time: "3 HOURS",
    protection: "SPRAY SEALANT",
    highlight: false,
    featured: false,
  },
  {
    index: "02",
    title: "FULL RESTORATION",
    description:
      "A multi-stage process designed to eliminate swirl marks and reveal the true depth of the paint.",
    time: "8 HOURS",
    protection: "CLAY & WAX",
    highlight: true,
    featured: true,
  },
  {
    index: "03",
    title: "ULTIMATE CERAMIC",
    description:
      "The pinnacle of paint science. 9H hardness layer that creates a permanent diamond-like shield.",
    time: "2 DAYS",
    protection: "CERAMIC 9H+",
    highlight: false,
    featured: false,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <Container>
        <div className="mb-24 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-6 font-clash text-5xl font-bold tracking-tighter text-foreground uppercase md:text-7xl">
              The Detailing <br />{" "}
              <span className="text-slate-200">Protocols</span>
            </h2>
            <p className="text-lg font-medium text-slate-600 leading-relaxed">
              Each tier is a surgical operation. We don&apos;t just clean; we
              restore the factory intent of your vehicle through scientific
              methodology.
            </p>
          </div>
          <div className="border-brand/40 border-b pb-4 font-sans text-sm font-bold text-brand tracking-[0.2em]">
            SCROLL TO DISCOVER
          </div>
        </div>
        <div
          id="packages"
          className="grid grid-cols-1 gap-0.5 border border-slate-200 bg-slate-200 md:grid-cols-3"
        >
          {tiers.map((tier) => (
            <div
              key={tier.index}
              className={`group bg-background p-12 transition-colors duration-500 hover:bg-white ${
                tier.featured ? "relative" : ""
              }`}
            >
              {tier.featured ? (
                <div className="absolute top-0 right-0 bg-brand px-4 py-1 font-clash text-[10px] font-bold text-on-brand uppercase tracking-widest">
                  Most Requested
                </div>
              ) : null}
              <div className="mb-12 font-clash text-4xl text-slate-200">
                {tier.index}
              </div>
              <h3 className="mb-4 font-clash text-3xl font-bold text-foreground">
                {tier.title}
              </h3>
              <p className="mb-12 h-16 text-sm font-medium text-slate-500">
                {tier.description}
              </p>
              <div className="mb-12 space-y-6">
                <div className="flex items-center justify-between border-slate-200 border-b pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Time
                  </span>
                  <span className="font-sans text-sm font-bold text-foreground">
                    {tier.time}
                  </span>
                </div>
                <div className="flex items-center justify-between border-slate-200 border-b pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Protection
                  </span>
                  <span className="font-sans text-sm font-bold text-foreground">
                    {tier.protection}
                  </span>
                </div>
              </div>
              {tier.highlight ? (
                <ButtonLink variant="blockBrand" href="/contact">
                  Select tier
                </ButtonLink>
              ) : (
                <ButtonLink variant="blockOutline" href="/contact">
                  Select tier
                </ButtonLink>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
