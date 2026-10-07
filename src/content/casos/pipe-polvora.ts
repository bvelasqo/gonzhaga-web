import type { CaseStudyFull } from "./types";

export const pipePolvora: CaseStudyFull = {
  slug: "pipe-polvora",
  name: "Pipe Pólvora",
  summary:
    "Plataforma de e-commerce para registrar pedidos y seguir su estado, en producción.",

  // Resúmenes para la tarjeta de la home
  need: "Pipe Pólvora vende pólvora artesanal y necesitaba recibir y organizar sus pedidos sin perder el control del estado de cada uno.",
  built:
    "Construimos una plataforma de e-commerce para registrar pedidos y hacerles seguimiento, desde que entran hasta que se entregan.",
  status: "En producción, con soporte",

  // Página de caso
  context:
    "Pipe Pólvora es un negocio colombiano que vende pólvora artesanal y productos pirotécnicos para eventos. Reciben pedidos de clientes en todo el país, en buena parte a través de WhatsApp.",
  challenge:
    "Los pedidos llegaban por mensajes sueltos y se anotaban a mano. Era fácil perder el rastro de qué había pedido cada cliente y en qué estado iba cada pedido, sobre todo en temporada alta.",
  solutionIntro:
    "Construimos una plataforma de e-commerce a la medida para centralizar los pedidos y darles seguimiento de punta a punta.",
  features: [
    {
      title: "Catálogo de productos",
      description:
        "Productos organizados por categorías, con fotos y descripciones, listos para explorar desde el celular.",
    },
    {
      title: "Registro de pedidos",
      description:
        "Los clientes arman su pedido y lo registran en línea, sin depender de un chat.",
    },
    {
      title: "Seguimiento de estado",
      description:
        "Cada pedido tiene un estado visible que se actualiza para el cliente y para el equipo, desde que entra hasta que se entrega.",
    },
    {
      title: "Autenticación",
      description:
        "Inicio de sesión seguro para los clientes y para el equipo, sin construir el login desde cero.",
    },
    {
      title: "Panel de administración",
      description:
        "Un panel donde el equipo gestiona los productos, ve los pedidos y actualiza sus estados en un solo lugar.",
    },
  ],
  stack: [
    {
      tech: "Next.js",
      reason:
        "Para una web rápida y bien posicionada, con despliegue sencillo.",
    },
    {
      tech: "Supabase",
      reason:
        "Base de datos Postgres gestionada para guardar productos y pedidos.",
    },
    {
      tech: "Prisma",
      reason: "Acceso a datos tipado y seguro, que mantiene el código limpio.",
    },
    {
      tech: "Clerk",
      reason: "Autenticación lista para producción, sin reinventarla.",
    },
    {
      tech: "Vercel",
      reason: "Hosting con escalado automático y entornos de previsualización.",
    },
  ],
  result:
    "La plataforma está entregada y en producción. Pipe Pólvora recibe y organiza sus pedidos desde un solo lugar, y Gonzhaga se encarga del mantenimiento con un contrato de soporte.",
  nextPhase: {
    title: "Pagos en línea",
    description:
      "La siguiente fase es integrar pagos en línea para que los clientes paguen al momento de registrar su pedido.",
  },

  captures: [
    {
      src: "/casos/pipe-polvora/landing_page.png",
      alt: "Página de inicio de la plataforma de Pipe Pólvora",
    },
    {
      src: "/casos/pipe-polvora/catalogo.png",
      alt: "Catálogo de productos de Pipe Pólvora",
    },
    {
      src: "/casos/pipe-polvora/dashboard.png",
      alt: "Panel de administración y seguimiento de pedidos de Pipe Pólvora",
    },
  ],

  // Pendientes reales: no se inventan.
  testimonial: null, // [PENDIENTE: testimonio del cliente]
  metrics: null, // [PENDIENTE: métricas del proyecto]
};
