/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Ensuring peer-dependency resolution for Sanity Studio inside App Router
  serverExternalPackages: ["sanity", "next-sanity"],
};

export default nextConfig;
