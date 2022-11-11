require("dotenv").config();
const environment = process.env.NODE_ENV || "dev";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: [""],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
