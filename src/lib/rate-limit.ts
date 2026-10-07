/**
 * Rate limiting básico en memoria (por instancia del servidor).
 * Suficiente para frenar spam simple. Para algo robusto en producción
 * con varias instancias, conviene un store compartido (p. ej. Upstash Redis).
 */

type Options = { limit: number; windowMs: number };

const store = new Map<string, number[]>();

export function checkRateLimit(key: string, { limit, windowMs }: Options): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  const hits = (store.get(key) ?? []).filter((t) => t > windowStart);

  if (hits.length >= limit) {
    store.set(key, hits);
    return false;
  }

  hits.push(now);
  store.set(key, hits);
  return true;
}
