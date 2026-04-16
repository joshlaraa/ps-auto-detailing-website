"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { List, X } from "@phosphor-icons/react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/products", label: "Products" },
] as const;

const DRAWER_WIDTH = 300;

const scrimVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const;

const drawerVariants = {
  hidden: { x: DRAWER_WIDTH },
  visible: { x: 0 },
} as const;

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 40,
  mass: 0.8,
};

const mobileMenuIconButtonClassName =
  "relative inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-800 transition-colors duration-200 active:bg-slate-50";

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
  const active = href === "/" ? pathname === "/" : pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative px-1 py-2 font-sans text-xs font-bold tracking-[0.2em] text-slate-600 uppercase transition-colors duration-200 hover:text-foreground"
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
        <span className="block h-full w-full origin-left scale-x-0 bg-brand/35 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
      {active ? (
        <motion.span
          layoutId="nav-main-underline"
          className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`flex items-center gap-3 rounded-xl px-4 py-3.5 font-sans text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-colors duration-200 ${
        active
          ? "bg-brand/[0.06] text-brand"
          : "text-slate-600 active:bg-slate-100"
      }`}
    >
      {active && <span className="h-1 w-1 shrink-0 rounded-full bg-brand" />}
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const close = useCallback(() => setOpen(false), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 8;
    setIsScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    const id = requestAnimationFrame(() => setPortalReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-background/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="shrink-0 font-clash text-2xl leading-[0.9] font-bold tracking-tighter text-foreground uppercase"
        >
          <motion.span
            className="relative inline-block overflow-hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: shouldReduceMotion ? 1 : isScrolled ? 0.94 : 1,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0.18, ease: "easeOut" }
                : {
                    opacity: { duration: 0.32, ease: "easeOut" },
                    y: { duration: 0.45, ease: "easeOut" },
                    scale: { duration: 0.18, ease: "easeOut" },
                  }
            }
          >
            JP AUTO DETAIL
            {!shouldReduceMotion ? (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent"
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "220%", opacity: [0, 0.45, 0] }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
              />
            ) : null}
          </motion.span>
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
          <ButtonLink
            href="/contact"
            variant="headerPill"
            className="hidden md:inline-flex"
          >
            Book
          </ButtonLink>

          <button
            type="button"
            className={`${mobileMenuIconButtonClassName} md:hidden`}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  className="flex"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                  <X className="h-5 w-5" weight="bold" aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  className="flex"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                  <List className="h-5 w-5" weight="bold" aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </Container>

      {portalReady
        ? createPortal(
            <AnimatePresence>
              {open && (
                <div
                  className="fixed inset-0 z-[100] md:hidden"
                  id="mobile-nav-panel"
                >
                  {/* Scrim */}
                  <motion.div
                    variants={scrimVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px]"
                    onClick={close}
                    aria-hidden
                  />

                  <motion.nav
                    ref={drawerRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    variants={drawerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={springTransition}
                    className="absolute inset-y-0 right-0 flex h-full min-h-0 w-[300px] max-w-[calc(100vw-56px)] flex-col border-l border-slate-200/60 bg-white/95 shadow-2xl backdrop-blur-xl"
                    style={{
                      paddingTop: "env(safe-area-inset-top)",
                      paddingBottom: "env(safe-area-inset-bottom)",
                    }}
                  >
                    <div className="flex shrink-0 items-center justify-between px-6 py-4">
                      <Link
                        href="/"
                        onClick={close}
                        className="font-clash text-sm leading-[0.9] font-bold text-foreground tracking-tighter uppercase"
                      >
                        <motion.span
                          className="relative inline-block overflow-hidden"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={
                            shouldReduceMotion
                              ? { duration: 0.18, ease: "easeOut" }
                              : { duration: 0.4, ease: "easeOut" }
                          }
                        >
                          JP AUTO DETAIL
                          {!shouldReduceMotion ? (
                            <motion.span
                              aria-hidden
                              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent"
                              initial={{ x: "-120%", opacity: 0 }}
                              animate={{ x: "220%", opacity: [0, 0.45, 0] }}
                              transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.2,
                              }}
                            />
                          ) : null}
                        </motion.span>
                      </Link>
                      <button
                        type="button"
                        className={mobileMenuIconButtonClassName}
                        aria-label="Close menu"
                        onClick={close}
                      >
                        <X className="h-5 w-5" weight="bold" aria-hidden />
                      </button>
                    </div>

                    <div className="mx-6 h-px shrink-0 bg-slate-100" />

                    <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
                      {navItems.map((item) => {
                        const active =
                          item.href === "/"
                            ? pathname === "/"
                            : pathname === item.href;
                        return (
                          <MobileNavLink
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            active={active}
                            onNavigate={close}
                          />
                        );
                      })}
                    </div>

                    <div className="shrink-0 px-6 pb-6">
                      <ButtonLink
                        href="/contact"
                        variant="mobileDrawer"
                        onClick={close}
                      >
                        Book Now
                      </ButtonLink>
                    </div>
                  </motion.nav>
                </div>
              )}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
