import { BookingCta } from "@/components/landing/booking-cta";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react/ssr";

export default function ContactPage() {
  return (
    <>
      <section className="bg-white px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-sans text-sm font-bold text-blue-800 uppercase tracking-[0.3em]">
            Contact
          </p>
          <h1 className="mb-8 font-clash text-5xl font-bold tracking-tighter text-slate-900 uppercase md:text-6xl">
            Concierge <span className="text-blue-800">desk</span>
          </h1>
          <p className="mb-16 max-w-2xl text-lg font-medium text-slate-600 leading-relaxed">
            Reach our scheduling team for consultations, fleet programs, or
            studio visits. We respond within one business day.
          </p>
          <ul className="grid gap-10 border-slate-200 border-t pt-12 md:grid-cols-3">
            <li className="flex gap-4">
              <Phone
                className="mt-0.5 h-8 w-8 shrink-0 text-blue-800"
                weight="duotone"
                aria-hidden
              />
              <div>
                <p className="mb-1 font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Phone
                </p>
                <a
                  href="tel:+15555550100"
                  className="cursor-pointer font-medium text-slate-900 underline-offset-4 hover:text-blue-800 hover:underline"
                >
                  (555) 555-0100
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Envelope
                className="mt-0.5 h-8 w-8 shrink-0 text-blue-800"
                weight="duotone"
                aria-hidden
              />
              <div>
                <p className="mb-1 font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email
                </p>
                <a
                  href="mailto:studio@precisionlabs.auto"
                  className="cursor-pointer font-medium text-slate-900 underline-offset-4 hover:text-blue-800 hover:underline"
                >
                  studio@precisionlabs.auto
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin
                className="mt-0.5 h-8 w-8 shrink-0 text-blue-800"
                weight="duotone"
                aria-hidden
              />
              <div>
                <p className="mb-1 font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Studio
                </p>
                <p className="font-medium text-slate-900">
                  By appointment — Los Angeles, CA
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <BookingCta />
    </>
  );
}
