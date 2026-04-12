import Link from "next/link";
import { Envelope, Globe, Phone } from "@phosphor-icons/react/ssr";

export function SiteFooter() {
  return (
    <footer className="w-full border-slate-200/50 border-t bg-slate-50">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div>
          <div className="mb-6 font-sans text-lg font-black text-slate-900 uppercase">
            PRECISION LABS
          </div>
          <p className="max-w-xs text-sm font-medium text-slate-500 leading-relaxed">
            Specialized in exotic and luxury vehicle restoration. Operating
            globally with a focus on surgical excellence.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-sans text-sm font-bold text-slate-900 uppercase tracking-widest">
            Services
          </p>
          <ul className="space-y-3 font-sans text-sm font-medium uppercase tracking-widest">
            <li>
              <Link
                className="cursor-pointer text-slate-500 underline-offset-4 transition-opacity duration-200 hover:text-blue-600 hover:underline"
                href="/services"
              >
                Ceramic Coating
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-slate-500 underline-offset-4 transition-opacity duration-200 hover:text-blue-600 hover:underline"
                href="/services"
              >
                Paint Correction
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-slate-500 underline-offset-4 transition-opacity duration-200 hover:text-blue-600 hover:underline"
                href="/services"
              >
                Interior Detail
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-slate-500 underline-offset-4 transition-opacity duration-200 hover:text-blue-600 hover:underline"
                href="/products"
              >
                PPF
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-sans text-sm font-bold text-slate-900 uppercase tracking-widest">
            Legal
          </p>
          <ul className="space-y-3 font-sans text-sm font-medium uppercase tracking-widest">
            <li>
              <Link
                className="cursor-pointer text-slate-500 underline-offset-4 transition-opacity duration-200 hover:text-blue-600 hover:underline"
                href="/contact"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-slate-500 underline-offset-4 transition-opacity duration-200 hover:text-blue-600 hover:underline"
                href="/contact"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <p className="font-sans text-sm font-bold text-slate-900 uppercase tracking-widest">
            Connect
          </p>
          <div className="flex gap-6">
            <Link
              className="cursor-pointer text-slate-400 transition-colors hover:text-blue-700"
              href="/"
              aria-label="Website"
            >
              <Globe className="h-6 w-6" weight="duotone" aria-hidden />
            </Link>
            <Link
              className="cursor-pointer text-slate-400 transition-colors hover:text-blue-700"
              href="mailto:studio@precisionlabs.auto"
              aria-label="Email"
            >
              <Envelope className="h-6 w-6" weight="duotone" aria-hidden />
            </Link>
            <Link
              className="cursor-pointer text-slate-400 transition-colors hover:text-blue-700"
              href="tel:+15555550100"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" weight="duotone" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-slate-200/50 border-t bg-slate-100 py-8">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-8 md:flex-row">
          <div className="font-sans text-sm text-slate-500 uppercase tracking-widest">
            © 2026 PRECISION LABS AUTOMOTIVE. ENGINEERED FOR PERFECTION.
          </div>
        </div>
      </div>
    </footer>
  );
}
