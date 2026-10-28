import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { NewsletterForm } from "@/components/newsletter-form";
import { POSTS } from "@/lib/content";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blogi",
  description:
    "Katin kirjoituksia liikunnasta, palautumisesta, ravinnosta ja hyvinvoinnista – ilman suorittamista ja pikadieettejä.",
  alternates: { canonical: "/blogi" },
};

export default function BlogiPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Hyvinvoinnin <span className="accent text-ember">aalloilla.</span>
          </>
        }
        intro="Kirjoituksia liikunnasta, palautumisesta ja arjesta, joka ei vaadi täydellisyyttä. Rehellisesti, omalla kokemuksella."
        image="/images/blog-gym.jpg"
        alt="Kati Lytsy treenaamassa kuntosalilla"
        ctaLabel="Varaa kartoitus"
        secondaryLabel="Tutustu valmennuksiin"
        secondaryHref="/valmennus"
      />

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blogi/${post.slug}`} className="group block" data-reveal-item>
                <div className="media-zoom relative aspect-[4/3] bg-stone">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">{post.date}</p>
                <h2 className="mt-2 font-display text-[1.4rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[1.55rem]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="link-arrow mt-4 inline-flex text-sm">
                  Lue kirjoitus
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-page grid gap-8 py-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16 lg:py-20">
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
              proteiinipitoisia välipaloja viikon jokaiselle päivälle. Lisäksi
              kuulet ensimmäisenä uusista palveluista ja sisäpiirin eduista.
            </p>
            <div className="mt-7 max-w-xl">
              <NewsletterForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
