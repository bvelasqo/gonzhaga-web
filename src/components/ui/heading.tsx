import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentProps<"h2"> & {
  /** Nivel semántico del encabezado. */
  as?: "h1" | "h2" | "h3" | "h4";
  /** Tamaño visual, independiente del nivel semántico. */
  size?: "display" | "xl" | "lg" | "md" | "sm";
};

const sizes = {
  display: "text-4xl sm:text-5xl lg:text-6xl tracking-tight",
  xl: "text-3xl sm:text-4xl tracking-tight",
  lg: "text-2xl sm:text-3xl tracking-tight",
  md: "text-xl sm:text-2xl",
  sm: "text-lg",
} as const;

/** Encabezado con la fuente display (Space Grotesk). Nivel y tamaño desacoplados. */
export function Heading({
  as: Tag = "h2",
  size = "lg",
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold text-balance text-foreground",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
