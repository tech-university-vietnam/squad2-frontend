/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.jsx", "page.js"],
  images: { domains: ["pix8.agoda.net"] },
};

module.exports = nextConfig;
