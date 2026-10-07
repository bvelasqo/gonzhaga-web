import { SITE_URL } from "@/lib/constants";
import { services } from "@/content/services";
import { site } from "@/content/site";

/**
 * Datos estructurados (JSON-LD) de la empresa.
 * El contenido es estático y propio, así que es seguro inyectarlo.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    email: site.contact.email,
    telephone: `+${site.contact.whatsappNumber}`,
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "Place", name: "Latinoamérica" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barbosa",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    knowsLanguage: ["es"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
