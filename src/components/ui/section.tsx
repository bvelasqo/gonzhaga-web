import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.ComponentProps<"section"> & {
  /** Tono de fondo de la sección. */
  tone?: "default" | "muted" | "ink";
  /** Si es true, envuelve el contenido en un Container. */
  contained?: boolean;
  containerSize?: "default" | "wide" | "narrow";
};

const tones = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  ink: "bg-foreground text-background",
} as const;

/** Bloque vertical de página con espaciado y tono consistentes. */
export function Section({
  className,
  tone = "default",
  contained = true,
  containerSize = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-section lg:py-section-lg", tones[tone], className)}
      {...props}
    >
      {contained ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}
