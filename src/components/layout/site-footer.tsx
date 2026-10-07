import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { CONTACT, CURRENT_YEAR, LINKS } from "@/lib/constants";

/** Pie de página global del sitio. */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <Logo size="md" tagline />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Estudio de desarrollo de software para PyMEs de Colombia y LATAM.
            Construimos software, automatizaciones con IA e infraestructura en la
            nube.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Barbosa, Antioquia, Colombia
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contacto
          </span>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            WhatsApp {CONTACT.whatsappDisplay}
          </a>
          <a
            href={LINKS.email}
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            {CONTACT.email}
          </a>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <span>© {CURRENT_YEAR} Gonzhaga. Todos los derechos reservados.</span>
          <Link href="/casos" className="transition-colors hover:text-foreground">
            Casos
          </Link>
        </Container>
      </div>
    </footer>
  );
}
