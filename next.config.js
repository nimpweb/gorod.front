/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.plugins.push(
        new Dotenv({
          path: `./.env.${
            process.env.NODE_ENV === "production" ? "production" : "development"
          }`,
        })
      )
      return config
  }
}

module.exports = nextConfig
