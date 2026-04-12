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
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50 px-6 pt-20 md:px-12">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-50 to-slate-50" />
        <Image
          src={landingMedia.heroCar}
          alt="Close-up of a high-end black sports car with sharp reflections and professional studio lighting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="max-w-6xl">
        <p className="mb-6 font-sans text-sm font-bold text-blue-800 uppercase tracking-[0.3em]">
          SCIENTIFIC PRECISION FOR THE ELITE
        </p>
        <h1 className="mb-12 font-clash text-6xl leading-[0.9] font-bold tracking-tighter text-slate-900 md:text-[7rem]">
          ENGINEERED FOR <br />{" "}
          <span className="bg-linear-to-br from-blue-900 to-blue-600 bg-clip-text text-transparent">
            EXCELLENCE
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
