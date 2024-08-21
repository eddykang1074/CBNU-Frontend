/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['tailwindui.com'],
    // images: {
    //   domains: ['localhost:5000'],
    // },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/img/**',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
