/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Custom webpack configuration
  webpack: (config, { dev }) => {
    if (dev) {
      // Only modify webpack options in development mode
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: /node_modules/, // Ignore node_modules to reduce load
      };
    }

    // Optimization for faster builds in development mode
    config.optimization = {
      splitChunks: {
        maxAsyncRequests: 6,
        maxInitialRequests: 4,
      },
      minimize: false, // Disable minification for faster development builds
    };

    return config;
  },

  // Disable auto prerender indicators for dev
  devIndicators: {
    autoPrerender: false,
  },

  // Add support for remote images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/profile_images/**',
      },
    ],
  },
};

export default nextConfig;
