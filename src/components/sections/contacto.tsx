import { ContactForm } from "@/components/contact/contact-form";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { SectionHeading } from "./section-heading";
import { sectionsCopy } from "@/content/sections";
import { site } from "@/content/site";

/** Sección de contacto: vía rápida por WhatsApp + formulario con Server Action. */
export function Contacto() {
  const copy = sectionsCopy.contacto;
  return (
    <section id="contacto" className="bg-muted py-section lg:py-section-lg">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          heading={copy.heading}
          intro={copy.intro}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Vía rápida: WhatsApp y correo */}
          <div>
            <Heading as="h3" size="md">
              {copy.whatsappHeading}
            </Heading>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {copy.whatsappText}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={site.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-primary px-6 font-medium text-primary-foreground shadow-soft transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto [&_svg]:size-5"
              >
                <WhatsAppIcon />
                Escríbenos por WhatsApp
              </a>
              <a
                href={site.links.email}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <MailIcon />
                {site.contact.email}
              </a>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
              {site.location}
            </p>
          </div>

          {/* Formulario */}
          <Card className="p-6 sm:p-8">
            <Heading as="h3" size="md" className="mb-6">
              {copy.formHeading}
            </Heading>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 004.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0012.04 2zm5.8 14.08c-.24.68-1.42 1.32-1.95 1.36-.5.04-.97.22-3.26-.68-2.76-1.09-4.52-3.9-4.66-4.08-.14-.18-1.12-1.49-1.12-2.85 0-1.36.71-2.02.97-2.3.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.59.81 2.03.88 2.18.07.14.12.31.02.49-.09.18-.14.29-.28.45-.14.16-.3.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.56 1.95 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.11.07.64-.17 1.32z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
    </svg>
  );
}
