"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/components/cart-provider";
import { Check } from "@/components/icons";

export function OrderSuccess() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <section className="container-page py-14 lg:py-20">
      <div className="mx-auto max-w-2xl border border-line bg-cream p-7 sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream">
          <Check className="h-5 w-5" />
        </span>
        <h1 className="page-title mt-6 font-display font-semibold">
          Kiitos tilauksesta!
        </h1>
        <p className="mt-4 text-muted">
          Maksu on käsitelty turvallisesti Stripejen kautta. Kati saa tilauksen tiedot
          sähköpostitse ja vahvistaa yksityiskohdat sinulle mahdollisimman pian.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Jos sinulla on kysyttävää tilauksesta, laita viestiä osoitteeseen{" "}
          <a href="mailto:kati@katilytsy.fi" className="underline underline-offset-2">
            kati@katilytsy.fi
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-dark">
            Takaisin etusivulle
          </Link>
          <Link href="/verkkokauppa" className="btn btn-outline">
            Jatka ostoksia
          </Link>
        </div>
      </div>
    </section>
  );
}
