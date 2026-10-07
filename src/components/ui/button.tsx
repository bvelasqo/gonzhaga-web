import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap rounded-[var(--radius-md)] " +
  "transition-[background-color,color,box-shadow,transform] duration-200 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
  "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer " +
  "[&_svg]:size-[1.1em] [&_svg]:shrink-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:brightness-110 hover:shadow-lift",
  secondary:
    "bg-card text-foreground border border-border shadow-soft hover:bg-muted hover:border-foreground/20",
  ghost: "text-foreground hover:bg-muted",
  destructive:
    "bg-destructive text-destructive-foreground shadow-soft hover:brightness-110",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type ButtonVariantProps = { variant?: Variant; size?: Size };

/** Devuelve las clases del botón. Útil para estilar <a>/<Link> como botón. */
export function buttonVariants({
  variant = "primary",
  size = "md",
}: ButtonVariantProps = {}) {
  return cn(base, variants[variant], sizes[size]);
}

type ButtonProps = React.ComponentProps<"button"> & ButtonVariantProps;

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
