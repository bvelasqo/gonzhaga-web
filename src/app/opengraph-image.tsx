import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { ImageResponse } from "next/og";
import { AMBER_PATHS, INK_PATHS, LOGO_TRANSFORM } from "@/components/brand/logo-paths";

export const alt = "Gonzhaga — Software, IA y nube para PyMEs de Colombia y LATAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#17150F";
const CREAM = "#F5F1EA";
const AMBER = "#B45309";
const MUTED = "#B6AA97";

export default async function OpengraphImage() {
  const fontPath = fileURLToPath(
    new URL("./og-space-grotesk-600.woff", import.meta.url),
  );
  const font = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          padding: "76px 80px",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width={104} height={58} viewBox="0 0 2752 1536">
            <g transform={LOGO_TRANSFORM}>
              {INK_PATHS.map((d, i) => (
                <path key={`i${i}`} d={d} fill={CREAM} />
              ))}
              {AMBER_PATHS.map((d, i) => (
                <path key={`a${i}`} d={d} fill={AMBER} />
              ))}
            </g>
          </svg>
          <span style={{ fontSize: 46, fontWeight: 600, color: CREAM }}>
            Gonzhaga
          </span>
        </div>

        {/* Mensaje */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 600,
              color: CREAM,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Software, IA y nube para tu PyME, hechos por ingenieros.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 30,
              color: MUTED,
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: AMBER,
              }}
            />
            Ingeniería & Software — Barbosa, Antioquia, Colombia
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: font, weight: 600, style: "normal" },
      ],
    },
  );
}
