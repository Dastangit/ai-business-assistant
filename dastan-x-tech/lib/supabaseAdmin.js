import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Cliente de Supabase SOLO para el servidor. Usa la clave secreta (service role),
// que se salta las reglas RLS: por eso nunca debe llegar al navegador.
// Se crea al usarse (no al importar) para que el build no falle si falta la variable.
let cliente = null;

export function getSupabaseAdmin() {
  if (cliente) return cliente;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const claveSecreta = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !claveSecreta) {
    throw new Error('Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en las variables de entorno');
  }

  cliente = createClient(url, claveSecreta, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cliente;
}
