import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { NewsletterForm } from "@/components/newsletter-form";
import { POSTS } from "@/lib/content";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Uutiskirje",
  description:
    "Liity hyvinvoinnin sisäpiiriin ja saat maksuttoman välipalaoppaan. Uusia vinkkejä, palveluita ja sisäpiirin etuja.",
  alternates: { canonical: "/uutiskirje" },
};

const benefits = [
  "Maksuton välipalaopas: helppoja ja proteiinipitoisia välipaloja viikon jokaiselle päivälle.",
  "Ensimmäisenä tieto uusista palveluista, treeneistä ja tapahtumista.",
  "Sisäpiirin edut, joita ei löydy muualta.",
  "Käytännön vinkkejä liikuntaan, ruokaan ja palautumiseen – ilman suorittamista.",
];

export default function UutiskirjePage() {
  return (
    <>
      <PageHero
        title={
          <>
            Liity hyvinvoinnin <span className="accent text-ember">sisäpiiriin.</span>
          </>
        }
        intro="Saat maksuttoman välipalaoppaan, jossa on herkullisia ja helppoja proteiinipitoisia välipaloja viikon jokaiselle päivälle."
        image="/images/newsletter-guide.jpg"
        alt="Välipalaopas ja proteiinipitoisia välipaloja"
        ctaLabel="Liity mukaan"
        ctaHref="#liity"
        secondaryLabel="Lue blogia"
        secondaryHref="/blogi"
        imagePosition="50% 0%"
      />

      <section id="liity" className="scroll-mt-24 border-t border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-lg">
              Oletko valmis voimaan <span className="accent">hyvin?</span>
            </h2>
            <p className="mt-5 max-w-lg text-muted">
              Sisäpiirin jäsenenä kuulet ensimmäisenä uusista tuotteista,
              palveluista ja tapahtumista. Tämän lisäksi saat etuja, jotka on
              tarkoitettu vain sisäpiiriläisille.
            </p>
            <ul className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 border-t border-line pt-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 max-w-md">
              <NewsletterForm />
            </div>
            <p className="mt-4 text-xs text-muted">
              Tietosi on 100 % suojattu. Voit perua tilauksen milloin tahansa.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2" data-reveal data-reveal-delay="0.08">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone sm:mt-10">
              <Image
                src="/images/newsletter-guide.jpg"
                alt="Välipalaopas"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <Image
                src="/images/about-1.jpg"
                alt="Kati Lytsy juoksemassa portaita"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-2" data-reveal>
              Sillä välin, lue nämä.
            </h2>
            <Link href="/blogi" className="link-arrow text-sm">
              Kaikki kirjoitukset
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blogi/${post.slug}`} className="group block">
                <div className="media-zoom relative aspect-[4/3] bg-stone">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted">{post.date}</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-tight tracking-[-0.03em]">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
