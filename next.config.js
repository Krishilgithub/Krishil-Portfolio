/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com", "img.freepik.com"],
  },
};

module.exports = nextConfig;
