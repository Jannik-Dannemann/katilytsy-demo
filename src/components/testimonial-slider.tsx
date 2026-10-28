"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { Testimonial } from "@/lib/content";
import { ArrowRight } from "@/components/icons";

type TestimonialSliderProps = {
  testimonials: Testimonial[];
  title?: string;
};

export function TestimonialSlider({
  testimonials,
  title = "Tuloksia, joita ei tarvitse arvailla.",
}: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const current = testimonials[index];

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
      );
    }
  }, [index]);

  const next = () => setIndex((value) => (value + 1) % testimonials.length);
  const prev = () =>
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-paper">
      <div className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div data-reveal>
            <h2 className="display-2 max-w-md">{title}</h2>
            <p className="mt-5 max-w-sm text-muted">
              Oikeita asiakkaita, oikeita muutoksia. Ei pikadieettejä eikä
              suorittamista – vaan arkeen mahtuvia tapoja voida paremmin.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
                aria-label="Edellinen asiakaspalaute"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
                aria-label="Seuraava asiakaspalaute"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="ml-2 text-xs uppercase tracking-[0.14em] text-muted">
                {index + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1fr_0.62fr] sm:items-end">
            <div ref={quoteRef}>
              <blockquote className="font-display text-[clamp(1.35rem,2.3vw,2rem)] font-medium leading-[1.3] tracking-[-0.03em]">
                “{current.quote}”
              </blockquote>
              <div className="mt-7 border-t border-line pt-4">
                <p className="font-semibold">{current.name}</p>
                {current.company && <p className="mt-0.5 text-sm text-muted">{current.company}</p>}
              </div>
            </div>

            <div
              ref={imageRef}
              className="relative hidden aspect-[3/4] overflow-hidden bg-ink sm:block"
            >
              {current.image ? (
                <Image
                  src={current.image}
                  alt={`Asiakas ${current.name}`}
                  fill
                  sizes="(max-width: 1024px) 30vw, 18vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col justify-between p-5 text-cream">
                  <span className="accent text-6xl leading-none text-cream/40">”</span>
                  <div>
                    <p className="font-display text-lg leading-tight">Kati Lytsy</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/50">
                      Personal trainer
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
