import type { ProcessStep } from "./types";

/** Cómo trabajamos. Es una secuencia real de 4 pasos. */
export const processHeading = "Cómo trabajamos";

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnóstico gratuito",
    description:
      "Entendemos tu negocio y qué te está frenando. Sin costo ni compromiso.",
  },
  {
    title: "Propuesta con alcance y precio",
    description:
      "Te decimos exactamente qué vamos a construir, en cuánto tiempo y cuánto cuesta.",
  },
  {
    title: "Desarrollo por fases con demos",
    description:
      "Avanzamos por etapas y te mostramos avances reales que puedes probar en cada fase.",
  },
  {
    title: "Lanzamiento y soporte",
    description:
      "Ponemos tu software en producción y seguimos contigo con mantenimiento mensual.",
  },
];
