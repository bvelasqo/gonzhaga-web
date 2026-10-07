import { CONTACT, CURRENT_YEAR, LINKS } from "@/lib/constants";
import type { CtaLink, NavItem } from "./types";

/** Identidad y datos generales del sitio. */
export const site = {
  name: "Gonzhaga",
  tagline: "Ingeniería & Software",
  description:
    "Estudio de desarrollo de software para PyMEs de Colombia y LATAM. Construimos software, automatizaciones con IA e infraestructura en la nube.",
  location: "Barbosa, Antioquia, Colombia",
  year: CURRENT_YEAR,
  contact: CONTACT,
  links: LINKS,
} as const;

/** Navegación por anclas de la one-page. */
export const nav: NavItem[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#caso", label: "Caso" },
  { href: "#equipo", label: "Equipo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

/** CTA del header. */
export const headerCta: CtaLink = {
  label: "Hablemos",
  href: "#contacto",
};

/** Navegación para subpáginas: las anclas apuntan a la home. */
export const subpageNav: NavItem[] = nav.map((item) => ({
  ...item,
  href: `/${item.href}`,
}));

export const subpageCta: CtaLink = { label: "Hablemos", href: "/#contacto" };
