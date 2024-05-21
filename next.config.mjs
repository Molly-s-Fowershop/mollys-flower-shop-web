/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  headers: () => [
    {
      source: "/cart",
      headers: [
        {
          key: "Cache-Control",
          value: "no-cache",
        },
      ],
    },
  ],
};

export default nextConfig;
