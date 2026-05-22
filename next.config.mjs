/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Ensuring peer-dependency resolution for Sanity Studio inside App Router
    serverComponentsExternalPackages: ['sanity', 'next-sanity']
  }
};

export default nextConfig;
