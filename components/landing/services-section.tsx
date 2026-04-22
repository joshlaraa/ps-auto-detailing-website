import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { landingMedia } from "@/lib/landing/media";

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
    <>
      <section
        id="services"
        className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden pt-28 pb-16 md:pb-24"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <picture className="absolute inset-0 block size-full">
            <source
              media="(min-width: 768px)"
              srcSet={landingMedia.sectionClaybar}
            />
            <Image
              src={landingMedia.sectionClaybarMobile}
              alt="Clay bar treatment on vehicle paint during a mobile detail"
              fill
              priority
              quality={90}
              className="object-cover object-[center_48%] md:object-[center_45%]"
              sizes="100vw"
            />
          </picture>
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/65 to-slate-950/20" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-6xl">
            <Eyebrow as="p" tone="onDark" className="mb-6 block">
              Service tiers
            </Eyebrow>
            <h1 className="mb-8 font-clash text-5xl leading-[0.9] font-bold tracking-tighter text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
              The detailing
              <br />
              <span className="bg-linear-to-br from-blue-300 to-blue-100 bg-clip-text text-transparent">
                protocols
              </span>
            </h1>
            <p className="mb-10 max-w-xl text-base font-medium text-slate-200 leading-relaxed md:text-lg">
              Each tier is a surgical operation. We don&apos;t just clean; we
              restore the factory intent of your vehicle through scientific
              methodology.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink variant="heroPrimary" href="#packages">
                Compare packages
              </ButtonLink>
              <ButtonLink variant="heroSecondaryDark" href="/contact">
                Book a visit
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 md:py-32">
        <Container>
          <h2 className="mb-8 font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
            THE PACKAGES
          </h2>
          <div className="mb-16 flex justify-end md:mb-20">
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
    </>
  );
}
