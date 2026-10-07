import type { Capture } from "@/content/types";

/** Una funcionalidad construida dentro del caso. */
export type CaseFeature = {
  title: string;
  description: string;
};

/** Una tecnología del stack y por qué se eligió. */
export type CaseStackItem = {
  tech: string;
  reason: string;
};

/** Una métrica del caso (cuando exista; nunca inventada). */
export type CaseMetric = {
  value: string;
  label: string;
};

/** Modelo completo de un caso de estudio. */
export type CaseStudyFull = {
  slug: string;
  name: string;
  /** Resumen de una línea para tarjetas y metadatos. */
  summary: string;

  /* Resúmenes cortos usados en la tarjeta de la home */
  need: string;
  built: string;
  status: string;

  /* Secciones de la página de caso */
  context: string;
  challenge: string;
  solutionIntro: string;
  features: CaseFeature[];
  stack: CaseStackItem[];
  result: string;
  nextPhase: { title: string; description: string };

  captures: Capture[];

  /* Pendientes: se dejan en null hasta tenerlos. Nunca se inventan. */
  testimonial: string | null;
  metrics: CaseMetric[] | null;
};
