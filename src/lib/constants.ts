/** Datos de contacto de Gonzhaga. Centralizados para reutilizar en todo el sitio. */

/** Número de WhatsApp (formato internacional, sin "+") desde variable de entorno. */
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? "573244483045";

/** Mensaje prellenado al abrir WhatsApp. */
const WHATSAPP_MESSAGE = "Hola Gonzhaga, quiero hablar sobre un proyecto";

/** Da formato a un número colombiano (57 + 10 dígitos) para mostrarlo. */
function formatWhatsapp(num: string): string {
  const digits = num.replace(/\D/g, "");
  if (digits.startsWith("57") && digits.length === 12) {
    const n = digits.slice(2);
    return `+57 ${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6)}`;
  }
  return `+${digits}`;
}

export const CONTACT = {
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: formatWhatsapp(WHATSAPP_NUMBER),
  email: "gonzhagasas@gmail.com",
} as const;

export const LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`,
  email: `mailto:${CONTACT.email}`,
} as const;

/** Año actual, calculado al cargar el módulo (en build) para no leer la hora en render. */
export const CURRENT_YEAR = new Date().getFullYear();

/** URL pública del sitio (para metadata, sitemap, OG, JSON-LD). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gonzhaga.com"
).replace(/\/$/, "");
