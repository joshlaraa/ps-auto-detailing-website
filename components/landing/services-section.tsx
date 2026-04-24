import Image from "next/image";
import { BookingCta } from "@/components/landing/booking-cta";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { landingMedia } from "@/lib/landing/media";
import { servicesPageMedia } from "@/lib/services/media";

const tiers = [
  {
    index: "01",
    title: "Exterior Detail",
    description:
      "Ideal for San Diego daily drivers who want a clean, glossy finish after beach air, freeway dust, and light road grime.",
    time: "~1.5-2.5 hours",
    protection: "Hand wash + spray sealant",
    featured: false,
  },
  {
    index: "02",
    title: "Interior Detail",
    description:
      "A deep interior reset for sand, pet hair, spills, and everyday buildup in family and commuter vehicles.",
    time: "~2-3 hours",
    protection: "Steam clean + UV protectant",
    featured: true,
  },
  {
    index: "03",
    title: "Full Detail",
    description:
      "Our most popular one-visit transformation with complete interior and exterior detailing for heavily used vehicles.",
    time: "~3.5-5 hours",
    protection: "Full reset + sealant",
    featured: false,
  },
  {
    index: "04",
    title: "Maintenance Plan",
    description:
      "Recurring upkeep every 3-6 weeks for existing clients who want their vehicle consistently clean year-round.",
    time: "~1.5-2 hours",
    protection: "Members-only refresh",
    featured: false,
  },
] as const;

const maintenanceProtocols = [
  {
    title: "Monthly stabilization",
    body: "Built for vehicles parked outside in San Diego. Monthly care helps prevent water-spot etching, salt-air film, and interior wear from sun exposure.",
    points: [
      "pH-neutral contact wash",
      "Wheel faces and barrels",
      "Spray sealant top-up",
      "Interior wipe + vacuum",
    ],
  },
  {
    title: "Quarterly protection",
    body: "Every 3 months, we perform a deeper decontamination service and refresh protection to handle UV, coastal moisture, and road fallout.",
    price: "$279",
    cadence: "/quarter",
  },
  {
    title: "Annual restoration",
    body: "Yearly reset that includes paint condition inspection, targeted correction planning, and full interior and exterior restoration for long-term upkeep.",
  },
] as const;

const addOnGallery = [
  { title: "Pet Hair Removal", price: "From $50", image: servicesPageMedia.petHair },
  {
    title: "Paint Correction",
    price: "Quote required",
    image: servicesPageMedia.paintCorrection,
  },
  {
    title: "Engine Bay Surgery",
    price: "From $75",
    image: servicesPageMedia.engineBay,
  },
  {
    title: "Headlight Restoration",
    price: "From $100",
    image: servicesPageMedia.headlight,
  },
  {
    title: "Ceramic Coating",
    price: "Inquire for pricing",
    image: servicesPageMedia.ceramicCoating,
  },
  {
    title: "Ozone Treatment",
    price: "From $60",
    image: servicesPageMedia.ozoneTreatment,
  },
] as const;

const faqs = [
  {
    question: "Do you need access to water and power?",
    answer:
      "Yes. For mobile appointments in San Diego, we need a standard outdoor water spigot and a 120V outlet within about 50 feet of the vehicle.",
  },
  {
    question: "How long does a detail usually take?",
    answer:
      "Most appointments take between 1.5 and 5 hours depending on the package, vehicle size, and condition. We confirm timing before we begin.",
  },
  {
    question: "Do you service apartments, condos, and offices?",
    answer:
      "Yes, as long as your property allows mobile detailing and we have safe working space access. We regularly service homes, apartments, and office lots across San Diego County.",
  },
  {
    question: "How often should I get my car detailed?",
    answer:
      "For most daily drivers, a maintenance detail every 3-6 weeks after an initial full detail keeps paint, trim, and interior surfaces in great shape.",
  },
] as const;

export function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className="relative isolate flex min-h-dvh flex-col overflow-hidden"
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

        <Container className="relative z-10 flex min-h-dvh items-center py-16 md:py-24">
          <div className="w-full max-w-3xl">
            <div className="mb-5 flex items-center gap-4 md:mb-6">
              <span className="h-px w-12 shrink-0 bg-brand" aria-hidden />
              <Eyebrow as="span" tone="onDark" size="compact" className="block">
                Mobile detailing services
              </Eyebrow>
            </div>
            <h1 className="mb-6 font-clash text-[clamp(2.75rem,6vw+1rem,5.5rem)] leading-[0.9] font-bold tracking-tighter text-white uppercase md:mb-8">
              Packages
              <br />
              <span className="bg-linear-to-br from-blue-300 to-blue-100 bg-clip-text text-transparent">
                built for San Diego
              </span>
            </h1>
            <p className="mb-9 max-w-2xl text-sm font-medium text-slate-200 leading-relaxed md:mb-10 md:text-base">
              On-site packages designed for local driving conditions, from
              coastal moisture to freeway dust.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink variant="heroPrimary" href="#packages">
                Compare packages
              </ButtonLink>
              <ButtonLink variant="heroSecondaryDark" href="#addons">
                View add-ons
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="packages" className="bg-white py-24 md:py-32 scroll-mt-28 md:scroll-mt-32">
        <Container>
          <h2 className="mb-4 font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
            Core Service Tiers
          </h2>
          <div className="mb-14 h-1 w-24 bg-brand md:mb-16" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.index}
                className={`group bg-slate-50 p-8 transition-colors duration-500 hover:bg-brand md:p-10 ${
                  tier.featured ? "relative" : ""
                }`}
              >
                {tier.featured ? (
                  <div className="absolute -top-3 right-8 bg-brand px-3 py-1 font-clash text-[9px] font-bold text-on-brand uppercase tracking-widest">
                    Most booked
                  </div>
                ) : null}
                <div className="mb-8 font-clash text-4xl font-bold text-slate-300 transition-colors duration-500 group-hover:text-blue-100">
                  {tier.index}
                </div>
                <h3 className="mb-3 font-clash text-3xl font-bold tracking-tight text-foreground uppercase transition-colors duration-500 group-hover:text-white">
                  {tier.title}
                </h3>
                <p className="mb-8 min-h-[4.5rem] text-sm font-medium text-slate-600 transition-colors duration-500 group-hover:text-blue-100/80">
                  {tier.description}
                </p>
                <div className="mt-auto border-slate-200 border-t pt-8 transition-colors duration-500 group-hover:border-blue-200/40">
                  <div className="mb-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                      <span className="text-slate-400 transition-colors duration-500 group-hover:text-blue-200">
                        Time
                      </span>
                      <span className="text-foreground transition-colors duration-500 group-hover:text-white">
                        {tier.time.replace(" hours", "H")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                      <span className="text-slate-400 transition-colors duration-500 group-hover:text-blue-200">
                        Finish
                      </span>
                      <span className="text-foreground transition-colors duration-500 group-hover:text-white">
                        {tier.protection}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center font-clash text-sm font-bold text-brand transition-colors duration-500 group-hover:text-white">
                    Learn more
                    <span aria-hidden className="ml-2">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-24 md:py-32">
        <Container>
          <div className="mb-14 flex items-end justify-between gap-8 md:mb-16">
            <div>
              <h2 className="mb-4 font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
                Maintenance Protocols
              </h2>
              <p className="font-sans text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">
                Reliable workflow certified
              </p>
            </div>
            <p className="hidden text-right font-sans text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-[0.15em] md:block">
              Stability through
              <br />
              recurrence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col justify-between bg-white p-8 md:col-span-2 md:p-10">
              <div>
                <h3 className="mb-4 font-clash text-3xl font-bold tracking-tight text-brand uppercase">
                  {maintenanceProtocols[0].title}
                </h3>
                <p className="mb-8 max-w-2xl text-sm font-medium text-slate-600 leading-relaxed md:text-base">
                  {maintenanceProtocols[0].body}
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest sm:grid-cols-2">
                {maintenanceProtocols[0].points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between bg-brand p-8 text-white md:p-10">
              <div>
                <h3 className="mb-4 font-clash text-3xl font-bold tracking-tight uppercase">
                  {maintenanceProtocols[1].title}
                </h3>
                <p className="mb-8 text-sm font-medium text-blue-100/80 leading-relaxed">
                  {maintenanceProtocols[1].body}
                </p>
              </div>
              <p className="font-clash text-4xl font-bold tracking-tight uppercase">
                {maintenanceProtocols[1].price}
                <span className="ml-2 font-sans text-xs font-medium opacity-70 tracking-normal">
                  {maintenanceProtocols[1].cadence}
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 bg-slate-900 p-8 md:col-span-3 md:flex-row md:p-10">
              <div className="flex-1">
                <h3 className="mb-4 font-clash text-3xl font-bold tracking-tight text-white uppercase">
                  {maintenanceProtocols[2].title}
                </h3>
                <p className="text-sm font-medium text-slate-300 leading-relaxed">
                  {maintenanceProtocols[2].body}
                </p>
              </div>
              <div className="h-px w-full bg-slate-700 md:h-12 md:w-px" />
              <ButtonLink variant="blockBrand" href="/contact" className="md:w-auto md:px-8 md:py-4">
                Inquire Strategy
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="addons" className="bg-background py-24 md:py-32 scroll-mt-28 md:scroll-mt-32">
        <Container>
          <h2 className="mb-14 font-clash text-5xl font-bold tracking-tighter text-foreground uppercase md:mb-16">
            Surgical Add-Ons
          </h2>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
            {addOnGallery.map((item) => (
              <div key={item.title} className="group relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Placeholder image representing ${item.title.toLowerCase()}.`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent p-8" />
                <div className="absolute right-8 bottom-8 left-8">
                  <h3 className="font-clash text-2xl font-bold tracking-tight text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs font-bold text-white/70 uppercase tracking-widest">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-24 md:py-32">
        <Container className="max-w-4xl">
          <h2 className="mb-12 text-center font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
            Technical FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-brand border-l-4 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-sm font-bold uppercase tracking-widest text-foreground">
                  {faq.question}
                  <span
                    aria-hidden
                    className="ml-4 text-lg text-brand transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="mt-4 text-sm font-medium text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <BookingCta />
    </>
  );
}
