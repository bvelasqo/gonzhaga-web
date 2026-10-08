/** Tipos compartidos del contenido del sitio. */

export type NavItem = {
  href: string;
  label: string;
};

export type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Service = {
  id: string;
  name: string;
  /** El dolor del cliente, en sus palabras. */
  problem: string;
  /** Lo que hacemos por él. */
  solution: string;
  /** El resultado que puede esperar. */
  result: string;
};

export type Differentiator = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

/** Bloque con etiqueta para la tarjeta del equipo (certificaciones, formación, etc.). */
export type Credentials = {
  label: string;
  items: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  /** Ruta a la foto, o null mientras no exista. */
  photo: string | null;
  /** Resumen de 1–2 líneas. Opcional. */
  summary?: string;
  strengths: string[];
  /** Tecnologías destacadas como badges. Opcional. */
  badges?: string[];
  /** Bloque con etiqueta: certificaciones, formación, etc. Opcional. */
  credentials?: Credentials;
  /** URL de LinkedIn, o null mientras no exista. */
  linkedin: string | null;
};

export type Capture = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  name: string;
  need: string;
  built: string;
  stack: string[];
  status: string;
  href: string;
  captures: Capture[];
};
