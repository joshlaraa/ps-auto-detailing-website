import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { landingMedia } from "@/lib/landing/media";

export function BookingCta() {
  return (
    <section
      id="booking"
      className="relative flex flex-col items-center overflow-hidden bg-slate-900 px-6 py-48 text-center md:px-8"
    >
      <Image
        src={landingMedia.bookingHeadlights}
        alt="Luxury car headlights in a dark hangar"
        fill
        className="-z-10 object-cover opacity-30 grayscale-[0.4]"
        sizes="100vw"
      />
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 font-clash text-6xl leading-[0.9] font-bold tracking-tighter text-white uppercase md:text-8xl">
            READY FOR THE{" "}
            <span className="bg-linear-to-br from-blue-400 to-blue-200 bg-clip-text text-transparent">
              NEXT LEVEL?
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-slate-300 md:text-xl">
            Limited availability. Secure your slot in our detailing laboratory
            today. Experience the pinnacle of automotive care.
          </p>
          <ButtonLink variant="bookingPrimary" href="/contact">
            Book your consultation
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
