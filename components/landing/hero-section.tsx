import Image from "next/image";
import Link from "next/link";
import { landingMedia } from "@/lib/landing/media";

const stats = [
  { value: "500+", label: "Exotic Cars Detailed" },
  { value: "5.0", label: "Customer Satisfaction" },
  { value: "9H", label: "Ceramic Protection" },
  { value: "24/7", label: "Concierge Service" },
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden bg-slate-50 px-6 pt-20 pb-16 md:px-12 md:pb-24">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(248_250_252/0.9)_0%,rgb(248_250_252/0.8)_24%,rgb(248_250_252/0.7)_34%,rgb(248_250_252/0.12)_100%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-50/30 from-0% via-transparent via-45% to-slate-50 to-100%" />
      </div>
      <div className="relative z-10 max-w-6xl">
        <p className="mb-6 font-sans text-sm font-bold text-blue-800 uppercase tracking-[0.3em]">
          SAN DIEGO'S MOBILE CAR DETAILING SERVICE
        </p>
        <h1 className="mb-12 font-clash text-6xl leading-[0.9] font-bold tracking-tighter text-slate-900 md:text-[7rem]">
          BRINGING ELITE <br />
          SHINE TO <br />{" "}
          <span className="bg-linear-to-br from-blue-900 to-blue-600 bg-clip-text text-transparent">
            YOUR VEHICLE
          </span>
        </h1>
        <div className="mb-20 flex flex-col gap-6 md:flex-row">
          <Link
            href="/services"
            className="inline-flex cursor-pointer items-center justify-center bg-blue-800 px-12 py-5 font-clash text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105"
          >
            EXPLORE TIERS
          </Link>
          <Link
            href="/products"
            className="inline-flex cursor-pointer items-center justify-center border border-blue-800/20 px-12 py-5 font-clash text-sm font-bold tracking-widest text-blue-800 uppercase transition-all hover:bg-blue-800/5"
          >
            VIEW OUR WORK
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 border-slate-200 border-t py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mb-1 font-clash text-3xl font-bold text-slate-900">
                {s.value}
              </div>
              <div className="font-label text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
