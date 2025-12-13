/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimize for production
  reactStrictMode: true,
  swcMinify: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Enable compression
  compress: true,
}

module.exports = nextConfig
