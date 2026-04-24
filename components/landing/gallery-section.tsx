import Image from "next/image";
import { ArrowsOutCardinal } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { landingMedia } from "@/lib/landing/media";

export function GallerySection() {
  return (
    <section id="portfolio" className="bg-white py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="mb-24 font-clash text-5xl font-bold tracking-tighter text-foreground uppercase">
            THE <span className="text-brand">ATELIER</span> ARCHIVES
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="group relative aspect-video w-full cursor-ew-resize overflow-hidden rounded-xl">
            <div className="absolute inset-0 grayscale-[0.5]">
              <Image
                src={landingMedia.galleryBefore}
                alt="Dull and swirl-marked car paint surface"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute top-8 left-8 rounded-lg border border-white/10 bg-slate-900/60 px-6 py-2 font-clash text-xs text-white tracking-widest backdrop-blur-md">
                BEFORE PROTOCOL
              </div>
            </div>
            {/* Keep the after image clipped to half width for the split-view effect. */}
            <div className="absolute inset-0 w-1/2 overflow-hidden border-brand border-r-2">
              <Image
                src={landingMedia.galleryAfter}
                alt="Flawless mirror-like car paint reflection"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute top-8 left-8 rounded-lg bg-brand px-6 py-2 font-clash text-xs text-on-brand tracking-widest">
                AFTER RESTORATION
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-on-brand shadow-2xl transition-transform duration-300 ease-out md:group-hover:scale-125 group-active:scale-125">
              <ArrowsOutCardinal className="h-6 w-6" weight="bold" aria-hidden />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
