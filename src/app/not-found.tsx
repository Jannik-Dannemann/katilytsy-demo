import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sivua ei löytynyt",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col justify-center py-16 lg:py-24">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="page-title mt-4 max-w-2xl font-display font-semibold">
        Tätä sivua ei <span className="accent text-ember">löytynyt.</span>
      </h1>
      <p className="mt-5 max-w-md text-muted">
        Sivu on voinut siirtyä tai osoite voi olla väärin. Palataan takaisin
        tutuille poluille.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-dark">
          Etusivulle
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/valmennus" className="btn btn-outline">
          Tutustu valmennuksiin
        </Link>
      </div>
    </section>
  );
}
