"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { subscribeNewsletter } from "@/app/actions";
import { initialFormState } from "@/lib/form";
import { ArrowRight } from "@/components/icons";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="w-full">
      <div className={compact ? "flex flex-col gap-3 sm:flex-row" : "space-y-3"}>
        <div className={compact ? "flex-1" : ""}>
          <label htmlFor={compact ? "newsletter-email-compact" : "newsletter-email"} className="sr-only">
            Sähköpostiosoite
          </label>
          <input
            id={compact ? "newsletter-email-compact" : "newsletter-email"}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field h-12"
            placeholder="Sähköpostiosoitteesi"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="btn btn-dark h-12 min-h-12 shrink-0 disabled:opacity-60"
        >
          {pending ? "Liitytään…" : "Liity mukaan"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <label className="mt-3 flex items-start gap-2.5 text-[11px] leading-relaxed text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-ink"
        />
        <span>
          Hyväksyn tietojeni käsittelyn markkinointia varten.{" "}
          <Link href="/tietosuoja" className="underline underline-offset-2 hover:text-ink">
            Tietosuoja
          </Link>
          .
        </span>
      </label>
      {state.status !== "idle" && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-3 text-sm ${state.status === "success" ? "text-ink" : "text-ember"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
