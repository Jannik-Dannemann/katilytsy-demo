import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { NewsletterForm } from "@/components/newsletter-form";
import {
  LOCATIONS,
  POSTS,
  SERVICES,
  SITE,
  TESTIMONIALS,
  WORK_SERVICES,
} from "@/lib/content";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  LinkedIn,
} from "@/components/icons";

const facts = [
  { value: "10 kg", label: "painonpudotus pienryhmässä" },
  { value: "+60 %", label: "kehitys sarjapainoihin" },
  { value: "14 vrk", label: "tyytyväisyystakuu" },
  { value: "4–8", label: "henkeä pienryhmässä" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-y border-line">
        <div
          className="container-page grid grid-cols-2 divide-x divide-line lg:grid-cols-4"
          data-reveal-group
        >
          {facts.map((fact) => (
            <div key={fact.value} className="px-4 py-7 sm:px-6 lg:py-9" data-reveal-item>
              <p className="display-3">{fact.value}</p>
              <p className="mt-2 max-w-[10rem] text-xs leading-relaxed text-muted sm:text-sm">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="valmennus" className="scroll-mt-24">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display-2 max-w-2xl" data-reveal>
              Valmennusta, joka mahtuu sun arkeen.
            </h2>
            <p className="max-w-sm text-muted lg:pb-1" data-reveal data-reveal-delay="0.08">
              Kolme erilaista tapaa treenata kanssani – valitse se, joka sopii juuri
              siihen hetkeen, jossa olet nyt.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7" data-reveal-group>
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
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  {service.blurb}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">
                  {service.meta}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-page grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
            <Image
              src="/images/work-2.jpg"
              alt="Kati Lytsy pitämässä työhyvinvointiluontoa"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div data-reveal>
            <h2 className="display-2 max-w-xl">
              Sairauspoissaolot minimiin, energiatasot maksimiin.
            </h2>
            <p className="mt-5 max-w-xl text-cream/65">
              Hyvinvoiva tiimi jaksaa paremmin, tekee parempia päätöksiä ja palautuu
              työpäivistä. Räätälöin työhyvinvoinnin palvelut juuri teidän arkenne
              näköisiksi – paikan päällä tai etänä.
            </p>
            <p className="mt-5 text-sm text-cream/45">
              {WORK_SERVICES.map((service) => service.title).join(" · ")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/tyohyvinvointi" className="btn btn-light">
                Työhyvinvointipalvelut
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/liikuntavartti" className="btn btn-outline-light">
                Varaa maksuton liikuntavartti
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider testimonials={TESTIMONIALS} />

      <section className="border-t border-line">
        <div className="container-page grid gap-8 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone" data-reveal>
            <Image
              src="/images/about-1.jpg"
              alt="Kati Lytsy juoksemassa portaita"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
          <div data-reveal data-reveal-delay="0.08">
            <h2 className="display-2 max-w-xl">
              Liikunnan ilo kuuluu <span className="accent text-ember">kaikille.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Olen Kati – liikunnanohjaaja, psyykkinen valmentaja ja personal trainer,
                joka on tehnyt itsekin elämäntapamuutoksen. Tiedän, miltä tuntuu, kun
                arki vie ja oma jaksaminen on viimeisenä listalla.
              </p>
              <p>
                Minulla on selkärankareuma, joten liikuntakyky ei ole minulle
                itsestäänselvyys. Juuri siksi uskon, että jokaiselle löytyy liikettä,
                joka sopii omaan kehoon – ilman kipua, suorittamista tai kituuttamista.
              </p>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-muted">
              Liikunnanohjaaja AMK · Psyykkinen valmentaja · Palautumisen asiantuntija
            </p>
            <Link href="/meista" className="link-arrow mt-7 text-sm">
              Lue Katin tarina
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-2 max-w-xl" data-reveal>
              Hyvinvoinnin aalloilla.
            </h2>
            <Link href="/blogi" className="link-arrow text-sm" data-reveal>
              Kaikki kirjoitukset
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-14 lg:gap-12" data-reveal-group>
            {POSTS.slice(0, 2).map((post) => (
              <Link key={post.slug} href={`/blogi/${post.slug}`} className="group block" data-reveal-item>
                <div className="media-zoom relative aspect-[4/3] bg-stone">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">
                  {post.date}
                </p>
                <h3 className="mt-2 max-w-lg font-display text-[1.45rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[1.7rem]">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="link-arrow mt-4 inline-flex text-sm">
                  Lue lisää
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-page grid gap-8 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden bg-paper lg:mx-0">
            <Image
              src="/images/newsletter-guide.jpg"
              alt="Välipalaopas ja proteiinipitoisia välipaloja"
              fill
              sizes="(max-width: 1024px) 80vw, 28vw"
              className="object-cover object-top"
            />
          </div>
          <div data-reveal>
            <h2 className="display-2 max-w-xl">
              Liity hyvinvoinnin <span className="accent">sisäpiiriin.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted">
              Saat maksuttoman välipalaoppaan, jossa on herkullisia ja helppoja
              proteiinipitoisia välipaloja viikon jokaiselle päivälle. Kuulet
              ensimmäisenä uusista palveluista ja sisäpiirin eduista.
            </p>
            <div className="mt-7 max-w-xl">
              <NewsletterForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div data-reveal>
              <h2 className="display-2 max-w-lg">Ota yhteyttä.</h2>
              <p className="mt-5 max-w-md text-cream/65">
                Etkö tiedä, mikä valmennus sopisi sinulle? Varaa maksuton
                30 minuutin kartoituspuhelu – käydään tilanteesi läpi ilman
                sitoutumista.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Varaa kartoituspuhelu
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/yhteystiedot" className="btn btn-outline-light">
                  Yhteystiedot ja lomake
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3">
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

            <div className="grid gap-8 sm:grid-cols-2 lg:gap-10" data-reveal data-reveal-delay="0.1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/45">
                  Suoraan Katile
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <a href={`mailto:${SITE.email}`} className="block hover:text-cream/70">
                    {SITE.email}
                  </a>
                  <a href={SITE.phoneHref} className="block hover:text-cream/70">
                    {SITE.phone}
                  </a>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-cream/55">
                  Vastaan viesteihin yleensä saman päivän aikana.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/45">
                  Ohjauspaikat
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream/65">
                  {LOCATIONS.map((location) => (
                    <li key={location.name}>
                      <span className="text-cream">{location.name}</span>
                      <br />
                      {location.address}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
