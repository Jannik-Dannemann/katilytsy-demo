import Image from "next/image";
import Link from "next/link";
import { Parallax } from "@/components/parallax";
import { ArrowRight } from "@/components/icons";
import { SITE } from "@/lib/content";

type PageHeroProps = {
  title: React.ReactNode;
  intro: string;
  image: string;
  alt: string;
  tone?: "light" | "dark";
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imagePosition?: string;
};

export function PageHero({
  title,
  intro,
  image,
  alt,
  tone = "light",
  ctaLabel = "Varaa maksuton kartoitus",
  ctaHref = SITE.calendly,
  secondaryLabel,
  secondaryHref,
  imagePosition = "50% 35%",
}: PageHeroProps) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "bg-ink text-cream" : "bg-paper"}>
      <div className="container-page grid gap-8 pb-10 pt-6 sm:pt-9 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-14 lg:pb-16 lg:pt-14">
        <div className="flex flex-col justify-end">
          <h1 className="page-title font-display font-semibold">{title}</h1>
          <p
            className={`mt-6 max-w-xl text-[1.05rem] leading-relaxed sm:text-lg ${
              dark ? "text-cream/65" : "text-muted"
            }`}
          >
            {intro}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`btn ${dark ? "btn-light" : "btn-dark"}`}
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={`btn ${dark ? "btn-outline-light" : "btn-outline"}`}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>

        <Parallax className="aspect-[4/5] bg-stone sm:aspect-[5/5.6] lg:aspect-[4/5]">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </Parallax>
      </div>
    </section>
  );
}
