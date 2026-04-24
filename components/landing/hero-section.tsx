import Image from "next/image";
import { CalendarBlank, Star } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { landingMedia } from "@/lib/landing/media";

export function HeroSection() {
  return (
    <section className="hero-section relative isolate flex w-full shrink-0 flex-col overflow-hidden">
      {/* Background image + overlay */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <picture className="absolute inset-0 block size-full">
          <source media="(min-width: 768px)" srcSet={landingMedia.heroCar} />
          <Image
            src={landingMedia.heroCarMobile}
            alt="JP Auto Detail mobile van and a vehicle being foam-washed on a residential driveway"
            fill
            priority
            quality={90}
            className="object-cover object-[center_48%] md:object-[center_45%]"
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 from-5% via-slate-900/70 via-55% to-slate-900/50 to-90%" />
      </div>

      <Container className="relative z-10 flex flex-1 items-center py-16 md:py-24">
        <Reveal className="w-full max-w-3xl">
          <div className="mb-5 flex items-center gap-4 md:mb-6">
            <span className="h-px w-12 shrink-0 bg-brand" aria-hidden />
            <Eyebrow
              as="span"
              tone="onDark"
              size="compact"
              className="block"
            >
              Mobile car detailing service
            </Eyebrow>
          </div>

          <h1 className="mb-6 font-clash text-[clamp(2.75rem,6vw+1rem,5.5rem)] leading-[0.9] font-bold tracking-tighter text-white uppercase md:mb-8">
            Elite shine
            <br />
            built for
            <br />
            <span className="bg-linear-to-br from-blue-300 to-blue-100 bg-clip-text text-transparent">
              San Diego
            </span>
          </h1>

          <p className="mb-9 max-w-2xl text-sm font-medium leading-relaxed text-slate-200 md:mb-10 md:text-base">
            Mobile detailing for daily drivers across San Diego, delivered with
            consistent results and dependable service windows.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink variant="heroPrimary" href="/services">
              View Services
            </ButtonLink>
            <ButtonLink variant="heroSecondaryDark" href="/products">
              Book Now
            </ButtonLink>
          </div>
        </Reveal>
      </Container>

      <Container className="relative z-10 shrink-0 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2">
        <Reveal
          className="pointer-events-none ml-auto grid max-w-xs grid-cols-2 gap-6 sm:max-w-sm sm:gap-8"
          aria-hidden
          delay={0.15}
        >
          <div className="border-l border-white pl-4">
            <div className="mb-0.5 font-sans text-[10px] font-bold uppercase tracking-widest text-white">
              Years in Business
            </div>
            <div className="flex items-center gap-1.5 font-clash text-2xl font-bold text-white">
              5+
              <CalendarBlank
                weight="bold"
                className="size-5 text-brand"
                aria-hidden
              />
            </div>
          </div>
          <div className="border-l border-white pl-4">
            <div className="mb-0.5 font-sans text-[10px] font-bold uppercase tracking-widest text-white">
              Google Reviews
            </div>
            <div className="flex items-center gap-1.5 font-clash text-2xl font-bold text-white">
              4.8
              <Star
                weight="fill"
                className="size-5 text-yellow-400"
                aria-hidden
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
