"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageZoomProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Muestra una imagen que, al hacer clic, se amplía en una capa modal animada.
 * Accesible: role dialog, cierre con Escape o clic en el fondo, foco gestionado.
 */
export function ImageZoom({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  priority,
}: ImageZoomProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-card",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          <ExpandIcon /> Ampliar
        </span>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
            className="lightbox-scrim fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background text-foreground shadow-lift transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
              <CloseIcon />
            </button>
            <figure
              onClick={(e) => e.stopPropagation()}
              className="lightbox-figure max-h-full w-full max-w-5xl overflow-hidden rounded-[var(--radius-lg)] shadow-lift"
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(min-width: 1024px) 80vw, 95vw"
                className="h-auto max-h-[85vh] w-full object-contain"
              />
            </figure>
          </div>,
          document.body,
        )}
    </>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
