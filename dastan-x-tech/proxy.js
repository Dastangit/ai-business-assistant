import { NextResponse } from 'next/server';

// Markdown bajo demanda: un agente de IA que pide una página con «Accept: text/markdown»
// recibe su versión en Markdown (app/api/markdown/route.js) en la misma URL. Los navegadores
// nunca lo piden, así que el proxy solo se ejecuta para esos agentes (ver `has` en el matcher).
export function proxy(request) {
  // La ruta pedida viaja en una cabecera: tras el rewrite, la URL que ve la ruta sigue siendo la original
  const headers = new Headers(request.headers);
  headers.set('x-ruta-markdown', request.nextUrl.pathname);
  return NextResponse.rewrite(new URL('/api/markdown', request.url), { request: { headers } });
}

export const config = {
  matcher: [
    {
      // Páginas, no API ni archivos (_next, imágenes, robots.txt, llms.txt…)
      source: '/((?!api|_next|.*\\..*).*)',
      has: [{ type: 'header', key: 'accept', value: '.*text/markdown.*' }],
    },
  ],
};
