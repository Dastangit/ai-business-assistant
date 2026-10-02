/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dos layouts raíz (español e inglés): el 404 de URLs inexistentes lo da app/global-not-found.js
  experimental: { globalNotFound: true },
  // La página de la auditoría cambió de dirección: los enlaces antiguos (Instagram, Google) siguen funcionando
  redirects() {
    return [
      {
        source: '/servicios/auditoria-360',
        destination: '/servicios/auditoria-negocio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
