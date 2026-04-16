import Image from "next/image";
import {
  ChatCircle,
  Clock,
  Drop,
  MapPin,
  MagnifyingGlass,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { BookingCta } from "@/components/landing/booking-cta";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { aboutMedia } from "@/lib/about/media";
import { landingMedia } from "@/lib/landing/media";

const howWeWork = [
  {
    icon: MagnifyingGlass,
    title: "We look before we touch",
    body: "Your paint, wheels, and interior get a once-over in good light first. That way we’re fixing what’s actually there—not guessing, and not selling you a tier you don’t need.",
  },
  {
    icon: Drop,
    title: "Straightforward products",
    body: "Safe washes, solid protectants, coatings when it makes sense. If you want to know what’s going on the car, ask—we’re happy to talk through it in plain language.",
  },
  {
    icon: UsersThree,
    title: "Same people end to end",
    body: "Mobile work means we’re on your driveway or in your garage for the whole job. No anonymous handoff halfway through.",
  },
] as const;

const fieldNotes = [
  {
    src: aboutMedia.labWide,
    alt: "Clean detailing bay with bright lighting on vehicle panels",
    caption: "Controlled setup",
    body: "Enough space, enough light, and a repeatable order of operations so the finish looks even when we’re done.",
  },
  {
    src: aboutMedia.labFoam,
    alt: "Thick wash foam on a wheel during a contact wash",
    caption: "Wash before polish",
    body: "Grit and brake dust come off before anything abrasive gets near the paint. Sounds obvious; it’s where a lot of swirls start when it’s skipped.",
  },
] as const;

const practicalities = [
  {
    icon: MapPin,
    label: "Where we work",
    value: "San Diego County, mobile by appointment",
  },
  {
    icon: Clock,
    label: "Typical window",
    value: "Most visits booked in a half- or full-day slot",
  },
  {
    icon: ChatCircle,
    label: "How to start",
    value: "Call, text, or use the contact form—we’ll match a package to your car",
  },
] as const;

export function AboutContent() {
  return (
    <>
      <section className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden pt-28 pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <picture className="absolute inset-0 block size-full">
            <source media="(min-width: 768px)" srcSet={landingMedia.heroCar} />
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
              We’re a San Diego crew that shows up with the van, the water, and
              the patience to do boring prep right. No fake “laboratory” tour—just
              careful work on daily drivers and weekend cars alike.
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

      <div className="bg-background">
        <header className="mx-auto pt-24 pb-16">
          <Container>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <Eyebrow as="span" className="mb-4 block">
                  How a visit runs
                </Eyebrow>
                <h2 className="font-clash text-4xl leading-[0.95] font-bold tracking-tighter text-foreground uppercase sm:text-5xl md:text-6xl">
                  What you&apos;re actually paying for
                </h2>
              </div>
              <p className="max-w-sm text-sm font-medium text-slate-600 leading-relaxed">
                Three habits that keep us out of trouble on your paint—and keep
                expectations clear before we turn the pressure washer on.
              </p>
            </div>
          </Container>
        </header>

        <Container className="grid grid-cols-1 items-start gap-16 pb-24 md:grid-cols-2 md:gap-20 lg:pb-32">
          <div className="space-y-12">
            {howWeWork.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                  <Icon
                    className="size-6 text-brand"
                    weight="duotone"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-clash text-xl font-bold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-square w-full max-w-lg justify-self-center md:max-w-none lg:sticky lg:top-32">
            <Image
              src="/jp_auto_detail_products.png"
              alt="JP Auto Detail professional detailing products on display"
              fill
              className="rounded-xl object-cover shadow-lg ring-1 ring-slate-200/80"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        </Container>

        <section className="border-slate-200 border-t bg-white py-24 lg:py-32">
          <Container>
            <div className="mb-14 md:mb-16">
              <Eyebrow as="span" size="compact" className="mb-3 block">
                Field notes
              </Eyebrow>
              <h2 className="font-clash text-3xl font-bold tracking-tighter text-foreground uppercase md:text-4xl">
                On the job
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium text-slate-600 leading-relaxed">
                Two photos, two things we refuse to rush. Hover states are fun;
                labels you can read without a mouse are better.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
              {fieldNotes.map(({ src, alt, caption, body }) => (
                <figure key={caption} className="m-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 shadow-sm ring-1 ring-slate-200/80">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <p className="mb-2 font-sans text-xs font-bold text-brand uppercase tracking-widest">
                      {caption}
                    </p>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                      {body}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-24 lg:py-32">
          <Container>
            <h2 className="mb-10 font-clash text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Practical stuff
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {practicalities.map(({ icon: Icon, label, value }) => (
                <Card key={label} className="p-6">
                  <Icon
                    className="mb-4 size-8 text-brand"
                    weight="duotone"
                    aria-hidden
                  />
                  <p className="mb-1 font-sans text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="font-clash text-lg font-bold text-foreground leading-snug">
                    {value}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-24 lg:pb-32">
          <Container>
            <Card className="p-10 md:p-12">
              <p className="mb-6 font-sans text-xs font-bold text-brand uppercase tracking-widest">
                From the crew
              </p>
              <blockquote className="font-clash text-2xl font-bold tracking-tight text-foreground leading-snug md:text-3xl">
                We&apos;d rather turn down a job than promise a one-hour miracle
                on paint that needs real time. Most of our clients stick around
                because we&apos;re boringly consistent—not because we have the
                loudest Instagram.
              </blockquote>
              <p className="mt-8 text-sm font-medium text-slate-500">
                — JP Auto Detail
              </p>
            </Card>
          </Container>
        </section>
      </div>

      <BookingCta />
    </>
  );
}
