import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { SITE } from "@/lib/content";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Meistä",
  description:
    "Kati Lytsy on liikunnanohjaaja, psyykkinen valmentaja ja personal trainer. Tutustu Katin tarinaan, koulutukseen ja tapaan valmentaa.",
  alternates: { canonical: "/meista" },
};

const credentials = [
  "Liikunnanohjaaja AMK",
  "Psyykkinen valmentaja",
  "Mobility-kehonhuolto",
  "Toiminnallinen treeni",
  "Rasvanpoltto ja lihaskasvu",
  "Palautumisen asiantuntija",
  "Uimaopettaja",
];

const values = [
  {
    title: "Liikunnan ilo",
    text: "Liikunta ei ole pakkopullaa. Etsimme yhdessä liikkeen, josta sinäkin voi nauttia – ilman suorittamista.",
  },
  {
    title: "Kehon ehdoilla",
    text: "Kipu ei ole merkki siitä, että yrittäisit liian vähän. Muokkaamme treeniä, emmekä luovuta.",
  },
  {
    title: "Pysyvät muutokset",
    text: "Dieetit loppuvat, arki jatkuu. Rakennamme rutiinit, jotka kestävät myös kiireisen viikon.",
  },
];

export default function MeistaPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Kuka <span className="accent text-ember">olen?</span>
          </>
        }
        intro="Kati Lytsy, energinen liikunta-alan ammattilainen, joka auttaa tekemään arjesta juhlaa. Liikunnanohjaaja, psyykkinen valmentaja ja personal trainer."
        image="/images/about-1.jpg"
        alt="Kati Lytsy juoksemassa portaita"
        ctaLabel="Varaa kartoitus"
        secondaryLabel="Lue blogia"
        secondaryHref="/blogi"
        imagePosition="50% 40%"
      />

      <section className="border-t border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20 lg:py-24">
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-muted" data-reveal>
            <p>
              Olen pohjakoulutukseltani liikunnanohjaaja (AMK) ja olen
              ala-asteesta asti tiennyt, että haluan tehdä töitä liikunnan
              parissa. Olen pienestä pitäen rakastanut liikkua ja haluan jakaa
              muille sitä samaa liikunnaniloa ja kipinää, mitä itse saan
              liikunnasta.
            </p>
            <p>
              Monella on takanaan todella huonoja kokemuksia liikunnasta.
              Haluaisin, että jokainen kokisi iloa, onnistumisia ja aitoa
              liikunnanriemua liikkuessaan – ja ettei liikunta olisi pakkopullaa.
              Oppisi rakastamaan omaa kehoaan, sen ainutlaatuisuutta ja
              arvostamaan sitä, mihin kaikkeen kehomme pystyy.
            </p>
            <p>
              Haluan, että meillä kaikilla olisi enemmän energiaa ja voimavaroja
              lähteä tavoittelemaan meille merkityksellistä elämää. Mitä jaksamme
              tehdä elämässämme, jos meillä ei ole energiaa?
            </p>
            <p>
              Harrastan kuntosalitreenin lisäksi tanssia Goodaz Gyals
              kisa- ja esiintymisryhmässä. Tanssi on itselle todella iso osa
              elämää, ja ohjaan myös yrityksille erilaisia tanssitunteja.
              Liikunta on parasta, mitä voi olla.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone" data-reveal data-reveal-delay="0.08">
            <Image
              src="/images/contact.jpg"
              alt="Kati Lytsy kehonhuollon parissa"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone" data-reveal>
            <Image
              src="/images/about-2.jpg"
              alt="Kati Lytsy Movement & Mobility -diplomin kanssa"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
          <div data-reveal data-reveal-delay="0.08">
            <h2 className="display-2 max-w-xl">
              Liikuntakyky ei ole <span className="accent">itsestäänselvyys.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Minulla on todettu selkärankareuma, ja on ollut useampi aamu, kun
                en ole päässyt sängystä ylös. Liikunta on kuitenkin auttanut
                tähänkin: liikuttamalla jäykkää kehoa olen saanut itseni aamulla
                liikkeelle ja kivut ovat häipyneet.
              </p>
              <p>
                Tanssi ja liikunnan monipuolistaminen on ollut iso osa parempaa
                tilannetta reuman kanssa. Olen siis liikunnalle elämäni velkaa.
                Lääkärissä minulle sanottiin, että jos en olisi liikkunut näin
                monipuolisesti, reuma olisi varmasti edennyt kymmenessä vuodessa
                – mutta näin ei ole käynyt.
              </p>
              <p>
                Haluan siksi kannustaa jokaista liikkumaan vaivoista ja kivuista
                huolimatta, koska aina löytyy liikkeitä tai lajeja, jotka auttavat
                omaa tilannetta.
              </p>
            </div>
            <Link href="/blogi/selkarankareuma" className="link-arrow mt-7 text-sm">
              Lue koko tarina
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div data-reveal>
              <h2 className="display-2 max-w-md">Koulutukset.</h2>
              <p className="mt-5 max-w-sm text-muted">
                Ammattitaito, jota päivitän jatkuvasti – jotta sinun ei tarvitse
                arvailla, mitä kehollesi tapahtuu.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2" data-reveal data-reveal-delay="0.08">
              {credentials.map((item) => (
                <li key={item} className="flex gap-3 border-t border-line pt-4 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div data-reveal>
              <h2 className="display-2 max-w-lg">
                Millaista on valmentaa <span className="accent text-cream/75">kanssani?</span>
              </h2>
              <p className="mt-5 max-w-md text-cream/65">
                Kolme asiaa, jotka ohjaavat jokaista valmennusta – olit sitten
                ensikertalainen salilla tai kokenut treenaaja.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  Varaa kartoitus
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/valmennus" className="btn btn-outline-light">
                  Katso valmennukset
                </Link>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3" data-reveal data-reveal-delay="0.08">
              {values.map((value) => (
                <div key={value.title} className="border-t border-cream/20 pt-4">
                  <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Nauti matkasta – se tulee olemaan <span className="accent text-cream/75">huikea.</span>
          </>
        }
        text="Varaa maksuton kartoituspuhelu. Käydään läpi tavoitteesi ja mietitään, millainen valmennus sopii juuri sinulle."
        secondaryLabel="Lähetä viesti"
        secondaryHref="/yhteystiedot"
      />
    </>
  );
}
