import Link from "next/link";

const tiers = [
  {
    index: "01",
    title: "EXPRESS ATELIER",
    description:
      "The maintenance standard for those who demand perfection daily. Precision wash and interior refresh.",
    time: "3 HOURS",
    protection: "SPRAY SEALANT",
    highlight: false,
    featured: false,
  },
  {
    index: "02",
    title: "FULL RESTORATION",
    description:
      "A multi-stage process designed to eliminate swirl marks and reveal the true depth of the paint.",
    time: "8 HOURS",
    protection: "CLAY & WAX",
    highlight: true,
    featured: true,
  },
  {
    index: "03",
    title: "ULTIMATE CERAMIC",
    description:
      "The pinnacle of paint science. 9H hardness layer that creates a permanent diamond-like shield.",
    time: "2 DAYS",
    protection: "CERAMIC 9H+",
    highlight: false,
    featured: false,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-white px-6 py-32 md:px-12">
      <div className="mb-24 flex flex-col items-end justify-between gap-8 md:flex-row">
        <div className="max-w-2xl">
          <h2 className="mb-6 font-clash text-5xl font-bold tracking-tighter text-slate-900 uppercase md:text-7xl">
            The Detailing <br />{" "}
            <span className="text-slate-200">Protocols</span>
          </h2>
          <p className="text-lg font-medium text-slate-600 leading-relaxed">
            Each tier is a surgical operation. We don&apos;t just clean; we
            restore the factory intent of your vehicle through scientific
            methodology.
          </p>
        </div>
        <div className="border-blue-800/40 border-b pb-4 font-sans text-sm font-bold text-blue-800 tracking-[0.2em]">
          SCROLL TO DISCOVER
        </div>
      </div>
      <div
        id="packages"
        className="grid grid-cols-1 gap-0.5 border border-slate-200 bg-slate-200 md:grid-cols-3"
      >
        {tiers.map((tier) => (
          <div
            key={tier.index}
            className={`group bg-slate-50 p-12 transition-colors duration-500 hover:bg-white ${
              tier.featured ? "relative" : ""
            }`}
          >
            {tier.featured ? (
              <div className="absolute top-0 right-0 bg-blue-800 px-4 py-1 font-clash text-[10px] font-bold text-white uppercase tracking-widest">
                Most Requested
              </div>
            ) : null}
            <div className="mb-12 font-clash text-4xl text-slate-200">
              {tier.index}
            </div>
            <h3 className="mb-4 font-clash text-3xl font-bold text-slate-900">
              {tier.title}
            </h3>
            <p className="mb-12 h-16 text-sm font-medium text-slate-500">
              {tier.description}
            </p>
            <div className="mb-12 space-y-6">
              <div className="flex items-center justify-between border-slate-200 border-b pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Time
                </span>
                <span className="font-sans text-sm font-bold text-slate-900">
                  {tier.time}
                </span>
              </div>
              <div className="flex items-center justify-between border-slate-200 border-b pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Protection
                </span>
                <span className="font-sans text-sm font-bold text-slate-900">
                  {tier.protection}
                </span>
              </div>
            </div>
            {tier.highlight ? (
              <Link
                href="/contact"
                className="block w-full cursor-pointer bg-blue-800 py-4 text-center font-sans text-xs font-bold tracking-[0.2em] text-white uppercase transition-all hover:scale-[1.02]"
              >
                SELECT TIER
              </Link>
            ) : (
              <Link
                href="/contact"
                className="block w-full cursor-pointer border border-slate-200 py-4 text-center font-sans text-xs font-bold tracking-[0.2em] text-slate-900 uppercase transition-all hover:border-blue-800 hover:text-blue-800"
              >
                SELECT TIER
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
