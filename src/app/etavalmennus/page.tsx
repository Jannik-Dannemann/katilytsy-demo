import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PriceCard } from "@/components/price-card";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ETA_FAQS, SITE, TESTIMONIALS } from "@/lib/content";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Etävalmennus",
  description:
    "Etävalmennus ohjelmineen, ravintovalmennuksineen ja viikoittaisine seurantoineen. Treenaa salilla, kotona tai missä tahansa – 150 €/kk.",
  alternates: { canonical: "/etavalmennus" },
};

const forYou = [
  "Olet kyllästynyt jatkuvaan väsymykseen ja siihen, ettei tuloksia näy.",
  "Kiire syö oman hyvinvoinnin, ja muutos jää tekemättä vuodesta toiseen.",
  "Treenaat samalla ohjelmalla ja samoilla painoilla, etkä tiedä, missä menet.",
  "Haluat, että joku seuraa kehitystäsi ja sanoo suoraan, kun jotain pitää muuttaa.",
  "Asut muualla kuin pääkaupunkiseudulla – tai haluat säästää aikaa ja rahaa.",
  "Haluat pysyviä muutoksia ilman, että koko elämä pyörii salin ympärillä.",
];

const includes = [
  {
    title: "Alkukartoitus",
    text: "Kartoitus etänä tai lähitapaamisella. Käymme läpi tavoitteet, lähtötason ja sen, mikä on aiemmin toiminut – ja mikä ei.",
  },
  {
    title: "Harjoitussuunnitelma",
    text: "Monipuolinen kokonaisuus: aerobista treeniä, lihaskuntoa ja liikkuvuutta. Salille, kotiin tai molempiin.",
  },
  {
    title: "Ravintovalmennus",
    text: "Ravintopäiväkirjan kautta rakennetut askelmerkit, reseptit ja vinkit. Löydämme sinulle toimivan tavan syödä.",
  },
  {
    title: "Mittaukset ja testit",
    text: "InBody, kehityskuvat, paino ja ympärysmitat. Tarvittaessa maksimitestit ja lihaskuntotestit.",
  },
  {
    title: "Seuranta ja etätuki",
    text: "Trainero-sovellus ja WhatsApp. Viikkoraportti kertoo, miten treeni, paino ja energisyys kehittyvät.",
  },
  {
    title: "30 minuutin tapaaminen",
    text: "Kuukausittainen etäpuhelu tai Teams-tapaaminen varmistaa, ettet jää yksin matkan varrella.",
  },
  {
    title: "Treenivideot kotiin",
    text: "Valmiit 15–30 minuutin treenivideot: kehonhuoltoa, tanssia, nyrkkeilyä, HIITiä, kahvakuulaa.",
  },
  {
    title: "Psyykkinen valmennus",
    text: "Halutessasi koti- ja pohdintatehtäviä. Pysyvä muutos lähtee siitä, että tunnet itsesi.",
  },
];

const steps = [
  {
    title: "Kartoitus",
    text: "Käymme tilanteesi läpi etänä tai lähitapaamisella. Sovimme väli- ja pitkän aikavälin tavoitteet.",
  },
  {
    title: "Suunnitelma",
    text: "Saat treeni- ja ravintosuunnitelman sekä pääsyn Trainero-alustalle. Ensimmäinen viikko lähtee käyntiin heti.",
  },
  {
    title: "Seuranta",
    text: "Päivitämme ohjelmaa ja reagoimme viikkoraportteihin. Olen tavoitettavissa, kun arki yllättää.",
  },
];

const pricing = [
  {
    title: "Etävalmennus",
    price: "150 €",
    unit: "/ kk",
    description: "Ohjelmat, ravintovalmennus, seuranta ja tuki. Minimiaika 3 kk.",
    features: ["Yksilölliset treeniohjelmat", "Ravintovalmennus ja reseptit", "Viikoittainen seuranta", "30 min etätapaaminen / kk"],
    featured: true,
  },
  {
    title: "Etävalmennus + Firstbeat",
    price: "225 €",
    unit: "/ kk",
    description: "Sama kokonaisuus Firstbeat Life -mittauksella.",
    features: ["Kaikki etävalmennuksen sisällöt", "Firstbeat Life -mittalaite", "Unen ja palautumisen data", "Kuntotason seuranta"],
  },
  {
    title: "Lähitapaaminen",
    price: "99 €",
    unit: "/ kerta",
    description: "Lisää yksittäinen tapaaminen etävalmennuksen rinnalle.",
    features: ["60 min henkilökohtainen treeni", "Voimalaitos Merihaka", "Liikuntamylly tai Töölön kisahalli", "Sovitaan erikseen"],
  },
];

export default function EtavalmennusPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Nyt on sinun vuorosi <span className="accent text-ember">onnistua.</span>
          </>
        }
        intro="Etävalmennus on sinulle, joka haluat säästää aikaa ja rahaa – ja silti saada henkilökohtaisen suunnitelman, seurannan ja tuen. Asuitpa missä tahansa."
        image="/images/eta-hero.jpg"
        alt="Kati Lytsy harjoittelemassa ulkona"
        secondaryLabel="Katso hinnat"
        secondaryHref="#hinnat"
      />

      <section className="border-t border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-md">
              Etävalmennus on sinulle, <span className="accent">jos..</span>
            </h2>
            <p className="mt-5 max-w-sm text-muted">
              Et tarvitse omaa salia tai pääkaupunkiseudulla asumista. Tarvitset
              suunnitelman, joka sopii sinun arkeesi – ja jonkun, joka seuraa sitä.
            </p>
          </div>
          <ul className="space-y-4" data-reveal data-reveal-delay="0.08">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3 border-t border-line pt-4 text-sm leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display-2 max-w-xl" data-reveal>
              Etävalmennukseen sisältyy
            </h2>
            <p className="max-w-sm text-muted lg:pb-1" data-reveal>
              Kaikki se, mitä tarvitset muutokseen – ilman että sinun täytyy
              rakentaa sitä yksin.
            </p>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4" data-reveal-group>
            {includes.map((item) => (
              <div key={item.title} className="border-t border-line pt-4" data-reveal-item>
                <h3 className="font-display text-lg font-semibold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone" data-reveal>
            <Image
              src="/images/eta-3.jpg"
              alt="Kati Lytsy ulkona harjoittelemassa"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div data-reveal data-reveal-delay="0.08">
            <h2 className="display-2 max-w-md">
              Tiedän, mitä käyt <span className="accent">läpi.</span>
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Muutoksen tekeminen ei ole aina ruusuilla tanssimista, mutta
                ehdottomasti kaiken sen vaivan arvoista. Kun itse voit hyvin,
                pystyt paremmin elämään omaa unelmaelämääsi.
              </p>
              <p>
                Yrittäjänä jaksat paremmin pitkiä työpäiviä. Ja sinulle jää
                voimavaroja myös perheelle, harrastuksille ja treenille lähtöön,
                kun kuntosi kohenee ja löydät itsestäsi oman hyvinvointisi
                johtajan.
              </p>
            </div>
            <Link href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-7">
              Aloita muutos täältä
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="hinnat" className="scroll-mt-24 bg-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div data-reveal>
              <h2 className="display-2 max-w-xl">Hinnat.</h2>
              <p className="mt-5 max-w-xl text-muted">
                Etävalmennuksen minimiaika on 3 kuukautta. Hinnat sisältävät ALV
                25,5 %. Laskutuslisä 5 €.
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted lg:pb-1" data-reveal>
              Lähitapaamisia voi lisätä alkaen 99 €. Moni suosittelee niitä
              ainakin alkuun.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3" data-reveal-group>
            {pricing.map((item) => (
              <PriceCard key={item.title} {...item} ctaLabel="Varaa kartoitus" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div data-reveal>
              <h2 className="display-2 max-w-md">Näin se toimii.</h2>
              <p className="mt-5 max-w-sm text-muted">
                Kolme selkeää vaihetta – ja sen jälkeen viikoittainen rutiini,
                joka vie kohti tavoitetta.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3" data-reveal data-reveal-delay="0.08">
              {steps.map((step) => (
                <div key={step.title} className="border-t border-line pt-4">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.025em]">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider testimonials={TESTIMONIALS} title="Etävalmennettavat kertovat." />

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="display-2 max-w-sm" data-reveal>
              Usein kysytyt kysymykset.
            </h2>
            <div data-reveal data-reveal-delay="0.08">
              <FaqList faqs={ETA_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Jäikö vielä <span className="accent text-cream/75">kysyttävää?</span>
          </>
        }
        text="Varaa maksuton kartoituspuhelu tai lähetä viesti. Käydään läpi, sopiiko etävalmennus juuri sinun tilanteeseesi."
        secondaryLabel="Lähetä viesti"
        secondaryHref="/yhteystiedot"
      />
    </>
  );
}
