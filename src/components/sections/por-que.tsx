import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { differentiators, whyHeading } from "@/content/why";

/** Por qué Gonzhaga: diferenciadores, en una retícula abierta (sin tarjetas). */
export function PorQue() {
  return (
    <section className="bg-muted py-section lg:py-section-lg">
      <Container>
        <Heading as="h2" size="xl" className="max-w-2xl">
          {whyHeading}
        </Heading>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="border-t border-border pt-6"
            >
              <h3 className="flex items-start gap-3 font-display text-lg font-semibold leading-tight">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-2.5 shrink-0 rounded-[3px] bg-primary"
                />
                {item.title}
              </h3>
              <p className="mt-3 pl-[1.4rem] text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
