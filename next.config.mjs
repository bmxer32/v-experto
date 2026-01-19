/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Картинки нужно оптимизировать иначе, так как на статике нет сервера
  images: {
    unoptimized: true,
  },

  // Твой старый код (оставляем, раз был)
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;  