import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Flask,
  Headset,
  Lightbulb,
  Shield,
  Snowflake,
  SprayBottle,
  Wind,
} from "@phosphor-icons/react/ssr";
import { BookingCta } from "@/components/landing/booking-cta";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import { siteContact } from "@/lib/site/contact";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAWZ0i1onTQjQ1VDmxbhIk6Yjp3YDKeHJPwF58iSPs0mkz2lhxhdklL8bMCh8Oo1-I6g3zvtRh5qv8ZWV-X3q8ur5F6larQgxOh5lmKUoZUwK67G9HWyuaChg6u2PeeVMjNTz1SZN_nHWCR-hzGP-NQduNqWePrHOaGWiUpDnvhnh3ew47IiVWJ_ZjYY-viHGS6M4fCh2WLGKa5r-pat4mNREeJF5c2tZuK0mr1E4w-dXshvVChhZaHivMr3tU7-wO6vBOI2ElIbl8";

const serviceFootprintSprays = [
  { className: "right-0 top-[6%] size-11 -rotate-[18deg]" },
  { className: "right-[4%] top-[2%] size-9 rotate-12" },
  { className: "right-0 top-[30%] size-12 rotate-[6deg]" },
  { className: "right-[10%] top-[22%] size-10 -rotate-[10deg]" },
  { className: "right-[2%] top-[48%] size-10 rotate-[14deg]" },
  { className: "right-[12%] top-[44%] size-11 -rotate-6" },
  { className: "right-[1%] bottom-[24%] size-12 rotate-[16deg]" },
  { className: "right-[14%] bottom-[18%] size-9 -rotate-[12deg]" },
  { className: "right-0 bottom-[6%] size-11 rotate-8" },
  { className: "right-[8%] bottom-[2%] size-10 -rotate-[20deg]" },
] as const;

const facilitySpecs = [
  {
    icon: Snowflake,
    label: "Climate control",
    value: "21.5°C stabilized",
  },
  {
    icon: Lightbulb,
    label: "Lighting lux",
    value: "5000K diffused",
  },
  {
    icon: Shield,
    label: "Security node",
    value: "Biometric access",
  },
  {
    icon: Wind,
    label: "Air filtration",
    value: "HEPA H14 certified",
  },
] as const;

const linkUnderline =
  "underline-offset-4 transition-colors duration-200 hover:text-brand hover:underline";

export const metadata: Metadata = {
  title: "Contact | JP AUTO DETAIL",
  description:
    "Contact JP Auto Detail to book mobile detailing services in San Diego.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-background py-24 pt-32 md:py-32 md:pt-36">
        <header className="mb-24">
          <Container>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <Eyebrow className="mb-4 block">Communication protocol</Eyebrow>
                <h1 className="font-clash text-5xl leading-[0.9] font-bold tracking-tighter text-foreground uppercase sm:text-6xl md:text-7xl lg:text-8xl">
                  Technical inquiry
                </h1>
              </div>
              <div className="text-left md:text-right">
                <p className="max-w-xs text-sm font-medium text-slate-600 leading-relaxed">
                  Establishing secure diagnostic channels for automotive
                  preservation and aesthetic engineering across San Diego.
                </p>
              </div>
            </div>
          </Container>
        </header>

        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Card className="p-10 lg:col-span-7">
              <div className="mb-10">
                <h2 className="mb-2 font-clash text-2xl font-bold tracking-tight text-foreground">
                  Precision inquiry
                </h2>
                <p className="text-sm font-medium text-slate-600">
                  Required parameters for initial diagnostic assessment.
                </p>
              </div>
              <ContactInquiryForm />
            </Card>

            <aside className="space-y-8 lg:col-span-5">
              <div className="rounded-xl bg-slate-100 p-8">
                <Eyebrow as="h3" size="compact" className="mb-6">
                  Immediate assistance
                </Eyebrow>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                      <Flask className="size-5" weight="duotone" aria-hidden />
                    </div>
                    <div>
                      <p className="mb-1 font-sans text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        Detailing specialists
                      </p>
                      <a
                        href={siteContact.phoneHref}
                        className={cn(
                          "text-lg font-bold text-foreground",
                          linkUnderline,
                        )}
                      >
                        {siteContact.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                      <Headset className="size-5" weight="duotone" aria-hidden />
                    </div>
                    <div>
                      <p className="mb-1 font-sans text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        Concierge operations
                      </p>
                      <a
                        href={siteContact.emailHref}
                        className={cn(
                          "text-lg font-bold text-foreground",
                          linkUnderline,
                        )}
                      >
                        {siteContact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-slate-200 p-8">
                <div className="relative z-10">
                  <Eyebrow as="h3" size="compact" className="mb-6">
                    Service footprint
                  </Eyebrow>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 font-sans text-xs font-bold text-slate-500 uppercase">
                        Primary coverage
                      </p>
                      <p className="text-sm font-medium text-foreground leading-relaxed">
                        Mobile detailing throughout San Diego County
                        <br />
                        Studio visits by appointment — Los Angeles, CA
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="mb-1 font-sans text-xs font-bold text-slate-500 uppercase">
                          Operational hours
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          08:00 — 18:00 PST
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 font-sans text-xs font-bold text-slate-500 uppercase">
                          Response SLA
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          Within 1 business day
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={siteContact.coverageMapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-bold text-brand uppercase tracking-widest transition-all duration-200 group-hover:gap-3"
                  >
                    Coverage map
                    <ArrowRight className="size-4" weight="bold" aria-hidden />
                  </a>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden text-foreground"
                  aria-hidden
                >
                  {serviceFootprintSprays.map(({ className }, i) => (
                    <SprayBottle
                      key={i}
                      className={`absolute opacity-[0.05] transition-opacity duration-200 group-hover:opacity-[0.09] ${className}`}
                      weight="duotone"
                    />
                  ))}
                </div>
              </div>

              <div className="h-64 overflow-hidden rounded-xl grayscale contrast-125 brightness-110">
                <Image
                  src={MAP_IMAGE}
                  alt="Monochrome satellite view of an industrial facility and surrounding terrain"
                  width={1200}
                  height={800}
                  className="size-full object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </aside>
          </div>
        </Container>

        <Container className="mt-24">
          <div className="h-px w-full bg-slate-200/50" />
        </Container>

        <Container className="mt-24">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {facilitySpecs.map(({ icon: Icon, label, value }) => (
              <Card key={label} className="p-6">
                <Icon
                  className="mb-4 size-8 text-brand"
                  weight="duotone"
                  aria-hidden
                />
                <p className="mb-1 font-sans text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {label}
                </p>
                <p className="font-clash text-xl font-bold text-foreground">
                  {value}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </div>
      <BookingCta />
    </>
  );
}
