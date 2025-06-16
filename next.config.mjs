/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [],
    },
    webpack: (config, { dev, isServer }) => {
      // Temporarily disable CSS minimization to fix build issue
      if (!dev && !isServer) {
        config.optimization.minimizer = config.optimization.minimizer.filter(
          (plugin) => plugin.constructor.name !== 'CssMinimizerPlugin'
        );
      }
      return config;
    },
  }
  
export default nextConfig