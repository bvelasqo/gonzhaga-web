import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { ImageZoom } from "@/components/ui/image-zoom";
import { site, subpageCta, subpageNav } from "@/content/site";
import type { CaseStudyFull } from "@/content/casos";

/** Marcador de sección reutilizado (cuadro ámbar del logo). */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-sm font-medium text-primary">
      <span aria-hidden="true" className="size-2 rounded-[3px] bg-primary" />
      {children}
    </span>
  );
}

export function CaseStudyView({ caso }: { caso: CaseStudyFull }) {
  const [hero, ...restCaptures] = caso.captures;

  return (
    <>
      <SiteHeader nav={subpageNav} cta={subpageCta} />
      <main className="pt-16">
        {/* Encabezado del caso */}
        <section className="py-section">
          <Container>
            <nav aria-label="Ruta" className="text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/casos" className="transition-colors hover:text-foreground">
                    Casos
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{caso.name}</li>
              </ol>
            </nav>

            <div className="mt-6 max-w-3xl">
              <Badge variant="success">{caso.status}</Badge>
              <Heading as="h1" size="display" className="mt-5">
                {caso.name}
              </Heading>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed sm:text-xl">
                {caso.summary}
              </p>
            </div>

            {hero && (
              <div className="mt-10">
                <ImageZoom
                  src={hero.src}
                  alt={hero.alt}
                  width={1918}
                  height={916}
                  priority
                  sizes="(min-width: 1024px) 72rem, 92vw"
                />
              </div>
            )}
          </Container>
        </section>

        {/* Contexto y reto */}
        <section className="bg-muted py-section lg:py-section-lg">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <Eyebrow>El cliente</Eyebrow>
                <Heading as="h2" size="lg" className="mt-4">
                  Contexto
                </Heading>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {caso.context}
                </p>
              </div>
              <div>
                <Eyebrow>El reto</Eyebrow>
                <Heading as="h2" size="lg" className="mt-4">
                  Qué lo frenaba
                </Heading>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {caso.challenge}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Solución */}
        <section className="py-section lg:py-section-lg">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Solución</Eyebrow>
              <Heading as="h2" size="xl" className="mt-4">
                Qué construimos
              </Heading>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {caso.solutionIntro}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {caso.features.map((feature) => (
                <Card key={feature.title} className="p-7">
                  <h3 className="flex items-start gap-3 font-display text-lg font-semibold leading-tight">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-2.5 shrink-0 rounded-[3px] bg-primary"
                    />
                    {feature.title}
                  </h3>
                  <p className="mt-3 pl-[1.4rem] text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>

            {restCaptures.length > 0 && (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {restCaptures.map((capture) => (
                  <ImageZoom
                    key={capture.src}
                    src={capture.src}
                    alt={capture.alt}
                    width={1918}
                    height={916}
                    sizes="(min-width: 640px) 36rem, 92vw"
                  />
                ))}
              </div>
            )}
          </Container>
        </section>

        {/* Stack */}
        <section className="bg-muted py-section lg:py-section-lg">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Stack</Eyebrow>
              <Heading as="h2" size="xl" className="mt-4">
                Con qué lo construimos y por qué
              </Heading>
            </div>

            <ul className="mt-10 divide-y divide-border border-y border-border">
              {caso.stack.map((item) => (
                <li
                  key={item.tech}
                  className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <Badge mono variant="muted" className="w-fit shrink-0 sm:w-40">
                    {item.tech}
                  </Badge>
                  <span className="leading-relaxed text-muted-foreground">
                    {item.reason}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Resultado y estado */}
        <section className="py-section lg:py-section-lg">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Resultado</Eyebrow>
              <Heading as="h2" size="xl" className="mt-4">
                Resultado y estado actual
              </Heading>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {caso.result}
              </p>
            </div>

            {/* Métricas: visible solo cuando existan; no se inventan. */}
            {caso.metrics && (
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {caso.metrics.map((m) => (
                  <Card key={m.label} className="p-6">
                    <p className="font-display text-3xl font-semibold text-primary">
                      {m.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
                  </Card>
                ))}
              </div>
            )}

            {/* Testimonio: visible solo cuando exista; no se inventa. */}
            {caso.testimonial && (
              <blockquote className="mt-8 border-l-2 border-primary pl-5 text-lg leading-relaxed">
                {caso.testimonial}
              </blockquote>
            )}
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-section text-background lg:py-section-lg">
          <Container size="narrow" className="text-center">
            <Heading as="h2" size="xl" className="text-background">
              ¿Tienes un proyecto parecido?
            </Heading>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-background/75">
              Cuéntanos qué necesitas y te decimos cómo lo resolveríamos, sin
              compromiso.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href={site.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center gap-2.5 rounded-[var(--radius-md)] bg-primary px-7 text-base font-medium text-primary-foreground shadow-soft transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                Escríbenos por WhatsApp
              </a>
              <p className="text-sm text-background/70">
                O escríbenos a{" "}
                <a
                  href={site.links.email}
                  className="font-medium text-background underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
                >
                  {site.contact.email}
                </a>
              </p>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
