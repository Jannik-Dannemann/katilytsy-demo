import type { Metadata } from "next";
import Link from "next/link";
import { CheckoutForm } from "@/components/checkout-form";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kassa",
  robots: { index: false, follow: false },
};

export default function KassaPage() {
  return (
    <section className="container-page py-10 lg:py-16">
      <Link href="/verkkokauppa" className="link-arrow text-xs uppercase tracking-[0.16em] text-muted">
        <ArrowRight className="h-3.5 w-3.5 rotate-180" />
        Takaisin verkkokauppaan
      </Link>
      <div className="mt-8 max-w-2xl">
        <h1 className="page-title font-display font-semibold">Kassa</h1>
        <p className="mt-5 text-muted">
          Viimeistele tilaus ja siirry turvalliseen Stripe-maksuun. Kati saa tilauksen
          tiedot sähköpostitse ja vahvistaa yksityiskohdat sinulle.
        </p>
      </div>
      <div className="mt-10 lg:mt-14">
        <CheckoutForm />
      </div>
    </section>
  );
}
