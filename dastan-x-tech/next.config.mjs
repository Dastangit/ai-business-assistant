/** @type {import('next').NextConfig} */
const nextConfig = {
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
