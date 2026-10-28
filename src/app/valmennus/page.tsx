import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PriceCard } from "@/components/price-card";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { GENERAL_FAQS, SERVICES, TESTIMONIALS } from "@/lib/content";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Valmennus",
  description:
    "Johtajavalmennus, etävalmennus ja Lytsyn löylyt -pienryhmävalmennus. Henkilökohtaista valmennusta Helsingissä, Vantaalla ja etänä.",
  alternates: { canonical: "/valmennus" },
};

const shared = [
  {
    title: "Yksilöllinen ohjelma",
    text: "Treenit rakennetaan sinun lähtötasosi, tavoitteidesi ja arkesi ehdoilla – ei valmiin sabluunan mukaan.",
  },
  {
    title: "Seuranta, joka pitää sinut kartalla",
    text: "Trainero-sovellus näyttää treenipainot, kehityksen ja viikkoraportit. Reagoimme ajoissa, jos suunta ei ole oikea.",
  },
  {
    title: "Tuki myös vaikeina viikkoina",
    text: "Kun arki kiristyy, suunnitelmaa muutetaan – ei luovuteta. Olen tukenasi koko matkan ajan.",
  },
];

const process = [
  {
    title: "Kartoitus",
    text: "Käymme läpi tilanteesi, tavoitteesi ja sen, mikä on realistisesti mahdollista juuri nyt.",
  },
  {
    title: "Lähtötaso",
    text: "Liikkuvuus, kehonkoostumus ja tarvittaessa Firstbeat-mittaus. Näemme, mistä lähdetään liikkeelle.",
  },
  {
    title: "Ohjelma",
    text: "Saat sinulle rakennetun treeni- ja ravintosuunnitelman, joka sopii arkeesi myös kiireisellä viikolla.",
  },
  {
    title: "Seuranta",
    text: "Viikoittainen yhteydenpito ja tapaamiset pitävät huolen siitä, että kehitys jatkuu – turvallisesti.",
  },
];

export default function ValmennusPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Valmennusta, joka mahtuu <span className="accent text-ember">sun arkeen.</span>
          </>
        }
        intro="Kolme erilaista tapaa treenata kanssani. Kaikissa yhteistä on yksilöllinen ohjelma, säännöllinen seuranta ja se, ettei sinua jätetä yksin."
        image="/images/service-pt.jpg"
        alt="Kati Lytsy ohjaamassa henkilökohtaista treeniä"
        secondaryLabel="Kysy lisää"
        secondaryHref="/yhteystiedot"
      />

      <section className="border-t border-line">
        <div className="container-page py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="display-2 max-w-md" data-reveal>
              Valitse se, joka sopii <span className="accent">juuri nyt.</span>
            </h2>
            <div className="space-y-5 text-[1.02rem] leading-relaxed text-muted" data-reveal data-reveal-delay="0.08">
              <p>
                Johtajavalmennus on intensiivisin vaihtoehto johtajalle tai
                yrittäjälle, joka haluaa palautua paremmin ja löytää energiaa
                työn rinnalle. Etävalmennus tuo saman ohjelmoinnin ja tuen
                puhelimeesi asuitpa missä tahansa.
              </p>
              <p>
                Lytsyn löylyt on pienryhmä niille, jotka kaipaavat seuraa,
                tsemppiä ja tekniikoita kuntoon. Kaikkiin voi yhdistää
                yksittäisiä lähitapaamisia.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3" data-reveal-group>
            {SERVICES.map((service) => (
              <Link key={service.href} href={service.href} className="group block" data-reveal-item>
                <div className="media-zoom relative aspect-[4/5] bg-stone">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="card-title">{service.title}</h3>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{service.blurb}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">{service.meta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div data-reveal>
              <h2 className="display-2 max-w-md">Kaikissa yhteistä.</h2>
              <p className="mt-5 max-w-sm text-muted">
                Riippumatta siitä, treenaatko salilla, kotona vai ryhmässä,
                perusta on aina sama.
              </p>
            </div>
            <div className="space-y-6" data-reveal data-reveal-delay="0.08">
              {shared.map((item) => (
                <div key={item.title} className="flex gap-4 border-t border-line pt-5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-ember" />
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display-2 max-w-xl" data-reveal>
              Näin matka etenee.
            </h2>
            <p className="max-w-sm text-muted lg:pb-1" data-reveal>
              Ei kiirettä, ei oikoteitä – vaan selkeät askelmerkit alusta loppuun.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4" data-reveal-group>
            {process.map((step) => (
              <div key={step.title} className="border-t border-line pt-5" data-reveal-item>
                <span className="block h-px w-8 bg-ink/25" />
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider testimonials={TESTIMONIALS} title="Miltä matka näyttää asiakkaiden silmin?" />

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div data-reveal>
              <h2 className="display-2 max-w-md">Hinnat ja seuraava askel.</h2>
              <p className="mt-5 max-w-sm text-muted">
                Kaikki hinnat sisältävät ALV 25,5 %. Maksutapoina lasku,
                MobilePay, liikuntaedut ja Klarna.
              </p>
              <Link href="/verkkokauppa" className="link-arrow mt-6 text-sm">
                Katso verkkokauppa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2" data-reveal-group>
              <PriceCard
                title="Etävalmennus"
                price="150 €"
                unit="/ kk"
                description="Ohjelmat, ravintovalmennus ja viikoittainen seuranta. Minimiaika 3 kk."
                features={["Yksilölliset treeniohjelmat", "Ravintovalmennus", "Trainero-seuranta", "30 min etätapaaminen"]}
                ctaHref="/etavalmennus"
                ctaLabel="Lue lisää"
              />
              <PriceCard
                title="Johtajavalmennus"
                price="1 440 €"
                unit="/ 3 kk"
                description="Avaimet käteen -kokonaisuus johtajalle tai yrittäjälle."
                features={["12 lähitapaamista", "Ruokavalio ja reseptit", "Harjoitusohjelmat", "Viikoittainen seuranta"]}
                ctaHref="/johtajavalmennus"
                ctaLabel="Lue lisää"
                featured
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="display-2 max-w-sm" data-reveal>
              Usein kysytyt kysymykset.
            </h2>
            <div data-reveal data-reveal-delay="0.08">
              <FaqList faqs={GENERAL_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Etkö tiedä, mikä valmennus <span className="accent text-cream/75">sopisi sinulle?</span>
          </>
        }
        text="Varaa maksuton 30 minuutin kartoituspuhelu. Käydään tilanteesi läpi ja mietitään yhdessä seuraava askel – ilman sitoutumista."
        secondaryLabel="Lähetä viesti"
        secondaryHref="/yhteystiedot"
      />
    </>
  );
}
