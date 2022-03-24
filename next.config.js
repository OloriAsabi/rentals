/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path:"/",
    domains: ['raw.githubusercontent.com',
    'bayut-production.s3.eu-central-1.amazonaws.com'],
  }
}

module.exports = nextConfig
