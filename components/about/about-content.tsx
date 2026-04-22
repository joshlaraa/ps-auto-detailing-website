import Image from "next/image";
import { Flask } from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { aboutPageMedia } from "@/lib/about/media";
import { landingMedia } from "@/lib/landing/media";

const clinicalBullets = [
  "Micron-level accuracy",
  "pH-neutral chemistry",
  "Controlled environment",
] as const;

const specialists = [
  {
    name: "Marcus Vance",
    role: "Chief specialist",
    image: aboutPageMedia.teamLead,
    alt: "Professional portrait of a lead technician with a focused expression.",
    offset: false,
  },
  {
    name: "Elara Chen",
    role: "Surface chemist",
    image: aboutPageMedia.teamChemist,
    alt: "Portrait of a chemical specialist looking confident and professional.",
    offset: true,
  },
  {
    name: "Julian Ross",
    role: "Master polisher",
    image: aboutPageMedia.teamPolisher,
    alt: "Portrait of a detailing specialist with a clean, professional look.",
    offset: false,
  },
  {
    name: "Sarah Lund",
    role: "Quality control",
    image: aboutPageMedia.teamQC,
    alt: "Portrait of a quality control lead in a clean work environment.",
    offset: true,
  },
] as const;

const milestones = [
  {
    year: "2018",
    title: "The genesis",
    body: "Founded with a simple rule: look at the paint before you touch it—and never promise a miracle in an hour.",
    reverse: false,
  },
  {
    year: "2020",
    title: "Process 1.0",
    body: "Dialled in our mobile setup: repeatable wash order, controlled lighting checks, and protectants we trust on daily drivers.",
    reverse: true,
  },
  {
    year: "2024",
    title: "San Diego standard",
    body: "Trusted for boringly consistent finishes—clear communication, same crew on site, and coatings when they actually make sense.",
    reverse: false,
  },
] as const;

export function AboutContent() {
  return (
    <>
      <section className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden pt-28 pb-16 md:pb-24">
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

        <Container className="relative z-10">
          <div className="max-w-6xl">
            <Eyebrow as="p" tone="onDark" className="mb-6 block">
              About JP Auto Detail
            </Eyebrow>
            <h1 className="mb-8 font-clash text-5xl leading-[0.9] font-bold tracking-tighter text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
              Mobile detail
              <br />
              <span className="bg-linear-to-br from-blue-300 to-blue-100 bg-clip-text text-transparent">
                without the fluff
              </span>
            </h1>
            <p className="mb-10 max-w-xl text-base font-medium text-slate-200 leading-relaxed md:text-lg">
              We&apos;re a San Diego crew that shows up with the van, the water,
              and the patience to do boring prep right. No fake
              &quot;laboratory&quot; tour—just careful work on daily drivers and
              weekend cars alike.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink variant="heroPrimary" href="/services">
                See packages
              </ButtonLink>
              <ButtonLink variant="heroSecondaryDark" href="/contact">
                Ask a question
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
                  alt="Close-up reflection on a coated vehicle in bright, controlled lighting."
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div
                className="absolute -bottom-8 -right-8 hidden bg-brand p-10 md:block"
                aria-hidden
              >
                <Flask className="size-14 text-white" weight="fill" />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="font-clash text-5xl leading-none font-bold tracking-tighter text-foreground uppercase">
                Clinical
                <br />
                mastery.
              </h2>
              <p className="text-lg font-medium text-slate-600 leading-relaxed">
                Our approach is rooted in chemical precision. Every surface gets
                a honest read in good light before tools go near it. We treat
                your vehicle as engineered paint and trim that deserves
                methodical prep—not a rushed showroom wipe-down.
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
              The laboratory
            </h2>
            <p className="mt-4 font-sans text-sm font-bold tracking-widest text-slate-500 uppercase">
              Where science meets aesthetics
            </p>
          </div>

          <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-12 md:h-[min(900px,85vh)]">
            <div className="relative min-h-[280px] md:col-span-8 md:min-h-0">
              <Image
                src={aboutPageMedia.labInterior}
                alt="Bright detailing space with a vehicle being worked on under clean lighting."
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>
            <div className="grid min-h-[480px] grid-rows-2 gap-6 md:col-span-4 md:min-h-0">
              <div className="relative min-h-[200px] overflow-hidden rounded-xl md:min-h-0">
                <Image
                  src={aboutPageMedia.labBrushes}
                  alt="Detailing brushes and solutions organized on a tray."
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-end rounded-xl bg-slate-100 p-8 md:p-10">
                <p className="font-clash text-xl font-semibold tracking-tight text-foreground leading-tight md:text-2xl md:font-light">
                  Clean tools, clear steps, and the same order of operations
                  every visit. That&apos;s the JP Auto Detail standard.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="mb-14 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
            <h2 className="font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
              The
              <br />
              specialists
            </h2>
            <p className="max-w-md text-sm font-medium text-slate-600 leading-relaxed md:text-base">
              Our technicians are more than detailers—they&apos;re craftspeople
              who care about safe chemistry, even lighting, and finishes that
              hold up after the driveway photos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {specialists.map(({ name, role, image, alt, offset }) => (
              <div
                key={name}
                className={offset ? "mt-12 md:mt-0" : undefined}
              >
                <div className="group relative overflow-hidden rounded-xl bg-slate-200">
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className="object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-clash text-lg font-bold tracking-tight text-foreground uppercase">
                    {name}
                  </h3>
                  <p className="mt-1 font-sans text-sm font-bold tracking-widest text-brand uppercase">
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-24 text-white md:py-32">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mb-14 font-clash text-5xl font-bold tracking-tighter uppercase md:mb-20">
              Our evolution
            </h2>
            <div className="relative space-y-20 md:space-y-24">
              <div
                className="absolute top-0 bottom-0 left-4 ml-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
                aria-hidden
              />

              {milestones.map(({ year, title, body, reverse }) => (
                <div
                  key={year}
                  className={`relative flex flex-col items-start md:flex-row md:items-center md:justify-between ${
                    reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`mb-6 hidden w-[45%] md:mb-0 md:block ${
                      reverse ? "text-left" : "text-right"
                    }`}
                  >
                    <span className="font-clash text-5xl leading-none font-bold tracking-tighter text-white/20 md:text-6xl">
                      {year}
                    </span>
                  </div>
                  <div
                    className="absolute top-1/2 left-4 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand md:left-1/2"
                    aria-hidden
                  />
                  <div
                    className={`w-full pl-10 md:w-[45%] md:pl-0 ${
                      reverse ? "md:text-right" : ""
                    }`}
                  >
                    <span className="mb-2 block font-sans text-xl font-bold md:hidden">
                      {year}
                    </span>
                    <h3 className="mb-3 font-clash text-xl font-bold tracking-tight uppercase md:text-2xl">
                      {title}
                    </h3>
                    <p className="text-sm font-medium text-white/60 leading-relaxed md:text-base md:font-light">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate min-h-[560px] overflow-hidden md:h-[min(819px,90vh)]">
        <Image
          src={aboutPageMedia.ctaHeadlight}
          alt="Headlight with water beading on a ceramic-coated surface in dramatic light."
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/50 p-8 text-center backdrop-blur-sm">
          <h2 className="max-w-4xl font-clash text-5xl leading-[0.9] font-bold tracking-tighter text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            Experience
            <br />
            precision
          </h2>
          <ButtonLink
            variant="heroPrimary"
            href="/contact"
            className="mt-10 bg-white text-foreground hover:scale-100 hover:bg-brand hover:text-on-brand md:mt-12"
          >
            Reserve your appointment
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
