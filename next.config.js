/** @type {import('next').NextConfig} */

const nextConfig = {
/*   images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  }, */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  }

};

module.exports = nextConfig;
