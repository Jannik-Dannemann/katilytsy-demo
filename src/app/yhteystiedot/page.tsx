import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { GENERAL_FAQS, LOCATIONS, SITE } from "@/lib/content";
import {
  ArrowRight,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  MapPin,
  Phone,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Ota yhteyttä Kati Lytsyyn. Varaa maksuton kartoituspuhelu tai lähetä viesti – vastaan yleensä saman päivän aikana.",
  alternates: { canonical: "/yhteystiedot" },
};

export default function YhteystiedotPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Ota <span className="accent text-ember">yhteyttä.</span>
          </>
        }
        intro="Etkö tiedä, mikä valmennus sopisi sinulle? Varaa maksuton 30 minuutin kartoituspuhelu tai lähetä viesti – käydään tilanteesi läpi ilman sitoutumista."
        image="/images/contact.jpg"
        alt="Kati Lytsy kehonhuollon parissa"
        ctaLabel="Varaa kartoituspuhelu"
        secondaryLabel="Soita Katile"
        secondaryHref={SITE.phoneHref}
      />

      <section className="border-t border-line">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
          <div data-reveal>
            <h2 className="display-2 max-w-lg">
              Lähetä <span className="accent">viesti.</span>
            </h2>
            <p className="mt-5 max-w-lg text-muted">
              Kerro lyhyesti tilanteestasi ja siitä, mitä toivoisit. Vastaan
              viesteihin yleensä saman päivän aikana.
            </p>
            <div className="mt-8">
              <ContactForm source="Yhteydenotto" showCompany />
            </div>
          </div>

          <div className="space-y-9" data-reveal data-reveal-delay="0.08">
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
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {SITE.address}
                <br />
                Y-tunnus {SITE.businessId}
              </p>
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
              <p className="mt-3 text-xs text-muted">
                Myös asiakkaan omissa tiloissa sopimuksen mukaan.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Varaa aika
              </p>
              <Link
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mt-4"
              >
                Varaa kartoituspuhelu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Somessa
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:bg-ink hover:text-cream"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:bg-ink hover:text-cream"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:bg-ink hover:text-cream"
                >
                  <LinkedIn className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
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
    </>
  );
}
