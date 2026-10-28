"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/actions";
import { initialFormState } from "@/lib/form";
import { ArrowRight } from "@/components/icons";

type ContactFormProps = {
  source?: string;
  showCompany?: boolean;
  messageLabel?: string;
  messagePlaceholder?: string;
  buttonLabel?: string;
};

export function ContactForm({
  source = "Yhteydenotto",
  showCompany = false,
  messageLabel = "Viesti",
  messagePlaceholder = "Kerro lyhyesti tilanteestasi ja siitä, mitä toivoisit.",
  buttonLabel = "Lähetä viesti",
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input type="hidden" name="source" value={source} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${source}-name`} className="field-label">
            Nimi *
          </label>
          <input
            id={`${source}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            className="field"
            placeholder="Etunimi Sukunimi"
          />
        </div>
        <div>
          <label htmlFor={`${source}-email`} className="field-label">
            Sähköposti *
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field"
            placeholder="nimi@esimerkki.fi"
          />
        </div>
        <div>
          <label htmlFor={`${source}-phone`} className="field-label">
            Puhelin
          </label>
          <input
            id={`${source}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field"
            placeholder="+358"
          />
        </div>
        {showCompany && (
          <div>
            <label htmlFor={`${source}-company`} className="field-label">
              Yritys
            </label>
            <input
              id={`${source}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              className="field"
              placeholder="Yrityksen nimi"
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor={`${source}-message`} className="field-label">
          {messageLabel} *
        </label>
        <textarea
          id={`${source}-message`}
          name="message"
          required
          rows={4}
          className="field resize-y"
          placeholder={messagePlaceholder}
        />
      </div>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-ink"
        />
        <span>
          Hyväksyn, että tietojani käsitellään yhteydenottoa varten. Lue{" "}
          <Link href="/tietosuoja" className="underline underline-offset-2 hover:text-ink">
            tietosuojaseloste
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" disabled={pending} className="btn btn-dark disabled:opacity-60">
          {pending ? "Lähetetään…" : buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
        {state.status !== "idle" && (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${
              state.status === "success" ? "text-ink" : "text-ember"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
