import Image from "next/image";
import {
  MapTrifold,
  Waves,
  Mountains,
  CompassRose,
} from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { landingMedia } from "@/lib/landing/media";

export function AnatomySection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <h2 className="mb-24 font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
          Coverage <span className="text-brand">Areas</span>
        </h2>
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[800px] md:grid-cols-4 md:grid-rows-2">
          <div className="group relative flex flex-col justify-end overflow-hidden bg-slate-900 p-12 md:col-span-2 md:row-span-2">
            <picture className="absolute inset-0 block size-full">
              <source media="(min-width: 768px)" srcSet={landingMedia.anatomySdCounty} />
              <Image
                src={landingMedia.anatomySdCountyMobile}
                alt="Aerial view of San Diego County"
                fill
                className="object-cover opacity-60 grayscale-[0.3] transition-transform duration-1000 ease-out scale-110 group-hover:scale-100"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="relative z-10">
              <h3 className="mb-4 font-clash text-4xl font-bold text-white">
                San Diego County
              </h3>
              <p className="mb-8 max-w-sm font-medium text-slate-300">
                We bring professional mobile detailing directly to your door —
                wherever you are in the county. No drop-off, no hassle.
              </p>
              <MapTrifold
                className="text-5xl text-brand"
                weight="duotone"
                aria-hidden
              />
            </div>
          </div>
          <div className="group relative flex flex-col justify-center gap-4 overflow-hidden border-brand border-l-4 bg-slate-900 p-8 md:col-span-2 md:flex-row md:items-center">
            <picture className="absolute inset-0 block size-full">
              <source media="(min-width: 768px)" srcSet={landingMedia.anatomyCoastal} />
              <Image
                src={landingMedia.anatomyCoastalMobile}
                alt="San Diego coastal communities"
                fill
                className="object-cover opacity-50 grayscale-[0.3] transition-transform duration-1000 ease-out scale-110 group-hover:scale-100"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </picture>
            <div className="absolute inset-0 bg-slate-950/55" />
            <Waves
              className="relative z-10 shrink-0 text-5xl text-brand"
              weight="duotone"
              aria-hidden
            />
            <div className="relative z-10">
              <h3 className="mb-2 font-clash text-2xl font-bold text-white uppercase">
                Coastal Areas
              </h3>
              <p className="text-sm font-bold text-slate-300">
                Del Mar, Encinitas, Carlsbad, Oceanside, and surrounding beach
                communities.
              </p>
            </div>
          </div>
          <div className="group relative flex flex-col items-center justify-center overflow-hidden bg-slate-900 p-8 text-center">
            <picture className="absolute inset-0 block size-full">
              <source media="(min-width: 768px)" srcSet={landingMedia.anatomyInland} />
              <Image
                src={landingMedia.anatomyInlandMobile}
                alt="San Diego inland communities"
                fill
                className="object-cover opacity-50 grayscale-[0.3] transition-transform duration-1000 ease-out scale-110 group-hover:scale-100"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </picture>
            <div className="absolute inset-0 bg-slate-950/55" />
            <Mountains
              className="relative z-10 mb-4 text-4xl text-brand"
              weight="duotone"
              aria-hidden
            />
            <h3 className="relative z-10 font-clash text-lg font-bold text-white uppercase">
              Inland Areas
            </h3>
            <p className="relative z-10 mt-2 text-xs font-bold text-slate-300">
              Vista, San Marcos, Rancho Santa Fe, Escondido, and more.
            </p>
          </div>
          <div className="group relative flex flex-col items-center justify-center overflow-hidden bg-slate-900 p-8 text-center">
            <picture className="absolute inset-0 block size-full">
              <source media="(min-width: 768px)" srcSet={landingMedia.anatomyOutskirts} />
              <Image
                src={landingMedia.anatomyOutskirtsMobile}
                alt="San Diego county outskirts"
                fill
                className="object-cover opacity-50 grayscale-[0.3] transition-transform duration-1000 ease-out scale-110 group-hover:scale-100"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </picture>
            <div className="absolute inset-0 bg-slate-950/55" />
            <CompassRose
              className="relative z-10 mb-4 text-4xl text-brand"
              weight="duotone"
              aria-hidden
            />
            <h3 className="relative z-10 font-clash text-lg font-bold text-white uppercase">
              Outskirts of County
            </h3>
            <p className="relative z-10 mt-2 text-xs font-bold text-slate-300">
              Temecula, Ramona, Alpine, and surrounding communities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
