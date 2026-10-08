import type { TeamMember } from "./types";

/** Equipo fundador. */
export const team: TeamMember[] = [
  {
    name: "Brandon Velásquez",
    role: "Fundador · Ingeniero de Sistemas Full Stack",
    photo: "/team/foto_brandon.jpeg",
    summary:
      "5+ años diseñando y construyendo sistemas backend escalables, microservicios y plataformas empresariales para empresas de Colombia y SaaS internacionales.",
    strengths: [
      "Plataformas empresariales de principio a fin: arquitectura, desarrollo y despliegue (incluye plataformas multi-tenant construidas como único ingeniero)",
      "Microservicios y backend escalable con Node.js, TypeScript, NestJS, GraphQL y SQL/MongoDB",
      "Infraestructura cloud (AWS) y backends para soluciones con IA",
    ],
    badges: [
      "Node.js",
      "Python",
      "TypeScript",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Linux",
    ],
    credentials: {
      label: "Formación",
      items: ["Ingeniería de Sistemas, Universidad de Medellín"],
    },
    linkedin: "https://www.linkedin.com/in/brandon-velasquez-osorio/",
  },
  {
    name: "Camilo Jiménez Jaramillo",
    role: "Cofundador. Desarrollador full stack · IA y nube",
    photo: "/team/foto_camilo.jpg",
    summary: "Desarrollador backend con experiencia en Node.js y Python, especializado en arquitecturas backend escalables, autenticación, integraciones de pago y desarrollo de IA.",
    strengths: [
      "Asistentes con IA (LangChain / LangGraph) y FastAPI",
      "Infraestructura en AWS, Azure y Huawei Cloud",
      "Automatización con Terraform y Kubernetes",
    ],
    badges: [
      "Node.js",
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Azure",
      "Huawei Cloud"
    ],
    credentials: {
      label: "Certificaciones en la nube",
      items: [
        "Huawei HCCDP Solution Architectures (2026)",
        "Huawei HCIP Cloud Service Solutions Architect (2025)",
        "Huawei HCIA Cloud Service (2025)",
        "AWS Certified Cloud Practitioner (2025)",
      ],
    },
    linkedin: "https://www.linkedin.com/in/camilo-jimenez-jaramillo-13876a237/",
  },
];
