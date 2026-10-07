import { z } from "zod";
import { services } from "@/content/services";

/** Opciones del select de servicio, derivadas del contenido. */
export const serviceOptions = services.map((s) => ({
  value: s.id,
  label: s.name,
}));

const serviceIds = services.map((s) => s.id) as [string, ...string[]];

/** Esquema de validación del formulario de contacto (cliente y servidor). */
export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, { error: "Dinos tu nombre." })
    .max(80, { error: "El nombre es muy largo." }),
  empresa: z
    .string()
    .trim()
    .max(80, { error: "El nombre de la empresa es muy largo." })
    .optional()
    .or(z.literal("")),
  correo: z.email({ error: "Escribe un correo válido." }),
  whatsapp: z
    .string()
    .trim()
    .min(7, { error: "Escribe un número válido." })
    .max(20, { error: "El número es muy largo." })
    .regex(/^[0-9+\s()\-.]+$/, { error: "Usa solo números y símbolos de teléfono." }),
  servicio: z.enum(serviceIds, { error: "Elige un servicio." }),
  descripcion: z
    .string()
    .trim()
    .min(10, { error: "Cuéntanos un poco más (mínimo 10 caracteres)." })
    .max(2000, { error: "El mensaje es muy largo." }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type FieldErrors = Record<string, string[] | undefined>;

/** Valida un objeto de valores y devuelve errores por campo (o null si es válido). */
export function validateContact(values: unknown):
  | { success: true; data: ContactInput }
  | { success: false; errors: FieldErrors } {
  const parsed = contactSchema.safeParse(values);
  if (parsed.success) return { success: true, data: parsed.data };
  return { success: false, errors: z.flattenError(parsed.error).fieldErrors };
}
