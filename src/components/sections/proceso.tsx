import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { processHeading, processSteps } from "@/content/process";
import { sectionsCopy } from "@/content/sections";

/** Proceso: 4 pasos. Es una secuencia, por eso van numerados y conectados. */
export function Proceso() {
  const copy = sectionsCopy.process;
  return (
    <section id="proceso" className="py-section lg:py-section-lg">
      <Container>
        <div className="max-w-2xl">
          <span className="flex items-center gap-2 text-sm font-medium text-primary">
            <span aria-hidden="true" className="size-2 rounded-[3px] bg-primary" />
            {copy.eyebrow}
          </span>
          <Heading as="h2" size="xl" className="mt-4">
            {processHeading}
          </Heading>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {copy.intro}
          </p>
        </div>

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
          {/* Línea conectora (solo escritorio, con las 4 columnas) */}
          <span
            aria-hidden="true"
            className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-border lg:block"
          />
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative flex gap-4 lg:flex-col lg:gap-4">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-base font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
