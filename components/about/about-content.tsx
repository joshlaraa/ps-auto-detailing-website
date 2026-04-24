import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { aboutPageMedia } from "@/lib/about/media";
import { landingMedia } from "@/lib/landing/media";

const clinicalBullets = [
  "100% mobile setup",
  "Safe products for daily drivers",
  "Consistent results every visit",
] as const;

const serviceDaySteps = [
  {
    title: "Arrival and walkthrough",
    body: "We confirm your priorities, inspect the vehicle together, and set clear expectations before work starts.",
  },
  {
    title: "Detailing in progress",
    body: "Exterior and interior work follows a repeatable process with safe products and careful handling of trim, paint, and surfaces.",
  },
  {
    title: "Final check and handoff",
    body: "You get a quick walkthrough at the end, plus simple maintenance tips so results last longer between visits.",
  },
] as const;

export function AboutContent() {
  return (
    <>
      <section className="relative isolate flex min-h-dvh flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <picture className="absolute inset-0 block size-full">
            <source
              media="(min-width: 768px)"
              srcSet={landingMedia.sectionWheels}
            />
            <Image
              src={landingMedia.heroCarMobile}
              alt="JP Auto Detail van and a vehicle being washed on a driveway"
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
                About JP Auto Detail
              </Eyebrow>
            </div>
            <h1 className="mb-6 font-clash text-[clamp(2.75rem,6vw+1rem,5.5rem)] leading-[0.9] font-bold tracking-tighter text-white uppercase md:mb-8">
              Who we are
              <br />
              <span className="bg-linear-to-br from-blue-300 to-blue-100 bg-clip-text text-transparent">
                and how we work
              </span>
            </h1>
            <p className="mb-9 max-w-2xl text-sm font-medium text-slate-200 leading-relaxed md:mb-10 md:text-base">
              We bring professional detailing to your home, apartment, or office
              with clean process standards and consistent finishes every visit.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink variant="heroPrimary" href="/services">
                See packages
              </ButtonLink>
              <ButtonLink variant="heroSecondaryDark" href="/contact">
                Get a quote
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-slate-100 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
            <div className="relative">
              <div className="relative h-[min(600px,70vh)] w-full overflow-hidden rounded-xl md:h-[600px]">
                <Image
                  src={aboutPageMedia.clinicalReflection}
                  alt="Placeholder image representing mobile auto detailing workflow."
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="font-clash text-5xl leading-none font-bold tracking-tighter text-foreground uppercase">
                Why drivers
                <br />
                choose us.
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed">
                Every appointment is designed around real-life schedules and
                real-life vehicles. We keep the process simple: show up on time,
                protect your surfaces, and leave your car cleaner than expected.
              </p>
              <div className="flex flex-col gap-4 pt-2">
                {clinicalBullets.map((label) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="h-px w-12 shrink-0 bg-brand" />
                    <span className="font-sans text-xs font-bold tracking-[0.2em] text-brand uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="mb-14 md:mb-20">
            <h2 className="font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
              How we work
            </h2>
            <p className="mt-4 font-sans text-sm font-bold tracking-widest text-slate-500 uppercase">
              Reliable service from arrival to final check
            </p>
          </div>

          <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-12 md:h-[min(900px,85vh)]">
            <div className="relative min-h-[280px] md:col-span-8 md:min-h-0">
              <Image
                src={aboutPageMedia.labInterior}
                alt="Placeholder image for mobile detailing setup."
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>
            <div className="grid min-h-[480px] grid-rows-2 gap-6 md:col-span-4 md:min-h-0">
              <div className="relative min-h-[200px] overflow-hidden rounded-xl md:min-h-0">
                <Image
                  src={aboutPageMedia.labBrushes}
                  alt="Placeholder image for detailing tools and products."
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-end rounded-xl bg-slate-100 p-8 md:p-10">
                <p className="font-clash text-xl font-semibold tracking-tight text-foreground leading-tight md:text-2xl md:font-light">
                  From pre-rinse to final wipe-down, we follow a clear process so
                  every vehicle gets careful and consistent attention.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="mb-14 md:mb-20">
            <h2 className="font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
              Meet the owner
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium text-slate-600 leading-relaxed md:text-base">
              JP Auto Detail is owner-operated, and every appointment is handled
              with the same care and consistency. You work directly with the
              person doing the job, so communication stays clear from quote to
              final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-slate-200 md:col-span-5">
              <Image
                src={aboutPageMedia.teamLead}
                alt="Placeholder image representing the business owner."
                fill
                className="object-cover"
                sizes="(min-width: 768px) 38vw, 100vw"
              />
            </div>
            <div className="md:col-span-7">
              <h3 className="font-clash text-3xl font-bold tracking-tight text-foreground uppercase md:text-4xl">
                What to expect on service day
              </h3>
              <div className="mt-8 space-y-6">
                {serviceDaySteps.map(({ title, body }, index) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-200 bg-white p-6"
                  >
                    <p className="font-sans text-xs font-bold tracking-[0.2em] text-brand uppercase">
                      Step {index + 1}
                    </p>
                    <h4 className="mt-3 font-clash text-xl font-semibold tracking-tight text-foreground uppercase">
                      {title}
                    </h4>
                    <p className="mt-3 text-sm font-medium text-slate-600 leading-relaxed md:text-base">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

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
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Eyebrow as="p" tone="onDark" className="mb-5 block">
              Mobile Auto Detailing
            </Eyebrow>
            <h2 className="font-clash text-5xl leading-[0.9] font-bold tracking-tighter text-white uppercase sm:text-6xl md:text-7xl">
              Ready for
              <br />
              your next detail
            </h2>
            <p className="mt-6 max-w-2xl text-sm font-medium text-white/75 leading-relaxed md:text-base">
              Book a mobile appointment that fits your schedule. Home,
              apartment, or office - we bring everything needed to get the job
              done right.
            </p>
            <ButtonLink variant="heroPrimary" href="/contact" className="mt-10">
              Book mobile service
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
