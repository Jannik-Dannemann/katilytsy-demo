import { NextResponse, type NextRequest } from "next/server";
import { POSTS } from "@/lib/content";

export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");

  if (section === "blogi" && slug && !POSTS.some((post) => post.slug === slug)) {
    return NextResponse.rewrite(new URL("/_not-found", request.url), {
      status: 404,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blogi/:slug",
};
