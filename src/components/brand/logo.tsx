import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";

type LogoProps = {
  className?: string;
  /** Muestra la línea "Ingeniería & Software" bajo el nombre. */
  tagline?: boolean;
  /** Tamaño del lockup. */
  size?: "sm" | "md" | "lg";
};

const markSize = {
  sm: "h-7",
  md: "h-9",
  lg: "h-12",
} as const;

const wordSize = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
} as const;

/**
 * Lockup de marca: isotipo (SVG a prueba de tema) + wordmark "Gonzhaga" en
 * Space Grotesk. Hereda el color del texto, así funciona en claro y oscuro.
 */
export function Logo({ className, tagline = false, size = "md" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn(markSize[size], "w-auto")} aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-semibold tracking-tight",
            wordSize[size],
          )}
        >
          Gonzhaga
        </span>
        {tagline && (
          <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            Ingeniería &amp; Software
          </span>
        )}
      </span>
    </span>
  );
}
