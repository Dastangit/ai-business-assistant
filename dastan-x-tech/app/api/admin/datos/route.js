import { NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/adminSession';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

// Todas las lecturas y cambios del panel pasan por aquí, en el servidor.
// El navegador ya no habla con la base de datos: solo con esta ruta, y solo con sesión válida.
const TABLAS = {
  prospectos: { nombre: 'agencias_prospectos', estados: ['sin_auditar', 'contactado'] },
  leads: { nombre: 'leads_web', estados: ['nuevo', 'contactado', 'diagnostico_enviado', 'cliente', 'descartado'] },
};

function noAutorizado() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
}

function tablaDe(valor) {
  return TABLAS[valor] || null;
}

// Convierte las filas a CSV para la copia de seguridad descargable
function aCsv(filas) {
  if (!filas.length) return '';
  const columnas = Object.keys(filas[0]);
  const celda = (v) => {
    const texto = v === null || v === undefined ? '' : String(v);
    return /[",\n;]/.test(texto) ? `"${texto.replace(/"/g, '""')}"` : texto;
  };
  return [columnas.join(','), ...filas.map((f) => columnas.map((c) => celda(f[c])).join(','))].join('\n');
}

export async function GET(request) {
  if (!isAdminRequest(request)) return noAutorizado();

  const { searchParams } = new URL(request.url);
  const tabla = tablaDe(searchParams.get('tabla'));
  if (!tabla) return NextResponse.json({ error: 'Tabla no válida' }, { status: 400 });

  try {
    const { data, error } = await getSupabaseAdmin()
      .from(tabla.nombre)
      .select('*')
      .order('fecha', { ascending: false });
    if (error) throw error;

    if (searchParams.get('formato') === 'csv') {
      const fecha = new Date().toISOString().slice(0, 10);
      // El BOM (\uFEFF) hace que Excel lea bien las tildes y la ñ
      return new NextResponse('\uFEFF' + aCsv(data || []), {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${tabla.nombre}-${fecha}.csv"`,
        },
      });
    }
    return NextResponse.json({ filas: data || [] });
  } catch (error) {
    console.error(`Error al leer ${tabla.nombre}:`, error);
    return NextResponse.json({ error: 'No se pudieron cargar los datos' }, { status: 500 });
  }
}

export async function PATCH(request) {
  if (!isAdminRequest(request)) return noAutorizado();

  const body = await request.json().catch(() => null);
  const tabla = tablaDe(body?.tabla);
  const campo = body?.tabla === 'prospectos' ? 'estado_calificacion' : 'estado';
  if (!tabla || !body?.id || !tabla.estados.includes(body?.estado)) {
    return NextResponse.json({ error: 'Datos no válidos' }, { status: 400 });
  }

  try {
    const { error } = await getSupabaseAdmin()
      .from(tabla.nombre)
      .update({ [campo]: body.estado })
      .eq('id', body.id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(`Error al actualizar ${tabla.nombre}:`, error);
    return NextResponse.json({ error: 'No se pudo actualizar' }, { status: 500 });
  }
}

export async function DELETE(request) {
  if (!isAdminRequest(request)) return noAutorizado();

  const body = await request.json().catch(() => null);
  const tabla = tablaDe(body?.tabla);
  if (!tabla || (!body?.id && body?.todos !== true)) {
    return NextResponse.json({ error: 'Datos no válidos' }, { status: 400 });
  }

  try {
    let consulta = getSupabaseAdmin().from(tabla.nombre).delete();
    consulta = body.todos === true ? consulta.neq('id', 0) : consulta.eq('id', body.id);
    const { error } = await consulta;
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(`Error al borrar en ${tabla.nombre}:`, error);
    return NextResponse.json({ error: 'No se pudo borrar' }, { status: 500 });
  }
}
