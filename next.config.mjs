/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/parcerias',
        destination: '/atividades',
        permanent: true,
      },
      {
        source: '/sobre',
        destination: '/quem-somos',
        permanent: true,
      },
      {
        source: '/contato',
        destination: '/contactos',
        permanent: true,
      },
      {
        source: '/properties',
        destination: '/#accommodations',
        permanent: true,
      },
      {
        source: '/en/properties',
        destination: '/#accommodations',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
