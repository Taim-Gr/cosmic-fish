/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  // Remove PWA configuration
  // Remove runtime caching configuration
  // Remove workbox configuration
};

export default nextConfig;
