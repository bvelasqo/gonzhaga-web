import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { hero } from "@/content/hero";
import { site } from "@/content/site";

/** Hero: titular tipográfico como único momento audaz, con el isotipo de marca al fondo. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Isotipo de marca como presencia sutil, recortado al borde derecho */}
      <LogoMark
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 hidden h-[34rem] w-auto text-foreground/[0.035] lg:block"
      />

      <Container className="relative">
        <div className="hero-reveal max-w-3xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
            {site.location}
          </p>
        </div>
      </Container>
    </section>
  );
}
