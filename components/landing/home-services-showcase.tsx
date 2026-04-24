import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react/ssr";
import { ButtonLink, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { landingMedia } from "@/lib/landing/media";

const serviceTiles = [
  {
    key: "ceramic",
    title: "Ceramic coating",
    hint: "View package",
    href: "/services#packages",
    image: landingMedia.homeServiceCeramic,
    alt: "Water beading on a deep blue metallic car surface with studio lighting.",
  },
  {
    key: "paint",
    title: "Paint correction",
    hint: "View levels",
    href: "/services#packages",
    image: landingMedia.homeServicePaint,
    alt: "Dual-action polisher on a sports car fender with soft background bokeh.",
  },
  {
    key: "interior",
    title: "Interior detailing",
    hint: "Explore spa",
    href: "/services#packages",
    image: landingMedia.homeServiceInterior,
    alt: "Luxury vehicle interior with leather seats and trim under bright light.",
  },
  {
    key: "exterior",
    title: "Exterior detailing",
    hint: "Wash plans",
    href: "/services#packages",
    image: landingMedia.homeServiceExterior,
    alt: "Thick snow foam covering a luxury SUV in a wash bay.",
  },
  {
    key: "maintenance",
    title: "Maintenance detailing",
    hint: "Subscription",
    href: "/services#packages",
    image: landingMedia.homeServiceMaintenance,
    alt: "Technician cleaning a multi-spoke wheel with brushes and gloves.",
  },
] as const;

export function HomeServicesShowcase() {
  return (
    <>
      <section id="technique" className="bg-white py-24 md:py-32">
        <Container>
          <div className="mb-14 md:mb-20">
            <h2 className="relative mb-4 inline-block font-clash text-5xl font-bold tracking-tighter text-foreground uppercase lg:text-6xl">
              San Diego County auto detailing services
              <span
                className="absolute -bottom-4 left-0 h-2 w-1/3 max-w-[12rem] bg-brand"
                aria-hidden
              />
            </h2>
            <div className="mt-12">
              <ButtonLink
                variant="heroPrimary"
                href="/contact"
                className="gap-3"
              >
                Book a service
                <ArrowRight
                  className="size-4 shrink-0"
                  weight="bold"
                  aria-hidden
                />
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {serviceTiles.map(({ key, title, hint, href, image, alt }) => (
              <Link
                key={key}
                href={href}
                className="group relative aspect-4/5 cursor-pointer overflow-hidden bg-slate-950"
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="mb-2 font-clash text-2xl font-bold tracking-tight text-white">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-eyebrow-on-dark transition-all duration-300">
                    <span className="font-sans text-xs font-bold tracking-widest uppercase">
                      {hint}
                    </span>
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      weight="bold"
                      aria-hidden
                    />
                  </div>
                </div>
              </Link>
            ))}

            <Link
              href="/contact"
              className="group relative aspect-4/5 cursor-pointer overflow-hidden bg-slate-950"
            >
              <Image
                src={landingMedia.homeServiceBook}
                alt="Carbon fiber texture with blue ambient light."
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-brand/80 mix-blend-multiply" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <CalendarBlank
                  className="mb-4 size-16 text-white md:size-20"
                  weight="duotone"
                  aria-hidden
                />
                <h3 className="mb-4 font-clash text-2xl font-bold tracking-tighter text-white uppercase md:text-3xl">
                  Book online
                </h3>
                <p className="mb-6 font-sans text-xs font-bold tracking-widest text-white/80 uppercase">
                  Real-time availability
                </p>
                <span
                  className={
                    buttonStyles.heroPrimary +
                    " !bg-white !text-brand shadow-lg shadow-black/20 group-hover:!bg-slate-100 hover:scale-100"
                  }
                >
                  Select slot
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
