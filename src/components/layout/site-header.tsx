"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { CtaLink, NavItem } from "@/content/types";

const defaultNav: NavItem[] = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/casos", label: "Casos" },
  { href: "/contacto", label: "Contacto" },
];

const defaultCta: CtaLink = { label: "Hablemos", href: "/contacto" };

type SiteHeaderProps = {
  nav?: NavItem[];
  cta?: CtaLink;
};

/** Encabezado global fijo con navegación y menú móvil accesible. */
export function SiteHeader({
  nav = defaultNav,
  cta = defaultCta,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  // Cierra el menú al pulsar Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const ctaProps = cta.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Gonzhaga — inicio"
          className="shrink-0 rounded-[var(--radius-sm)]"
          onClick={() => setOpen(false)}
        >
          <Logo size="md" />
        </Link>

        {/* Navegación de escritorio */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={cta.href}
            {...ctaProps}
            className={cn(
              buttonVariants({ variant: "primary", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            {cta.label}
          </Link>

          {/* Botón de menú móvil */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      {/* Panel móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <Container className="flex flex-col py-3">
          <nav className="flex flex-col" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={cta.href}
            {...ctaProps}
            onClick={() => setOpen(false)}
            className={`mt-3 ${buttonVariants({ variant: "primary", size: "md" })}`}
          >
            {cta.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}
