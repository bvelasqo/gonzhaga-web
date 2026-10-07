"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { services } from "@/content/services";
import { validateContact, type FieldErrors } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: FieldErrors;
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // 1) Honeypot: si el campo oculto viene lleno, es un bot. Fingimos éxito.
  const honeypot = formData.get("sitio_web");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success", message: "¡Gracias! Te escribiremos pronto." };
  }

  // 2) Rate limiting básico por IP.
  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "desconocida";
  if (!checkRateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 })) {
    return {
      status: "error",
      message:
        "Recibimos varios mensajes desde tu conexión. Intenta de nuevo en unos minutos o escríbenos por WhatsApp.",
    };
  }

  // 3) Validación en servidor (zod).
  const result = validateContact({
    nombre: formData.get("nombre"),
    empresa: formData.get("empresa") ?? "",
    correo: formData.get("correo"),
    whatsapp: formData.get("whatsapp"),
    servicio: formData.get("servicio"),
    descripcion: formData.get("descripcion"),
  });

  if (!result.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      errors: result.errors,
    };
  }

  const data = result.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM ?? "Gonzhaga <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return {
      status: "error",
      message:
        "Ahora mismo no podemos enviar el formulario. Escríbenos por WhatsApp y te respondemos.",
    };
  }

  const servicioLabel =
    services.find((s) => s.id === data.servicio)?.name ?? data.servicio;

  const lines = [
    `Nombre: ${data.nombre}`,
    `Empresa: ${data.empresa || "—"}`,
    `Correo: ${data.correo}`,
    `WhatsApp: ${data.whatsapp}`,
    `Servicio de interés: ${servicioLabel}`,
    "",
    "Mensaje:",
    data.descripcion,
  ];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.correo,
      subject: `Nuevo contacto web: ${data.nombre}${
        data.empresa ? ` · ${data.empresa}` : ""
      }`,
      text: lines.join("\n"),
    });

    if (error) {
      return {
        status: "error",
        message:
          "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.",
      };
    }

    return {
      status: "success",
      message: "¡Gracias! Recibimos tu mensaje y te responderemos muy pronto.",
    };
  } catch {
    return {
      status: "error",
      message:
        "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.",
    };
  }
}
