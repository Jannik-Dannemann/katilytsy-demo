import Link from "next/link";
import { SITE } from "@/lib/content";
import { ArrowRight } from "@/components/icons";

type CtaBandProps = {
  title: React.ReactNode;
  text?: string;
  label?: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title,
  text,
  label = "Varaa maksuton kartoitus",
  href = SITE.calendly,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="bg-ink text-cream">
      <div className="container-page py-16 lg:py-24">
        <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl" data-reveal>
            <p className="display-2">{title}</p>
            {text && <p className="mt-5 max-w-xl text-cream/65">{text}</p>}
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row" data-reveal data-reveal-delay="0.1">
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn btn-light"
            >
              {label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="btn btn-outline-light">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
