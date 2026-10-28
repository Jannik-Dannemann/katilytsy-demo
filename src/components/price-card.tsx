import Link from "next/link";
import { Check } from "@/components/icons";
import { SITE } from "@/lib/content";

type PriceCardProps = {
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PriceCard({
  title,
  price,
  unit,
  description,
  features,
  featured = false,
  ctaLabel = "Varaa kartoitus",
  ctaHref = SITE.calendly,
}: PriceCardProps) {
  return (
    <div
      className={`flex flex-col border p-6 sm:p-7 ${
        featured ? "border-ink bg-ink text-cream" : "border-line bg-cream"
      }`}
      data-reveal-item
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className={`display-4 max-w-[16rem] ${featured ? "text-cream" : ""}`}>{title}</h3>
        {featured && (
          <span className="shrink-0 rounded-full bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink">
            Suosituin
          </span>
        )}
      </div>
      <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-cream/60" : "text-muted"}`}>
        {description}
      </p>
      <p className="mt-6 flex items-baseline gap-1.5">
        <span className="display-2">{price}</span>
        <span className={`text-sm ${featured ? "text-cream/55" : "text-muted"}`}>{unit}</span>
      </p>
      <ul className={`mt-6 flex-1 space-y-2.5 text-sm ${featured ? "text-cream/80" : ""}`}>
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-cream" : "text-ember"}`} />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        target={ctaHref.startsWith("http") ? "_blank" : undefined}
        rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`btn mt-7 w-full ${featured ? "btn-light" : "btn-dark"}`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
