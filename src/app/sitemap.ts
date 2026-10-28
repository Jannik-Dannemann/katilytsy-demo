import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.katilytsy.fi";
const lastModified = new Date("2026-10-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/valmennus",
    "/johtajavalmennus",
    "/etavalmennus",
    "/lytsynloylyt",
    "/tyohyvinvointi",
    "/liikuntavartti",
    "/meista",
    "/blogi",
    "/verkkokauppa",
    "/uutiskirje",
    "/tietosuoja",
    "/yhteystiedot",
  ];

  return [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: path === "" || path === "/blogi" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/valmennus" ? 0.9 : 0.7,
    })),
    ...POSTS.map((post) => ({
      url: `${baseUrl}/blogi/${post.slug}`,
      lastModified: new Date(post.dateISO),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
