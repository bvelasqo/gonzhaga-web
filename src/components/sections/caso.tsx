import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ImageZoom } from "@/components/ui/image-zoom";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "./section-heading";
import { caseStudy } from "@/content/case";
import { sectionsCopy } from "@/content/sections";

/** Caso de éxito Pipe Pólvora. */
export function Caso() {
  const copy = sectionsCopy.case;
  return (
    <section id="caso" className="bg-muted py-section lg:py-section-lg">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          heading={copy.heading}
          intro={copy.intro}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Narrativa del caso */}
          <div className="order-1">
            <dl className="space-y-6">
              <div>
                <dt className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span aria-hidden="true" className="size-2 rounded-[3px] bg-primary" />
                  Qué necesitaba
                </dt>
                <dd className="mt-2 leading-relaxed">{caseStudy.need}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span aria-hidden="true" className="size-2 rounded-[3px] bg-primary" />
                  Qué construimos
                </dt>
                <dd className="mt-2 leading-relaxed">{caseStudy.built}</dd>
              </div>
            </dl>

            <div className="mt-7">
              <p className="text-sm text-muted-foreground">Con qué lo construimos</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
                  <Badge key={tech} mono variant="muted">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Badge variant="success">{caseStudy.status}</Badge>
            </div>

            <div className="mt-7">
              <Link
                href={caseStudy.href}
                className="inline-flex items-center gap-2 font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                {copy.linkLabel}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Captura de la plataforma (clic para ampliar) */}
          <div className="order-2">
            <ImageZoom
              src={caseStudy.captures[0].src}
              alt={caseStudy.captures[0].alt}
              width={1918}
              height={916}
              sizes="(min-width: 1024px) 48vw, 92vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
