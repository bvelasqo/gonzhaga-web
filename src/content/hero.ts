import type { CtaLink } from "./types";

/** Contenido del hero. */
export const hero = {
  headline: "Habla directo con los ingenieros que construyen tu software.",
  subtitle:
    "Software a medida, automatizaciones con IA e infraestructura en la nube para PyMEs de Colombia y LATAM.",
  primaryCta: { label: "Agenda una llamada", href: "#contacto" } as CtaLink,
  secondaryCta: { label: "Ver servicios", href: "#servicios" } as CtaLink,
  /** Los tres frentes en los que trabajamos, para contexto rápido. */
  pillars: ["Software", "Inteligencia artificial", "Nube"],
} as const;
