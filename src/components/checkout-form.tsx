"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { startStripeCheckout } from "@/app/actions";
import { useCart } from "@/components/cart-provider";
import { initialFormState } from "@/lib/form";
import { formatPrice } from "@/lib/format";
import { ArrowRight } from "@/components/icons";

export function CheckoutForm() {
  const { lines, subtotal } = useCart();
  const [state, formAction, pending] = useActionState(startStripeCheckout, initialFormState);

  if (lines.length === 0) {
    return (
      <div className="border border-line bg-cream p-8 sm:p-10">
        <h2 className="display-3">Ostoskori on tyhjä.</h2>
        <p className="mt-3 max-w-md text-muted">
          Selaa verkkokauppaa ja valitse sinulle sopiva treeni tai valmennus.
        </p>
        <Link href="/verkkokauppa" className="btn btn-dark mt-6">
          Siirry verkkokauppaan
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const items = JSON.stringify(lines.map(({ product, qty }) => ({ id: product.id, qty })));

  return (
    <form action={formAction} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <input type="hidden" name="items" value={items} />
      <div className="space-y-6">
        <div>
          <h2 className="display-3">Maksu</h2>
          <p className="mt-2 text-sm text-muted">
            Siirry turvalliseen Stripe-maksuun. Stripe kerää nimen, sähköpostin ja
            maksutiedot, ja Kati saa tilauksen tiedot sähköpostitse.
          </p>
        </div>

        <div>
          <label htmlFor="order-notes" className="field-label">
            Lisätiedot (valinnainen)
          </label>
          <textarea
            id="order-notes"
            name="notes"
            rows={3}
            className="field resize-y"
            placeholder="Toiveita aikataulusta, lahjasta tai muusta?"
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
            Hyväksyn tietojeni käsittelyn tilauksen hoitamista varten. Lue{" "}
            <Link href="/tietosuoja" className="underline underline-offset-2 hover:text-ink">
              tietosuojaseloste
            </Link>
            .
          </span>
        </label>

        {state.status === "error" && (
          <p role="alert" className="text-sm text-ember">
            {state.message}
          </p>
        )}

        <button type="submit" disabled={pending} className="btn btn-dark w-full disabled:opacity-60">
          {pending ? "Valmistellaan maksua…" : "Siirry maksamaan"}
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-xs leading-relaxed text-muted">
          Maksu tapahtuu Stripejen kautta kortilla tai lompakolla. Muut maksutavat
          (MobilePay, lasku, liikuntaetu) hoituvat ottamalla yhteyttä Katiin.
        </p>
      </div>

      <aside className="h-fit border border-line bg-cream p-6 sm:p-7">
        <h2 className="display-4">Tilauksesi</h2>
        <ul className="mt-5 divide-y divide-line">
          {lines.map(({ product, qty }) => (
            <li key={product.id} className="flex gap-4 py-4 first:pt-0">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-stone">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold leading-snug">{product.name}</p>
                  <p className="mt-1 text-xs text-muted">{qty} kpl</p>
                </div>
                <p className="text-sm font-semibold">{formatPrice(product.price * qty)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex items-baseline justify-between border-t border-line pt-4">
          <span className="text-sm text-muted">Yhteensä</span>
          <span className="display-3">{formatPrice(subtotal)}</span>
        </div>
        <p className="mt-2 text-xs text-muted">Hinnat sisältävät ALV 25,5 %.</p>
        <div className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-muted">
          <p>Liikuntaedulla maksaessa hae nimellä Personal trainer Kati Lytsy.</p>
        </div>
      </aside>
    </form>
  );
}
