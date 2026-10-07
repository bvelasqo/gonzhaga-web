import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";

type SectionHeadingProps = {
  /** Etiqueta corta de la sección (sentence case). */
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Encabezado de sección. El marcador ámbar (cuadro) retoma el acento del logo
 * y actúa como el elemento estructural recurrente del sitio.
 */
export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "flex items-center gap-2 text-sm font-medium text-primary",
            align === "center" && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className="size-2 rounded-[3px] bg-primary"
          />
          {eyebrow}
        </span>
      )}
      <Heading as="h2" size="xl" className="mt-4">
        {heading}
      </Heading>
      {intro && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
