import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh">{children}</main>
      <SiteFooter />
    </>
  );
}
