import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/casos/case-study-view";
import { getAllCasoSlugs, getCaso } from "@/content/casos";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCasoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return {};
  const title = `${caso.name} — Caso de estudio`;
  const url = `/casos/${caso.slug}`;
  return {
    title,
    description: caso.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${title} · ${site.name}`,
      description: caso.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description: caso.summary,
    },
  };
}

export default async function CasoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) notFound();
  return <CaseStudyView caso={caso} />;
}
