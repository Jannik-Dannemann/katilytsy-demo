import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { AddToCartButton } from "@/components/add-to-cart";
import { LYTSYN_FAQS, PRODUCTS, SITE } from "@/lib/content";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Lytsyn löylyt",
  description:
    "Lytsyn löylyt on pienryhmävalmennus Voimalaitos Merihaassa. Neljän viikon kokonaisuus, 4–8 henkeä, tiistaisin klo 18. 140 €.",
  alternates: { canonical: "/lytsynloylyt" },
};

const facts = [
  { value: "4 vko", label: "kerrallaan" },
  { value: "4–8", label: "henkeä ryhmässä" },
  { value: "60 min", label: "tiistaisin klo 18" },
  { value: "140 €", label: "sis. ALV 25,5 %" },
];

const training = [
  {
    title: "Monipuolinen treeni",
    text: "Vapaat painot, laitteet, kelkka, köydet ja kehonhuolto. Treeni haastaa liikkuvuutta, voimaa ja hapenottokykyä.",
  },
  {
    title: "Tekniikat kuntoon",
    text: "Kyykky, maastaveto, penkki, lantionnosto ja leuanveto. Neljän viikon jälkeen treenaat varmemmin myös itsenäisesti.",
  },
  {
    title: "Ohjelma Trainerossa",
    text: "Kuntosaliohjelmat videoineen ja ohjeineen. Näet viimeiset painot ja seuraat kehitystä myös omalla ajalla.",
  },
];

const results = [
  { value: "−10 kg", label: "painonpudotus ryhmässä" },
  { value: "+60 %", label: "kehitys sarjapainoihin" },
  { value: "Leuat", label: "ensimmäiset leuanvedot" },
  { value: "100 %", label: "tyytyväisyystakuu" },
];

export default function LytsynLoylytPage() {
  const product = PRODUCTS.find((item) => item.id === "lytsyn-loylyt-1kk");

  return (
    <>
      <PageHero
        title={
          <>
            Lytsyn <span className="accent text-ember">löylyt.</span>
          </>
        }
        intro="Pieni porukka, kova tsemppi ja tekniikat kuntoon. Pienryhmävalmennus Voimalaitos Merihaassa – ilman että sitoudut puoleksi vuodeksi kerralla."
        image="/images/lytsyn-hero.jpg"
        alt="Lytsyn löylyt pienryhmä treenaamassa yhdessä"
        ctaLabel="Varaa paikkasi"
        ctaHref="#varaa"
        secondaryLabel="Katso usein kysytyt"
        secondaryHref="#faq"
      />

      <section className="border-y border-line">
        <div className="container-page grid grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.value} className="px-4 py-7 sm:px-6 lg:py-9">
              <p className="display-3">{fact.value}</p>
              <p className="mt-2 max-w-[10rem] text-xs leading-relaxed text-muted sm:text-sm">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-xl">
              Löydä kadonnut <span className="accent">salimotivaatio.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Kaipaatko porukkaa, joka tsemppaa mukana? Etkö jaksa tai ehdi
                mennä yksin salille, vaikka tiedät sen tekevän hyvää?
              </p>
              <p>
                Lytsyn löylyissä treenataan yhdessä, opitaan oikea tekniikka ja
                saadaan aikaan oikeita tuloksia. Ei tarvitse olla kokenut
                salikonkari – tulet juuri sellaisena kuin olet.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#varaa" className="btn btn-dark">
                Varaa paikkasi
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Kysy lisää
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone" data-reveal data-reveal-delay="0.08">
            <Image
              src="/images/service-group.jpg"
              alt="Pienryhmä treenaamassa yhdessä"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display-2 max-w-xl" data-reveal>
              Millaista treeniä ryhmässä tehdään?
            </h2>
            <p className="max-w-sm text-muted lg:pb-1" data-reveal>
              Treenaamme monipuolisesti – laatu ennen määrää. 2–3 kertaa viikossa
              riittää hyvään kehitykseen.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3" data-reveal-group>
            {training.map((item) => (
              <div key={item.title} className="border-t border-line pt-4" data-reveal-item>
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="varaa" className="scroll-mt-24 border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div data-reveal>
              <h2 className="display-2 max-w-lg">
                Tosissaan, muttei <span className="accent">vakavasti.</span>
              </h2>
              <div className="mt-6 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-muted">
                <p>
                  Minulle on tärkeää, että jokaisella on hyvä olo tulla mukaan
                  treeneihin. Ei tarvitse jännittää tai hävetä omaa kuntotasoaan
                  tai sitä, ettei vielä hallitse kaikkea.
                </p>
                <p>
                  Tässä ryhmässä on lupa mokata ja oppia. Jos sinulla on
                  rajoituksia, kerro niistä minulle – jokaisessa ryhmässä on aina
                  löydetty sopivat liikkeet. Itsellänikin on selkäsairaus, joten
                  tiedän, miten tärkeää on treenata kehon ehdoilla.
                </p>
              </div>
              <ul className="mt-6 grid gap-2.5 text-sm sm:grid-cols-2">
                {[
                  "Ei salijäsenyyttä",
                  "Kertamaksu salille",
                  "Ohjelmat Trainerossa",
                  "Korvauskerrat",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-cream p-6 sm:p-8" data-reveal data-reveal-delay="0.08">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Pienryhmävalmennus</p>
              <h3 className="card-title mt-2">Lytsyn löylyt 1 kk</h3>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="display-2">140 €</span>
                <span className="text-sm text-muted">/ 4 viikkoa</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Treenit tiistaisin klo 18 Voimalaitos Merihaassa. Ryhmässä 4–8
                henkeä. Salikortti ei sisälly hintaan.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {["4 × 60 min ohjattua treeniä", "Ohjelma Trainero-sovelluksessa", "Tekniikat ja painot kuntoon", "14 vrk tyytyväisyystakuu"].map(
                  (item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              {product && <AddToCartButton productId={product.id} className="mt-6" label="Varaa paikkasi" />}
              <p className="mt-3 text-center text-xs text-muted">
                Paikka vahvistuu maksulla. Myös MobilePay (#26408) ja liikuntaedut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-page py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="display-2 max-w-md">
              Tässä ryhmässä on <span className="accent text-cream/75">pudotettu.</span>
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {results.map((result) => (
                <div key={result.value} className="border-t border-cream/20 pt-4">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    {result.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-cream/55">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-line">
        <div className="container-page py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <h2 className="display-2 max-w-sm" data-reveal>
              Usein kysytyt kysymykset.
            </h2>
            <div data-reveal data-reveal-delay="0.08">
              <FaqList faqs={LYTSYN_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Tule mukaan – varaa <span className="accent text-cream/75">paikkasi.</span>
          </>
        }
        text="Paikka ryhmään vahvistuu maksun suorittamisella. Jos mietit vielä, varaa maksuton kartoituspuhelu."
        label="Varaa paikkasi"
        href="/verkkokauppa"
        secondaryLabel="Kysy lisää"
        secondaryHref="/yhteystiedot"
      />
    </>
  );
}
