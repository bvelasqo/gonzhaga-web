import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { casos } from "@/content/casos";
import { site, subpageCta, subpageNav } from "@/content/site";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Proyectos que Gonzhaga ha construido y entregado para PyMEs de Colombia y LATAM.",
  alternates: { canonical: "/casos" },
  openGraph: {
    type: "website",
    url: "/casos",
    title: `Casos · ${site.name}`,
    description:
      "Proyectos que Gonzhaga ha construido y entregado para PyMEs de Colombia y LATAM.",
  },
};

export default function CasosPage() {
  return (
    <>
      <SiteHeader nav={subpageNav} cta={subpageCta} />
      <main className="pt-16">
        <section className="py-section lg:py-section-lg">
          <Container>
            <div className="max-w-2xl">
              <Heading as="h1" size="xl">
                Casos
              </Heading>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Proyectos reales que hemos construido y entregado. Sin cifras
                inventadas: solo lo que de verdad hicimos.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {casos.map((caso) => (
                <Link key={caso.slug} href={`/casos/${caso.slug}`} className="group">
                  <Card variant="interactive" className="h-full p-7">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="font-display text-xl font-semibold leading-tight">
                        {caso.name}
                      </h2>
                      <Badge variant="success">{caso.status}</Badge>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {caso.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-medium text-foreground transition-colors group-hover:text-primary">
                      Ver el caso
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                      </svg>
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
