import { pipePolvora } from "./pipe-polvora";
import type { CaseStudyFull } from "./types";

/**
 * Registro de casos de estudio. Para agregar un caso nuevo:
 * 1. Crea `src/content/casos/<slug>.ts` siguiendo el modelo de pipe-polvora.
 * 2. Impórtalo y añádelo a este arreglo.
 * La ruta /casos/[slug] y la lista en /casos lo toman automáticamente.
 */
export const casos: CaseStudyFull[] = [pipePolvora];

export function getCaso(slug: string): CaseStudyFull | null {
  return casos.find((c) => c.slug === slug) ?? null;
}

export function getAllCasoSlugs(): string[] {
  return casos.map((c) => c.slug);
}

export type { CaseStudyFull } from "./types";
