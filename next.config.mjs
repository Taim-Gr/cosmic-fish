/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
