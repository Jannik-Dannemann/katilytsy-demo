import Link from "next/link";
import { LOCATIONS, NAV, SITE } from "@/lib/content";
import { ArrowRight, Facebook, Instagram, LinkedIn } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-page py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div>
            <p className="display-2 max-w-xl">
              Enemmän energiaa.{" "}
              <span className="accent text-cream/75">Vähemmän jumia.</span>
            </p>
            <p className="mt-6 max-w-md text-cream/65">
              Pysyviä muutoksia, jotka lisäävät hyvinvointia – ei ikinä sen kustannuksella.
            </p>
            <Link
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light mt-8"
            >
              Varaa maksuton kartoitus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/45">
              Sivusto
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/75 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/uutiskirje" className="text-cream/75 transition-colors hover:text-cream">
                  Uutiskirje
                </Link>
              </li>
              <li>
                <Link href="/yhteystiedot" className="text-cream/75 transition-colors hover:text-cream">
                  Yhteystiedot
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/45">
              Ota yhteyttä
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <a href={`mailto:${SITE.email}`} className="block text-cream/85 hover:text-cream">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="block text-cream/85 hover:text-cream">
                {SITE.phone}
              </a>
            </div>
            <div className="mt-6 space-y-2 text-xs leading-relaxed text-cream/55">
              {LOCATIONS.slice(0, 3).map((location) => (
                <p key={location.name}>
                  <span className="text-cream/80">{location.name}</span>
                  <br />
                  {location.address}
                </p>
              ))}
              <p>+ Vantaa ja asiakkaan omat tilat sopimuksen mukaan.</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream hover:text-ink"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream hover:text-ink"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream hover:text-ink"
              >
                <LinkedIn className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/15 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © Personal trainer Kati Lytsy · Y-tunnus {SITE.businessId}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/tietosuoja" className="transition-colors hover:text-cream">
              Tietosuojaseloste
            </Link>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-cream"
            >
              Takaisin ylös
              <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
