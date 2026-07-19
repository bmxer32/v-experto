/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 Этот блок заставит Next.js выключить Turbopack и использовать Webpack
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;