import { pipePolvora } from "./casos/pipe-polvora";
import type { CaseStudy } from "./types";

/**
 * Resumen del caso destacado para la sección de la home.
 * Se deriva del caso completo (`/content/casos`) para no duplicar contenido.
 */
export const caseStudy: CaseStudy = {
  name: pipePolvora.name,
  need: pipePolvora.need,
  built: pipePolvora.built,
  stack: pipePolvora.stack.map((s) => s.tech),
  status: pipePolvora.status,
  href: `/casos/${pipePolvora.slug}`,
  captures: pipePolvora.captures.slice(0, 1),
};
