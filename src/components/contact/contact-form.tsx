"use client";

import { startTransition, useActionState, useId, useState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import {
  serviceOptions,
  validateContact,
  type FieldErrors,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle" };

const emptyValues = {
  nombre: "",
  empresa: "",
  correo: "",
  whatsapp: "",
  servicio: "",
  descripcion: "",
};

const fieldClass =
  "w-full rounded-[var(--radius-md)] border border-input bg-background px-4 py-2.5 text-foreground " +
  "placeholder:text-muted-foreground/60 transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring " +
  "aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const [values, setValues] = useState(emptyValues);
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const baseId = useId();

  const update =
    (name: keyof typeof emptyValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [name]: e.target.value }));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Siempre controlamos el envío nosotros (evita el reset automático del form de React).
    e.preventDefault();
    const result = validateContact(values);
    if (!result.success) {
      setClientErrors(result.errors);
      return;
    }
    setClientErrors({});

    const fd = new FormData();
    for (const [key, value] of Object.entries(values)) fd.set(key, value);
    // Honeypot: lo lee de su input oculto (sin controlar) por si un bot lo llenó.
    const honeypot = e.currentTarget.elements.namedItem("sitio_web");
    fd.set("sitio_web", honeypot instanceof HTMLInputElement ? honeypot.value : "");

    startTransition(() => formAction(fd));
  }

  // Combina errores de cliente (inmediatos) con los del servidor.
  const errorFor = (field: string): string | undefined =>
    (clientErrors[field] ?? state.errors?.[field])?.[0];

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-[var(--radius-lg)] border border-success/30 bg-success/10 p-6"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckIcon />
        </span>
        <p className="font-display text-lg font-semibold">Mensaje enviado</p>
        <p className="text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot anti-spam: invisible para personas, tentador para bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${baseId}-sitio_web`}>No llenar este campo</label>
        <input id={`${baseId}-sitio_web`} type="text" name="sitio_web" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${baseId}-nombre`} name="nombre" label="Nombre" error={errorFor("nombre")} required>
          {(props) => (
            <input type="text" autoComplete="name" placeholder="Tu nombre" value={values.nombre} onChange={update("nombre")} {...props} />
          )}
        </Field>
        <Field id={`${baseId}-empresa`} name="empresa" label="Empresa" error={errorFor("empresa")}>
          {(props) => (
            <input type="text" autoComplete="organization" placeholder="Opcional" value={values.empresa} onChange={update("empresa")} {...props} />
          )}
        </Field>
        <Field id={`${baseId}-correo`} name="correo" label="Correo" error={errorFor("correo")} required>
          {(props) => (
            <input type="email" autoComplete="email" inputMode="email" placeholder="tu@correo.com" value={values.correo} onChange={update("correo")} {...props} />
          )}
        </Field>
        <Field id={`${baseId}-whatsapp`} name="whatsapp" label="WhatsApp" error={errorFor("whatsapp")} required>
          {(props) => (
            <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+57 300 000 0000" value={values.whatsapp} onChange={update("whatsapp")} {...props} />
          )}
        </Field>
      </div>

      <Field id={`${baseId}-servicio`} name="servicio" label="¿En qué te ayudamos?" error={errorFor("servicio")} required>
        {(props) => (
          <select value={values.servicio} onChange={update("servicio")} {...props}>
            <option value="" disabled>
              Elige un servicio
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      </Field>

      <Field id={`${baseId}-descripcion`} name="descripcion" label="Cuéntanos brevemente" error={errorFor("descripcion")} required>
        {(props) => (
          <textarea
            rows={4}
            placeholder="¿Qué necesitas o qué te está frenando hoy?"
            value={values.descripcion}
            onChange={update("descripcion")}
            {...props}
            className={cn(fieldClass, "resize-y")}
          />
        )}
      </Field>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-[var(--radius-md)] border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-primary px-6 font-medium text-primary-foreground shadow-soft transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60 disabled:pointer-events-none"
      >
        {pending ? (
          <>
            <Spinner /> Enviando…
          </>
        ) : (
          "Enviar mensaje"
        )}
      </button>

      <p className="text-xs text-muted-foreground">
        Te responderemos a tu correo o WhatsApp. No compartimos tus datos.
      </p>
    </form>
  );
}

type FieldRenderProps = {
  id: string;
  name: string;
  className: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
  required?: boolean;
};

function Field({
  id,
  name,
  label,
  error,
  required,
  children,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  children: (props: FieldRenderProps) => React.ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children({
        id,
        name,
        required,
        className: fieldClass,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
