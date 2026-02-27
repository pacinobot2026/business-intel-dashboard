/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WORKSPACE_PATH: process.env.WORKSPACE_PATH || 'C:\\Users\\Administrator\\.openclaw\\workspace'
  }
}

module.exports = nextConfig
