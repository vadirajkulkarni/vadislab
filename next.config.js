// Next.js Turbopack configuration
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  turbopack: {},
  webpack: (config) => {
    // enable MDX loader
    config.module.rules.push({
      test: /\.mdx?$/,
      use: { loader: '@mdx-js/loader' },
    });
    return config;
  },
};
