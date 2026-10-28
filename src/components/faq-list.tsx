import type { Faq } from "@/lib/content";
import { Plus } from "@/components/icons";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t border-line">
      {faqs.map((faq) => (
        <details key={faq.q} className="faq group border-b border-line py-5 sm:py-6">
          <summary className="flex cursor-pointer items-start justify-between gap-6">
            <span className="font-display text-base font-medium leading-snug tracking-[-0.02em] sm:text-lg">
              {faq.q}
            </span>
            <span className="faq-plus mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="mt-4 max-w-2xl pr-10 text-[0.95rem] leading-relaxed text-muted">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
