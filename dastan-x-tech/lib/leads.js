// El chat guarda en "origen" la página y el interés: "/ · diagnóstico SEO" o "/ · quiere web nueva",
// y desde la versión en inglés termina en " · EN" (a ese cliente se le contesta en inglés).
export function interesDe(origen) {
  if (!origen) return '—';
  const en = origen.endsWith(' · EN') ? ' · EN' : '';
  if (origen.includes('quiere web')) return 'Quiere web nueva' + en;
  if (origen.includes('diagnóstico SEO')) return 'Diagnóstico SEO' + en;
  return origen;
}
