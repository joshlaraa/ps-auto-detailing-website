import Link from "next/link";
import { Envelope, Globe, Phone } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { siteContact } from "@/lib/site/contact";

const footerLinkClass = cn(
  "cursor-pointer text-slate-500 underline-offset-4 transition-colors duration-200 hover:text-brand hover:underline",
);

const iconLinkClass =
  "cursor-pointer text-slate-400 transition-colors duration-200 hover:text-brand";

export function SiteFooter() {
  return (
    <footer className="w-full border-slate-200/50 border-t bg-background">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div className="group">
          <div className="mb-6 inline-block font-clash text-xl leading-[0.9] font-bold tracking-tighter text-foreground uppercase transition-transform duration-200 ease-out group-hover:scale-[1.02]">
            JP AUTO DETAIL
          </div>
          <p className="max-w-xs text-sm font-medium text-slate-500 leading-relaxed">
            Specialized in exotic and luxury vehicle restoration. Operating
            globally with a focus on surgical excellence.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-sans text-xs font-bold text-foreground uppercase tracking-widest">
            Services
          </p>
          <ul className="space-y-3 font-sans text-sm font-medium uppercase tracking-widest">
            <li>
              <Link className={footerLinkClass} href="/services">
                Ceramic Coating
              </Link>
            </li>
            <li>
              <Link className={footerLinkClass} href="/services">
                Paint Correction
              </Link>
            </li>
            <li>
              <Link className={footerLinkClass} href="/services">
                Interior Detail
              </Link>
            </li>
            <li>
              <Link className={footerLinkClass} href="/products">
                PPF
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-sans text-xs font-bold text-foreground uppercase tracking-widest">
            Legal
          </p>
          <ul className="space-y-3 font-sans text-sm font-medium uppercase tracking-widest">
            <li>
              <Link className={footerLinkClass} href="/contact">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={footerLinkClass} href="/contact">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <p className="font-sans text-xs font-bold text-foreground uppercase tracking-widest">
            Connect
          </p>
          <div className="flex gap-6">
            <Link
              className={iconLinkClass}
              href="/"
              aria-label="Website"
            >
              <Globe className="h-6 w-6" weight="duotone" aria-hidden />
            </Link>
            <a className={iconLinkClass} href={siteContact.emailHref} aria-label="Email">
              <Envelope className="h-6 w-6" weight="duotone" aria-hidden />
            </a>
            <a className={iconLinkClass} href={siteContact.phoneHref} aria-label="Phone">
              <Phone className="h-6 w-6" weight="duotone" aria-hidden />
            </a>
          </div>
        </div>
      </Container>
      <div className="border-slate-200/50 border-t bg-slate-100 py-8">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-sans text-sm text-slate-500 uppercase tracking-widest">
            © 2026{" "}
            <span className="font-clash leading-[0.9] font-bold tracking-tighter text-slate-600">
              JP AUTO DETAIL
            </span>{" "}
            AUTOMOTIVE. ENGINEERED FOR PERFECTION.
          </div>
        </Container>
      </div>
    </footer>
  );
}
