import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "./section-heading";
import { services } from "@/content/services";
import { sectionsCopy } from "@/content/sections";

/** Servicios: cada uno cuenta el dolor del cliente, qué hacemos y el resultado. */
export function Servicios() {
  const copy = sectionsCopy.services;
  return (
    <section id="servicios" className="py-section lg:py-section-lg">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          heading={copy.heading}
          intro={copy.intro}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col p-7">
              <h3 className="font-display text-xl font-semibold leading-tight">
                {service.name}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.problem}
              </p>
              <p className="mt-3 leading-relaxed">{service.solution}</p>
              <p className="mt-5 flex items-start gap-2.5 border-t border-border pt-5 font-medium text-foreground">
                <span
                  aria-hidden="true"
                  className="mt-2 size-2 shrink-0 rounded-[3px] bg-primary"
                />
                <span>{service.result}</span>
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
