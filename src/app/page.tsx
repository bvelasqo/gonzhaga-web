import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Caso } from "@/components/sections/caso";
import { Contacto } from "@/components/sections/contacto";
import { Equipo } from "@/components/sections/equipo";
import { Hero } from "@/components/sections/hero";
import { PorQue } from "@/components/sections/por-que";
import { Proceso } from "@/components/sections/proceso";
import { Servicios } from "@/components/sections/servicios";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { headerCta, nav } from "@/content/site";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <SiteHeader nav={nav} cta={headerCta} />
      <main>
        <Hero />
        <Servicios />
        <Caso />
        <Equipo />
        <PorQue />
        <Proceso />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  );
}
