/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "community.cloudflare.steamstatic.com",
        port: "",
        pathname: "/public/images/signinthroughsteam/**",
      },
    ],
  },
};

module.exports = nextConfig;
