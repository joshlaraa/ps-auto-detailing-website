"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  List,
  XCircle,
} from "@phosphor-icons/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/products", label: "Products" },
] as const;

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active =
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative px-1 py-2 font-sans text-xs font-bold tracking-[0.2em] text-slate-600 uppercase transition-colors hover:text-slate-900"
    >
      <motion.span
        className="relative z-10 inline-block"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 500, damping: 26 }}
      >
        {label}
      </motion.span>
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden rounded-full bg-slate-200"
        aria-hidden
      >
        <span className="block h-full w-full origin-left scale-x-0 bg-blue-800/35 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
      {active ? (
        <motion.span
          layoutId="nav-main-underline"
          className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-800"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-slate-200/80 border-b bg-slate-50/90 backdrop-blur-md">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
        className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-6 py-4 md:px-10"
      >
        <Link
          href="/"
          className="shrink-0 font-sans text-sm font-black tracking-[0.15em] text-slate-900 uppercase"
        >
          Precision Labs
        </Link>

        <LayoutGroup id="primary-nav">
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
        </LayoutGroup>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden cursor-pointer rounded-full bg-blue-800 px-5 py-2.5 font-sans text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
          >
            Book
          </Link>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <XCircle className="h-6 w-6" weight="duotone" aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <List className="h-6 w-6" weight="duotone" aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.button
            key="mobile-nav-backdrop"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 cursor-pointer bg-slate-900/40 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {open ? (
            <motion.div
              key="mobile-nav-panel"
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, scale: 0.88, y: -36, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20, rotate: -2 }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              style={{ transformOrigin: "100% 0%" }}
              className="fixed top-17 right-4 z-50 w-[min(calc(100vw-2rem),20rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 * i,
                      type: "spring",
                      stiffness: 400,
                      damping: 28,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block cursor-pointer rounded-xl px-4 py-3 font-sans text-xs font-bold tracking-[0.2em] text-slate-700 uppercase transition-colors hover:bg-slate-50 hover:text-blue-800"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="mt-2 border-slate-100 border-t pt-3"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer rounded-xl bg-blue-800 py-3 text-center font-sans text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase"
                  >
                    Book
                  </Link>
                </motion.div>
              </div>
            </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
