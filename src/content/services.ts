import type { Service } from "./types";

/** Los 5 servicios, en lenguaje de negocio: problema → lo que hacemos → resultado. */
export const services: Service[] = [
  {
    id: "tiendas",
    name: "Tiendas y plataformas de pedidos",
    problem:
      "Vendes por WhatsApp o Instagram y se te pierden pedidos entre tantos mensajes.",
    solution:
      "Creamos tu tienda o plataforma de pedidos con catálogo, carrito, pagos en línea y seguimiento del estado de cada pedido.",
    result:
      "Tus clientes piden solos, a cualquier hora, y tú ves todo organizado en un solo lugar.",
  },
  {
    id: "ia",
    name: "Asistentes de IA y automatizaciones",
    problem:
      "Respondes las mismas preguntas todo el día y pierdes horas en tareas repetitivas.",
    solution:
      "Montamos asistentes con IA en WhatsApp y conectamos tus herramientas para que el trabajo manual se haga solo.",
    result:
      "Atiendes más rápido sin agrandar el equipo y liberas tiempo para lo que de verdad importa.",
  },
  {
    id: "nube",
    name: "Nube y DevOps",
    problem:
      "Tu sistema se cae, va lento o pagas de más por servidores que nadie entiende.",
    solution:
      "Migramos, desplegamos y monitoreamos tu infraestructura en la nube, y ajustamos los costos.",
    result:
      "Todo funciona estable y rápido, y pagas solo por lo que realmente usas.",
  },
  {
    id: "medida",
    name: "Software a medida y dashboards",
    problem:
      "Llevas el negocio en hojas de cálculo sueltas y nadie tiene la foto completa.",
    solution:
      "Construimos software hecho a tu medida y tableros que reúnen tu información en tiempo real.",
    result:
      "Tomas decisiones con datos claros, no con corazonadas.",
  },
  {
    id: "soporte",
    name: "Soporte y mantenimiento",
    problem:
      "Ya tienes un sistema, pero nadie lo cuida, lo actualiza ni lo mejora.",
    solution:
      "Nos encargamos del soporte, las actualizaciones y las mejoras mes a mes.",
    result:
      "Tu software sigue al día y siempre tienes a quién llamar cuando algo pasa.",
  },
];
