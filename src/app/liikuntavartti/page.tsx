import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { LOCATIONS, SITE } from "@/lib/content";
import { ArrowRight, Check, Mail, MapPin, Phone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Liikuntavartti",
  description:
    "Maksuton 15 minuutin taukojumppa työpaikalle. Liikuntavartti on varattavissa PK-seudulla yli 10 henkilön yrityksille.",
  alternates: { canonical: "/liikuntavartti" },
};

const includes = [
  "15 minuutin taukojumppa, joka sopii farkut jalassa",
  "Liikkeet valitaan teidän työnne kuormituksen mukaan",
  "Ei vaadi paljon tilaa tai järjestelyjä",
  "Sopii kaiken kuntoisille",
];

export default function LiikuntavarttiPage() {
  return (
    <>
      <PageHero
        title={
          <>
            15 minuuttia, joka muuttaa <span className="accent text-ember">työpäivän.</span>
          </>
        }
        intro="Taukojumppa, joka lisää energisyyttä ja keskittymiskykyä sekä vähentää pitkästä istumisesta syntyviä kipuja. Maksuton kokeilu PK-seudun yrityksille."
        image="/images/liikuntavartti.jpg"
        alt="Kati Lytsy näyttää vastuskuminauhan liikettä"
        ctaLabel="Varaa maksuton liikuntavartti"
        ctaHref="#lomake"
        secondaryLabel="Soita Katile"
        secondaryHref={SITE.phoneHref}
      />

      <section className="border-t border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-md">
              Tauko, joka tekee <span className="accent">hyvää.</span>
            </h2>
            <div className="mt-6 max-w-lg space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Pitkäaikainen istuminen ja yksipuoliset työasennot kuormittavat
                selkää, niskaa ja hartioita. Heikko lihas väsyy helpommin kuin
                vahva – siksi lihaksista kannattaa pitää huolta monipuolisella
                liikkeellä.
              </p>
              <p>
                Säännölliset tauot ja liikkuvuusharjoitukset auttavat
                ennaltaehkäisemään tuki- ja liikuntaelinvaivoja, kuten
                jännitysniskaa, jäätynyttä olkapäätä ja tenniskyynärpäätä.
              </p>
            </div>
          </div>
          <div className="border border-line bg-cream p-6 sm:p-8" data-reveal data-reveal-delay="0.08">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Liikuntavartti sisältää</p>
            <ul className="mt-5 space-y-3 text-sm">
              {includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-muted">
              Veloitukseton liikuntavartti on varattavissa vain PK-seudulla yli
              10 henkilön yrityksille.
            </p>
          </div>
        </div>
      </section>

      <section id="lomake" className="scroll-mt-24 bg-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div data-reveal>
              <h2 className="display-2 max-w-lg">
                Varatkaa teille <span className="accent">liikuntavartti.</span>
              </h2>
              <p className="mt-5 max-w-lg text-muted">
                Jätä puhelinnumerosi ja yrityksesi tiedot, niin soitan sinulle
                takaisin ja sovitaan teille sopiva aika. Vartti pidetään teidän
                työpaikallanne tai etänä.
              </p>
              <div className="mt-8">
                <ContactForm
                  source="Liikuntavartti"
                  showCompany
                  messageLabel="Milloin haluaisitte liikuntavartin?"
                  messagePlaceholder="Kerro yrityksestä, henkilömäärästä ja toivomastanne ajankohdasta."
                  buttonLabel="Varaa maksuton liikuntavartti"
                />
              </div>
            </div>

            <div className="space-y-8" data-reveal data-reveal-delay="0.1">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <Image
                  src="/images/work-3.jpg"
                  alt="Kati Lytsy pitämässä luentoa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Suoraan Katile
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-muted">
                    <Mail className="h-4 w-4 text-ember" />
                    {SITE.email}
                  </a>
                  <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-muted">
                    <Phone className="h-4 w-4 text-ember" />
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Ohjauspaikat
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  {LOCATIONS.map((location) => (
                    <li key={location.name} className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span>
                        <span className="text-ink">{location.name}</span>
                        <br />
                        {location.address}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="link-arrow text-sm">
                Varaa myös kartoituspuhelu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
