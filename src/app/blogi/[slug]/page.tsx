import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { POSTS } from "@/lib/content";
import { ArrowRight } from "@/components/icons";

type Params = { slug: string };

export const instant = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((item) => item.slug === slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogi/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
      images: [{ url: post.image, alt: post.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = POSTS.find((item) => item.slug === slug);

  if (!post) notFound();

  const related = POSTS.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="border-b border-line">
          <div className="container-page pb-10 pt-6 sm:pt-9 lg:pb-14 lg:pt-12">
            <Link href="/blogi" className="link-arrow text-xs uppercase tracking-[0.16em] text-muted">
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Takaisin blogiin
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{post.date}</p>
                <h1 className="page-title mt-3 max-w-3xl font-display font-semibold">{post.title}</h1>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">{post.excerpt}</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container-page py-12 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="prose-editorial">
              {post.body.map((block, index) => {
                if (block.type === "p") return <p key={index}>{block.text}</p>;
                if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
                if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
                if (block.type === "ul") {
                  return (
                    <ul key={index}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="my-8 border-l-2 border-ember pl-6 font-display text-[1.35rem] font-medium leading-snug tracking-[-0.03em] sm:text-[1.55rem]"
                    >
                      {block.text}
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">Kati Lytsy</p>
                <p className="mt-0.5 text-sm text-muted">Personal trainer · Liikunnanohjaaja AMK</p>
              </div>
              <Link href="/meista" className="link-arrow text-sm">
                Katin tarina
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-line">
        <div className="container-page py-16 lg:py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display-3">Lue seuraavaksi</h2>
            <Link href="/blogi" className="link-arrow text-sm">
              Kaikki kirjoitukset
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/blogi/${item.slug}`} className="group block">
                <div className="media-zoom relative aspect-[16/10] bg-stone">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted">{item.date}</p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-0.03em]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Tarvitsetko apua oman <span className="accent text-cream/75">muutoksen</span> kanssa?
          </>
        }
        text="Varaa maksuton kartoituspuhelu. Käydään tilanteesi läpi ja mietitään seuraava askel yhdessä."
        secondaryLabel="Lähetä viesti"
        secondaryHref="/yhteystiedot"
      />
    </>
  );
}
