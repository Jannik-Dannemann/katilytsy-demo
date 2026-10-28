import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PriceCard } from "@/components/price-card";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { JOHTAJA_FAQS, SITE, TESTIMONIALS } from "@/lib/content";
import { ArrowRight, Check, Spark } from "@/components/icons";

export const metadata: Metadata = {
  title: "Johtajavalmennus",
  description:
    "Henkilökohtainen johtajavalmennus johtajalle ja yrittäjälle. Firstbeat Life -mittaus, ravintovalmennus, tapaamiset ja 14 vuorokauden tyytyväisyystakuu.",
  alternates: { canonical: "/johtajavalmennus" },
};

const forYou = [
  "Kalenterisi on aivan täynnä ja oma jaksaminen on viimeisenä listalla.",
  "Energia loppuu kesken päivän, eivätkä viikonloput riitä palautumiseen.",
  "Uni ja palautuminen eivät ole sitä, mitä pitäisi – etkä tiedä, mistä aloittaa.",
  "Haluat olla hyvä esimerkki työntekijöillesi ja lapsillesi.",
  "Haluat rutiinit, jotka pysyvät myös hektisillä viikoilla.",
  "Tiedät, että treenaaminen olisi tärkeää, mutta et saa aikaiseksi.",
  "Olet valmis sitoutumaan muutokseen, joka tuntuu ja näkyy.",
  "Haluat tehokkaan mutta turvallisen aloituksen ilman turhia loukkaantumisriskejä.",
];

const includes = [
  {
    title: "Henkilökohtainen liikuntaohjelma",
    text: "Ohjelma räätälöidään tavoitteidesi, aikataulusi ja lähtötasosi mukaan – salille, kotiin tai hotellille.",
  },
  {
    title: "Tapaamiset",
    text: "Säännölliset lähitapaamiset varmistavat, että tekniikka, painot ja eteneminen ovat heti oikealla tiellä.",
  },
  {
    title: "Seuranta Trainero-sovelluksella",
    text: "Näemme viikoittain, miten voimasi, painosi ja energiasi kehittyvät. Reagoimme heti, jos jokin ei etene.",
  },
  {
    title: "Firstbeat Life -mittaus",
    text: "Kannettava mittalaite kertoo unesta, stressistä, palautumisesta ja kuntotasosta reaaliajassa.",
  },
  {
    title: "Ravintovalmennus",
    text: "Ruokavaliopohja vaihtoehtoineen, sinun mieltymyksilläsi. Muutos tapahtuu keittiössä – ei kitudieetillä.",
  },
  {
    title: "Psyykkinen valmennus",
    text: "Halutessasi pohdintatehtäviä, jotka auttavat ymmärtämään, kuka olet, mitä haluat ja miksi.",
  },
  {
    title: "Minä käytössäsi koko matkan",
    text: "Tarvittaessa tulen kotisalillesi tai kokkaamaan kanssasi viikon ruuat. Oikeasti avaimet käteen.",
  },
  {
    title: "14 vrk tyytyväisyystakuu",
    text: "Jos valmennus ei ole sitä, mitä ajattelit, saat rahasi takaisin. Riskitön aloitus.",
  },
];

const steps = [
  {
    title: "Maksuton alkukartoitus",
    text: "Käydään läpi tilanteesi, tavoitteesi ja resurssisi. Mitä arjessasi on realistista lähteä tavoittelemaan.",
  },
  {
    title: "Lähtötason mittaus",
    text: "Firstbeat antaa dataa palautumisesta, unesta ja kuormituksesta. Näemme, millainen treeni sinua kehittää.",
  },
  {
    title: "Ensimmäinen tapaaminen",
    text: "Liikkuvuuskartoitus ja ohjelman rakentaminen. Tiedät heti, mitä teet, millä tekniikalla ja millä painoilla.",
  },
  {
    title: "Säännölliset tapaamiset",
    text: "Varmistamme, että et päästä itseäsi sieltä, missä aita on matalin – turvallisesti ja sinun ehdoillasi.",
  },
  {
    title: "Seuranta ja etätuki",
    text: "Viikoittainen yhteydenpito pitää sinut kartalla. Muutamme suunnitelmaa heti, jos jokin ei toimi.",
  },
  {
    title: "Tulokset, jotka tuntuvat",
    text: "Huomaat, ettei salilla tarvitse asua saadakseen tuloksia – eikä aloittaa kitudieettiä.",
  },
];

const pricing = [
  {
    title: "Johtajavalmennus",
    price: "1 440 €",
    unit: "/ 3 kk",
    description: "Koko kokonaisuus ilman Firstbeat-mittausta.",
    features: ["12 × 60 min lähitapaamista", "Ruokavalio ja reseptit", "Harjoitusohjelmat", "Viikoittainen seuranta"],
  },
  {
    title: "Johtajavalmennus + Firstbeat",
    price: "1 740 €",
    unit: "/ 3 kk",
    description: "Sama kokonaisuus Firstbeat Life- ja InBody-mittauksilla.",
    features: ["Kaikki 3 kk sisällöt", "Firstbeat Life -mittalaite", "3 × InBody-mittaus", "Unen ja palautumisen data"],
    featured: true,
  },
  {
    title: "Johtajavalmennus",
    price: "2 640 €",
    unit: "/ 6 kk",
    description: "Pidempi matka, jossa ehditään rakentaa pysyvät rutiinit.",
    features: ["24 × 60 min lähitapaamista", "Ruokavalio ja reseptit", "Harjoitusohjelmat", "Viikoittainen seuranta"],
  },
  {
    title: "Johtajavalmennus + Firstbeat",
    price: "3 240 €",
    unit: "/ 6 kk",
    description: "Kuuden kuukauden kokonaisuus mittauksilla.",
    features: ["Kaikki 6 kk sisällöt", "Firstbeat Life -mittalaite", "6 × InBody-mittaus", "Unen ja palautumisen data"],
  },
];

export default function JohtajavalmennusPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Enää ei tarvitse valita työn ja kunnon <span className="accent text-ember">väliltä.</span>
          </>
        }
        intro="Henkilökohtainen valmennus johtajalle tai avainhenkilölle, joka haluaa parempaan kuntoon, lisää energiaa ja parempaa palautumista – ilman että liiketoiminta kärsii."
        image="/images/johtaja-hero.jpg"
        alt="Kati Lytsy valmentamassa ketjukahvakuulalla mustavalkoisessa kuvassa"
        secondaryLabel="Katso hinnat"
        secondaryHref="#hinnat"
        imagePosition="50% 28%"
      />

      <section className="border-t border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-md">
              Tämä valmennus on sinulle, <span className="accent">jos..</span>
            </h2>
            <p className="mt-5 max-w-sm text-muted">
              Valmennus ei lisää kuormaa arkeesi. Se rakennetaan sinun kalenteriisi,
              sinun tavoitteisiisi ja sinun elämäntilanteeseesi.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2" data-reveal data-reveal-delay="0.08">
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
              Mitä saat valmennuksesta?
            </h2>
            <p className="max-w-sm text-muted lg:pb-1" data-reveal>
              Kokonaisuus, joka huomioi liikunnan, ravinnon, palautumisen ja mielen.
            </p>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-14" data-reveal-group>
            {includes.map((item) => (
              <div key={item.title} className="flex gap-4 border-t border-line pt-5" data-reveal-item>
                <Spark className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-xl">
              Dataa, jota et saa <span className="accent text-cream/75">älykellosta.</span>
            </h2>
            <p className="mt-5 max-w-xl text-cream/65">
              Firstbeat Life on hyvinvointimittaus, joka näyttää, miten kehosi
              oikeasti palautuu. Sen avulla olemme ennaltaehkäisseet uupumusta ja
              löytäneet jopa oireettoman sairauden.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                ["Uni", "Määrä, laatu ja palauttavuus."],
                ["Kuormitus", "Stressin ja levon tasapaino."],
                ["Kunto", "Mikä treeni kehittää juuri sinua."],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-cream/20 pt-4">
                  <p className="font-display text-lg font-semibold">{title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/55">{text}</p>
                </div>
              ))}
            </div>
            <Link href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-8">
              Kysy Firstbeatista
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft" data-reveal data-reveal-delay="0.1">
            <Image
              src="/images/johtaja-3.jpg"
              alt="InBody-kehonkoostumusmittauksen tuloksia"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-ink/85 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-cream/60">
                Mittaukset ja seuranta
              </p>
              <p className="mt-1 text-sm text-cream/85">
                Kehonkoostumus, paino ja ympärysmitat – näkyviksi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hinnat" className="scroll-mt-24 border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div data-reveal>
              <h2 className="display-2 max-w-xl">Investointi, joka maksaa itsensä takaisin.</h2>
              <p className="mt-5 max-w-xl text-muted">
                Hinnat sisältävät ALV 25,5 %. Maksa laskulla, MobilePaylla,
                liikuntaeduilla tai Klarnalla osissa.
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted lg:pb-1" data-reveal>
              14 vuorokauden tyytyväisyystakuu kaikissa kokonaisuuksissa.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4" data-reveal-group>
            {pricing.map((item) => (
              <PriceCard key={`${item.title}-${item.unit}-${item.price}`} {...item} ctaLabel="Varaa kartoitus" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div data-reveal>
              <h2 className="display-2 max-w-md">Miten valmennus etenee?</h2>
              <p className="mt-5 max-w-sm text-muted">
                Selkeä polku alkukartoituksesta tuloksiin. Ei arvailua, ei
                ylimääräistä kuormaa.
              </p>
            </div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2" data-reveal data-reveal-delay="0.08">
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

      <TestimonialSlider testimonials={TESTIMONIALS} title="Johtajat ja yrittäjät kertovat." />

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="display-2 max-w-sm" data-reveal>
              Usein kysytyt kysymykset.
            </h2>
            <div data-reveal data-reveal-delay="0.08">
              <FaqList faqs={JOHTAJA_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Sinun vuorosi <span className="accent text-cream/75">onnistua.</span>
          </>
        }
        text="Varaa maksuton kartoituspuhelu. Käydään läpi tilanteesi ja mietitään, millainen kokonaisuus sopii juuri sinun arkeesi."
        secondaryLabel="Lue etävalmennuksesta"
        secondaryHref="/etavalmennus"
      />
    </>
  );
}
