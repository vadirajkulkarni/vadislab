// Next.js Turbopack configuration
module.exports = {
  reactStrictMode: true,
  turbopack: {},
  output: 'export',   // produces a static `out/` folder — works on Cloudflare Pages, S3, etc.
  images: { unoptimized: true }, // required for static export (no Next.js image server)
};
