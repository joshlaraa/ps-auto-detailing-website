import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { landingMedia } from "@/lib/landing/media";

const stats = [
  { value: "500+", label: "Exotic Cars Detailed" },
  { value: "5.0", label: "Customer Satisfaction" },
  { value: "9H", label: "Ceramic Protection" },
  { value: "24/7", label: "Concierge Service" },
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden bg-background pt-20 pb-16 md:pb-24">
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
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 from-0% via-transparent via-45% to-background to-100%" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-6xl">
          <Eyebrow className="mb-6 block">
            Mobile car detailing service
          </Eyebrow>
          <h1 className="mb-12 font-clash text-6xl leading-[0.9] font-bold tracking-tighter text-foreground md:text-[7rem]">
            ELITE <br />
            SHINE TO <br />{" "}
            <span className="bg-linear-to-br from-blue-900 to-blue-600 bg-clip-text text-transparent">
              SAN DIEGO
            </span>
          </h1>
          <div className="mb-20 flex flex-col gap-6 md:flex-row">
            <ButtonLink variant="heroPrimary" href="/services">
              Explore tiers
            </ButtonLink>
            <ButtonLink variant="heroSecondary" href="/products">
              View our work
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-8 border-slate-200 border-t py-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="mb-1 font-clash text-3xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="font-label text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
