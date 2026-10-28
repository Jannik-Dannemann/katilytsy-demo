"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tweens: gsap.core.Tween[] = [];
    const groups: gsap.core.Tween[] = [];

    const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    elements.forEach((element) => {
      const delay = Number(element.dataset.revealDelay ?? 0);
      const y = Number(element.dataset.revealY ?? 26);
      tweens.push(
        gsap.fromTo(
          element,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        ),
      );
    });

    const revealGroups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]");
    revealGroups.forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
      if (items.length === 0) return;
      groups.push(
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              once: true,
            },
          },
        ),
      );
    });

    const raf = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(raf);
      [...tweens, ...groups].forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, [pathname]);

  return null;
}
