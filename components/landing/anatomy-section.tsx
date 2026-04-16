import Image from "next/image";
import { Armchair, CloudFog, Engine, Flashlight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { landingMedia } from "@/lib/landing/media";

export function AnatomySection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <h2 className="mb-24 text-center font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
          ANATOMY OF <span className="text-brand">PRECISION</span>
        </h2>
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[800px] md:grid-cols-4 md:grid-rows-2">
          <div className="group relative flex flex-col justify-end overflow-hidden bg-slate-100 p-12 md:col-span-2 md:row-span-2">
            <Image
              src={landingMedia.anatomyInterior}
              alt="Extreme close up of interior leather stitching"
              fill
              className="object-cover opacity-60 grayscale-[0.3] transition-transform duration-1000 ease-out scale-110 group-hover:scale-100"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="relative z-10">
              <h3 className="mb-4 font-clash text-4xl font-bold text-foreground">
                INTERIOR ATELIER
              </h3>
              <p className="mb-8 max-w-sm font-medium text-slate-700">
                Steam extraction, pH-balanced leather conditioning, and
                anti-static dashboard protection.
              </p>
              <Armchair
                className="text-5xl text-brand"
                weight="duotone"
                aria-hidden
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 border-brand border-l-4 bg-background p-8 md:col-span-2 md:flex-row md:items-center">
            <Engine
              className="shrink-0 text-5xl text-brand"
              weight="duotone"
              aria-hidden
            />
            <div>
              <h3 className="mb-2 font-clash text-2xl font-bold text-foreground uppercase">
                ENGINE BAY SURGERY
              </h3>
              <p className="text-sm font-bold text-slate-500">
                Degreasing and dressing of all plastic and rubber components to
                factory show-quality.
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-center justify-center bg-background p-8 text-center transition-colors duration-200 hover:bg-slate-100">
            <Flashlight
              className="mb-4 text-4xl text-brand"
              weight="duotone"
              aria-hidden
            />
            <h3 className="font-clash text-lg font-bold text-foreground uppercase">
              HEADLIGHT CLARITY
            </h3>
          </div>
          <div className="group flex flex-col items-center justify-center bg-background p-8 text-center transition-colors duration-200 hover:bg-slate-100">
            <CloudFog
              className="mb-4 text-4xl text-brand"
              weight="duotone"
              aria-hidden
            />
            <h3 className="font-clash text-lg font-bold text-foreground uppercase">
              OZONE TREATMENT
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
