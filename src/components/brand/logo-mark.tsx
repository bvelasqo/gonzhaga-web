import { AMBER_PATHS, INK_PATHS, LOGO_TRANSFORM } from "./logo-paths";

/**
 * Isotipo "G" de Gonzhaga, a prueba de tema.
 * El trazo principal usa currentColor (toma el color del texto: grafito en claro,
 * crema en oscuro); los acentos quedan en ámbar de marca.
 */
export function LogoMark({
  className,
  title = "Gonzhaga",
  ...props
}: React.ComponentProps<"svg"> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 2752 1536"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <g transform={LOGO_TRANSFORM} stroke="none">
        <g fill="currentColor">
          {INK_PATHS.map((d, i) => (
            <path key={`ink-${i}`} d={d} />
          ))}
        </g>
        <g fill="#B45309">
          {AMBER_PATHS.map((d, i) => (
            <path key={`amber-${i}`} d={d} />
          ))}
        </g>
      </g>
    </svg>
  );
}
