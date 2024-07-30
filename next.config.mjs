/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io", "i.ytimg.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
