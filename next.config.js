/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gbertl-api.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
