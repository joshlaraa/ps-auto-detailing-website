import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function BookingCta() {
  return (
    <section
      id="booking"
      className="relative isolate w-full overflow-hidden bg-slate-950 py-24 md:py-32"
    >
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
            Book a mobile appointment that fits your schedule. Home, apartment,
            or office - we bring everything needed to get the job done right.
          </p>
          <ButtonLink variant="heroPrimary" href="/contact" className="mt-10">
            Book mobile service
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
