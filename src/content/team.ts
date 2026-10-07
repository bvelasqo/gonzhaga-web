import type { TeamMember } from "./types";

/** Equipo fundador. Fotos y LinkedIn quedan pendientes (null). */
export const team: TeamMember[] = [
  {
    name: "Brandon",
    role: "Ingeniero full stack · Producto y desarrollo web",
    photo: "/team/foto_brandon.jpeg",
    strengths: [
      "E-commerce de alto tráfico para marcas internacionales",
      "Next.js, Node.js y TypeScript de punta a punta",
      "Lidera el producto, del diseño a la entrega",
    ],
    linkedin: "https://www.linkedin.com/in/brandon-velasquez-osorio",
  },
  {
    name: "Camilo Jiménez Jaramillo",
    role: "Desarrollador full stack · IA y nube",
    photo: "/team/foto_camilo.jpg",
    strengths: [
      "Asistentes con IA (LangChain / LangGraph) y FastAPI",
      "Infraestructura en AWS, Azure y Huawei Cloud",
      "Automatización con Terraform y Kubernetes",
    ],
    certifications: [
      "Huawei HCCDP Solution Architectures (2026)",
      "Huawei HCIP Cloud Service Solutions Architect (2025)",
      "Huawei HCIA Cloud Service (2025)",
      "AWS Certified Cloud Practitioner (2025)",
    ],
    linkedin: "https://www.linkedin.com/in/camilo-jimenez-jaramillo-13876a237/",
  },
];
