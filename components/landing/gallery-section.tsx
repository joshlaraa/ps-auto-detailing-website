import { ArrowsOutCardinal } from "@phosphor-icons/react/ssr";
import { landingMedia } from "@/lib/landing/media";

export function GallerySection() {
  return (
    <section id="portfolio" className="bg-white px-6 py-32 md:px-12">
      <h2 className="mb-24 font-clash text-5xl font-bold tracking-tighter text-slate-900 uppercase">
        THE <span className="text-blue-800">ATELIER</span> ARCHIVES
      </h2>
      <div className="group relative aspect-video w-full cursor-ew-resize overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-[0.5]"
          style={{ backgroundImage: `url('${landingMedia.galleryBefore}')` }}
          role="img"
          aria-label="Dull and swirl-marked car paint surface"
        >
          <div className="absolute top-8 left-8 border border-white/10 bg-slate-900/60 px-6 py-2 font-clash text-xs text-white tracking-widest backdrop-blur-md">
            BEFORE PROTOCOL
          </div>
        </div>
        <div
          className="absolute inset-0 w-1/2 overflow-hidden border-blue-800 border-r-2 bg-cover bg-center"
          style={{ backgroundImage: `url('${landingMedia.galleryAfter}')` }}
          role="img"
          aria-label="Flawless mirror-like car paint reflection"
        >
          <div className="absolute top-8 left-8 bg-blue-800 px-6 py-2 font-clash text-xs text-white tracking-widest">
            AFTER RESTORATION
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-800 text-white shadow-2xl transition-transform duration-300 group-hover:scale-125">
          <ArrowsOutCardinal className="h-6 w-6" weight="bold" aria-hidden />
        </div>
      </div>
    </section>
  );
}
