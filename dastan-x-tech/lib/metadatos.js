// Las páginas con openGraph propio perdían la imagen al compartir: el objeto sustituye al del layout
// y con él la imagen de app/opengraph-image.jsx (o la de /en). Esto mantiene su título y descripción
// y hereda la imagen que Next ya resolvió para esa ruta.
export const conImagenHeredada = (metadata) => async (_props, parent) => {
  const { openGraph } = await parent;
  return { ...metadata, openGraph: { ...metadata.openGraph, images: openGraph?.images } };
};
