import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.katilytsy.fi";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/verkkokauppa/kassa"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
