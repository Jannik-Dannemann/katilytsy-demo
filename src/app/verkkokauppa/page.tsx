import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/content";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Verkkokauppa",
  description:
    "Osta treenit, pienryhmävalmennus, etävalmennus ja johtajavalmennus. Maksutapoina MobilePay, liikuntaedut, lasku ja Klarna.",
  alternates: { canonical: "/verkkokauppa" },
};

const payments = [
  { title: "MobilePay", text: "Personal trainer Kati Lytsy · #26408" },
  { title: "Liikuntaedut", text: "Hae nimellä Personal trainer Kati Lytsy." },
  { title: "Klarna", text: "Maksa osissa tai myöhemmin." },
  { title: "Lasku", text: "Sovitaan erikseen tilauksen yhteydessä." },
];

export default function VerkkokauppaPage() {
  const treenit = PRODUCTS.filter((product) => product.category === "Treenit");
  const valmennus = PRODUCTS.filter((product) => product.category === "Valmennus");

  return (
    <>
      <PageHero
        title={
          <>
            Verkkokauppa<span className="text-ember">.</span>
          </>
        }
        intro="Treenit, pienryhmävalmennus ja pidemmät kokonaisuudet. Valitse sinulle sopiva – tai kysy rohkeasti, jos et osaa päättää."
        image="/images/blog-gym.jpg"
        alt="Kati Lytsy kuntosalilla"
        ctaLabel="Siirry kassalle"
        ctaHref="/verkkokauppa/kassa"
        secondaryLabel="Kysy lisää"
        secondaryHref="/yhteystiedot"
        imagePosition="50% 35%"
      />

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-2" data-reveal>
              Treenit.
            </h2>
            <p className="max-w-sm text-sm text-muted sm:pb-1" data-reveal>
              Yksittäiset treenit ja paketit. Hyvä tapa kokeilla tai ostaa lahjaksi.
            </p>
          </div>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4" data-reveal-group>
            {treenit.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-2" data-reveal>
              Valmennus.
            </h2>
            <p className="max-w-sm text-sm text-muted sm:pb-1" data-reveal>
              Pidemmät kokonaisuudet, joissa ohjelmat, seuranta ja tuki kulkevat mukana.
            </p>
          </div>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4" data-reveal-group>
            {valmennus.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-page py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="display-2 max-w-md">
                Maksaminen on <span className="accent text-cream/75">helppoa.</span>
              </h2>
              <p className="mt-5 max-w-md text-cream/65">
                Hinnat sisältävät ALV 25,5 %. Tilauksen jälkeen Kati vahvistaa
                maksutavan ja sopii kanssasi yksityiskohdat sähköpostitse.
              </p>
              <Link href="/verkkokauppa/kassa" className="btn btn-light mt-7">
                Siirry kassalle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {payments.map((payment) => (
                <div key={payment.title} className="border-t border-cream/20 pt-4">
                  <p className="font-display text-lg font-semibold">{payment.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{payment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div data-reveal>
              <h2 className="display-3 max-w-lg">Onko sinulla muu lahjaidea mielessä?</h2>
              <p className="mt-4 max-w-lg text-muted">
                Treenipaketit ja valmennukset voi ostaa lahjaksi. Kerro toiveesi,
                niin rakennetaan sopiva kokonaisuus.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="/yhteystiedot" className="btn btn-dark">
                Ota yhteyttä
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/valmennus" className="btn btn-outline">
                Tutustu valmennuksiin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
