import { cn } from "@/lib/utils";

type Variant = "default" | "accent" | "outline" | "success" | "muted";

const variants: Record<Variant, string> = {
  default: "bg-primary/12 text-primary border border-primary/20",
  accent: "bg-accent/14 text-accent border border-accent/25",
  success: "bg-success/12 text-success border border-success/25",
  outline: "border border-border text-muted-foreground",
  muted: "bg-muted text-muted-foreground",
};

type BadgeProps = React.ComponentProps<"span"> & {
  variant?: Variant;
  /** Usa la fuente monoespaciada (útil para etiquetas técnicas). */
  mono?: boolean;
};

/** Etiqueta compacta para destacar categorías, estados o tecnologías. */
export function Badge({
  className,
  variant = "default",
  mono = false,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium leading-none",
        mono && "font-mono tracking-wide uppercase",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
