/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com', // <-- HANYA GUNAKAN INI
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com', // <-- TAMBAHKAN INI
        port: '',
        pathname: '/api/**',
      },
    ],
  },
};

module.exports = nextConfig;