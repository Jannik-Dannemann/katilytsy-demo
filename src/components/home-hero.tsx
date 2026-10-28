"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SITE } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export function HomeHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        q(".hero-media"),
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.15, ease: "power4.inOut" },
        0,
      )
        .fromTo(
          q(".hero-media img"),
          { scale: 1.08 },
          { scale: 1, duration: 1.5, ease: "power3.out" },
          0.05,
        )
        .fromTo(
          q(".line-inner"),
          { yPercent: 112 },
          { yPercent: 0, duration: 1.05, stagger: 0.09, ease: "power4.out" },
          0.18,
        )
        .fromTo(
          q(".hero-fade"),
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.09 },
          0.55,
        )
        .fromTo(q(".hero-caption"), { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.1);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden pb-10 pt-6 sm:pt-10 lg:pb-16 lg:pt-14">
      <div className="container-page">
        <div className="grid items-end gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <h1 className="hero-title font-display font-semibold">
              <span className="line-mask">
                <span className="line-inner">Suomen energisin</span>
              </span>
              <span className="line-mask">
                <span className="line-inner">yritysten</span>
              </span>
              <span className="line-mask">
                <span className="line-inner">
                  <span className="accent text-ember">liikuttaja.</span>
                </span>
              </span>
            </h1>

            <p className="hero-fade mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted sm:text-lg">
              Autan kiireisiä yrittäjiä pääsemään elämänsä kuntoon – niin että työ,
              perhe ja oma jaksaminen pysyvät mukana.
            </p>

            <div className="hero-fade mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Varaa maksuton kartoitus
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#valmennus" className="btn btn-outline">
                Tutustu valmennuksiin
              </Link>
            </div>

            <p className="hero-fade mt-6 flex items-center gap-3 text-sm text-muted">
              <span className="h-px w-8 bg-ink/25" />
              30 minuutin kartoituspuhelu – veloitukseton, ilman sitoutumista.
            </p>
          </div>

          <div>
            <div className="hero-media relative aspect-[4/5] overflow-hidden bg-stone sm:aspect-[5/5.6] lg:aspect-[4/5]">
              <Image
                src="/images/hero.jpg"
                alt="Kati Lytsy harjoittelemassa battle ropeilla kuntosalilla"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-[50%_32%]"
              />
            </div>
            <div className="hero-caption mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-muted">
              <span>Voimalaitos Merihaka</span>
              <span>Helsinki</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-12 hidden justify-end lg:flex">
        <a
          href="#valmennus"
          className="link-arrow text-xs uppercase tracking-[0.18em] text-muted"
          aria-label="Vieritä valmennuksiin"
        >
          Valmennukset
          <ArrowUpRight className="h-3.5 w-3.5 rotate-90" />
        </a>
      </div>
    </section>
  );
}
