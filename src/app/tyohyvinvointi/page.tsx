import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { WORK_FAQS, WORK_SERVICES } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Työhyvinvointi",
  description:
    "Työhyvinvointipalvelut yrityksille: virkistyspäivät, johtoryhmävalmennus, ohjattu liikunta ja luennot. Räätälöityjä kokonaisuuksia työpaikalle ja etänä.",
  alternates: { canonical: "/tyohyvinvointi" },
};

const benefits = [
  {
    title: "Jaksaminen",
    text: "Säännöllinen liike parantaa unta, palautumista ja keskittymiskykyä. Työpäivän jälkeen jää vielä energiaa muuhunkin.",
  },
  {
    title: "Tiimihenki",
    text: "Yhdessä tekeminen madaltaa kynnystä liikkua ja vahvistaa yhteisöllisyyttä – myös etänä.",
  },
  {
    title: "Parempi arki",
    text: "Kun keho ja mieli voivat hyvin, päätöksenteko helpottuu ja yhteistyö on sujuvampaa.",
  },
];

const steps = [
  {
    title: "Kartoitus",
    text: "Käydään läpi työn haasteet, tiimin tilanne ja se, mitä hyvinvoinnilta toivotaan.",
  },
  {
    title: "Suunnitelma",
    text: "Rakennetaan sisältö, joka sopii teidän arkeenne – paikan päällä, etänä tai molempina.",
  },
  {
    title: "Toteutus",
    text: "Ohjattu liikunta, luennot ja virkistyspäivät toteutetaan sovitusti. Palautteiden pohjalta jatketaan.",
  },
];

export default function TyohyvinvointiPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Sairauspoissaolot minimiin, energiatasot <span className="accent text-ember">maksimiin.</span>
          </>
        }
        intro="Hyvinvoiva tiimi jaksaa paremmin, tekee parempia päätöksiä ja palautuu työpäivistä. Räätälöin työhyvinvoinnin palvelut juuri teidän arkenne näköisiksi."
        image="/images/work-hero.jpg"
        alt="Ohjattua liikuntaa ulkona työporukalle"
        ctaLabel="Kysy tarjous"
        ctaHref="/yhteystiedot"
        secondaryLabel="Varaa liikuntavartti"
        secondaryHref="/liikuntavartti"
        imagePosition="50% 45%"
      />

      <section className="border-t border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-md">
              Miksi työhyvinvointiin kannattaa <span className="accent">panostaa?</span>
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Vain noin puolet työikäisistä liikkuu terveysliikuntasuositusten
                mukaisesti, ja tuki- ja liikuntaelinsairaudet ovat yksi
                yleisimmistä sairauspoissaolojen syistä.
              </p>
              <p>
                Liikkumattomuus ja hyvinvoinnin haasteet käyvät kalliiksi – sekä
                työntekijälle että työnantajalle. Jokainen vastaa omasta
                jaksamisestaan, mutta työnantajan tuella on valtava merkitys.
              </p>
            </div>
          </div>
          <div className="space-y-6" data-reveal data-reveal-delay="0.08">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-t border-line pt-5">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display-2 max-w-xl" data-reveal>
              Palvelut, jotka jalkautuvat arkeen.
            </h2>
            <p className="max-w-sm text-muted lg:pb-1" data-reveal>
              Pienelle tiimille tai koko henkilöstölle – aina teidän tarpeiden
              mukaan.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-7" data-reveal-group>
            {WORK_SERVICES.map((service) => (
              <Link
                key={service.title}
                href="/yhteystiedot"
                className="group block"
                data-reveal-item
              >
                <div className="media-zoom relative aspect-[16/11] bg-stone">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="card-title">{service.title}</h3>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div data-reveal>
              <h2 className="display-2 max-w-md">Näin rakennetaan teille sopiva kokonaisuus.</h2>
              <p className="mt-5 max-w-sm text-muted">
                Ei valmista pakettia, vaan ratkaisu, joka näkyy arjessa.
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

      <section className="bg-ink text-cream">
        <div className="container-page grid gap-8 py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="relative aspect-[16/11] overflow-hidden bg-ink-soft">
            <Image
              src="/images/liikuntavartti.jpg"
              alt="Kati Lytsy näyttää vastuskuminauhan liikettä"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div data-reveal>
            <h2 className="display-2 max-w-lg">
              Aloittakaa maksuttomasta <span className="accent text-cream/75">liikuntavartista.</span>
            </h2>
            <p className="mt-5 max-w-lg text-cream/65">
              15 minuutin taukojumppa teidän työpaikallanne tai etänä. Kokeilkaa,
              miltä liikkuminen tuntuu kesken työpäivän – ilman sitoutumista.
            </p>
            <p className="mt-3 text-sm text-cream/45">
              Veloitukseton liikuntavartti on varattavissa PK-seudulla yli 10
              henkilön yrityksille.
            </p>
            <Link href="/liikuntavartti" className="btn btn-light mt-7">
              Varaa liikuntavartti
              <ArrowRight className="h-4 w-4" />
            </Link>
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
              <FaqList faqs={WORK_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Rakennetaan teidän tiimille sopiva <span className="accent text-cream/75">kokonaisuus.</span>
          </>
        }
        text="Kerro tiimistäsi ja arjen haasteista. Ehdotan seuraavan askeleen ja annan tarjouksen."
        label="Ota yhteyttä"
        href="/yhteystiedot"
        secondaryLabel="Varaa liikuntavartti"
        secondaryHref="/liikuntavartti"
      />
    </>
  );
}
