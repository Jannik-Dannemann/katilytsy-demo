"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { NAV, SITE } from "@/lib/content";
import { CartButton } from "@/components/cart-provider";
import {
  ArrowUpRight,
  Close,
  Facebook,
  Instagram,
  LinkedIn,
  Menu,
} from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const overlay = menuRef.current;
    if (!overlay) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(overlay, { display: "block" });
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: reduced ? 0 : 0.3, ease: "power2.out" },
      );
      if (menuLinksRef.current) {
        gsap.fromTo(
          menuLinksRef.current.children,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: reduced ? 0 : 0.55,
            stagger: reduced ? 0 : 0.05,
            ease: "power3.out",
            delay: reduced ? 0 : 0.08,
          },
        );
      }
    } else {
      document.body.style.overflow = "";
      gsap.to(overlay, {
        opacity: 0,
        duration: reduced ? 0 : 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(overlay, { display: "none" }),
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="site-header sticky top-0 z-50" data-scrolled={scrolled}>
        <div className="container-page flex h-[72px] items-center justify-between gap-3 lg:h-[88px]">
          <Link href="/" className="group flex shrink-0 flex-col" aria-label="Kati Lytsy, etusivu">
            <span className="font-display text-[15px] font-semibold uppercase leading-none tracking-[0.16em] sm:text-base">
              Kati Lytsy
            </span>
            <span className="mt-1.5 text-[9px] uppercase leading-none tracking-[0.28em] text-muted">
              Personal trainer
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Päävalikko">
            {NAV.map((item) =>
              "children" in item ? (
                <div key={item.href} className="nav-dropdown relative">
                  <Link
                    href={item.href}
                    className="flex h-11 items-center rounded-full px-3.5 text-sm font-medium transition-colors hover:bg-ink/5"
                  >
                    {item.label}
                  </Link>
                  <div className="nav-panel absolute left-0 top-full pt-3">
                    <div className="w-[19rem] border border-line bg-cream p-2 shadow-[0_18px_40px_-24px_rgba(18,18,15,0.35)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group flex items-start justify-between gap-4 p-3 transition-colors hover:bg-stone/70"
                        >
                          <span>
                            <span className="block text-sm font-semibold">{child.label}</span>
                            <span className="mt-0.5 block text-xs text-muted">
                              {child.description}
                            </span>
                          </span>
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex h-11 items-center rounded-full px-3.5 text-sm font-medium transition-colors hover:bg-ink/5 ${
                    pathname === item.href ? "bg-ink/5" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <CartButton />
            <Link
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark hidden h-11 min-h-11 px-5 text-sm md:inline-flex"
            >
              Varaa kartoitus
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-ink/5 lg:hidden"
              aria-label="Avaa valikko"
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 z-[60] hidden bg-ink text-cream lg:!hidden"
        style={{ display: "none" }}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="container-page flex h-[72px] items-center justify-between">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex flex-col">
              <span className="font-display text-[15px] font-semibold uppercase leading-none tracking-[0.16em]">
                Kati Lytsy
              </span>
              <span className="mt-1.5 text-[9px] uppercase leading-none tracking-[0.28em] text-cream/55">
                Personal trainer
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-ink"
              aria-label="Sulje valikko"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <div ref={menuLinksRef} className="container-page flex-1 pt-6">
            <nav className="flex flex-col" aria-label="Mobiilivalikko">
              {NAV.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between border-b border-cream/15 py-4 font-display text-[2rem] font-medium leading-none tracking-[-0.04em] transition-colors hover:text-cream/65 sm:text-[2.4rem]"
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 opacity-45" />
                  </Link>
                  {"children" in item && (
                    <div className="border-b border-cream/15 pb-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 py-2 pl-4 text-sm text-cream/65 transition-colors hover:text-cream"
                        >
                          <span className="h-px w-4 bg-cream/30" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-4 pb-10 sm:flex-row sm:items-center">
              <Link
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light w-full sm:w-auto"
              >
                Varaa maksuton kartoitus
              </Link>
              <a href={`mailto:${SITE.email}`} className="link-arrow text-sm text-cream/80">
                {SITE.email}
              </a>
            </div>

            <div className="flex items-center justify-between border-t border-cream/15 py-5 text-xs text-cream/55">
              <span>Helsinki · Vantaa · Etänä</span>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-cream"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition-colors hover:text-cream"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-cream"
                >
                  <LinkedIn className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
