/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: false,
  },
typescript: {
  ignoreBuildErrors: true,
},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;