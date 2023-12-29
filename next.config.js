/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
