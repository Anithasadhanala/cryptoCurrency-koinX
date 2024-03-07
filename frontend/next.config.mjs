/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
 
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'asset.cloudinary.com',
              
          },
      ],
  },
};

export default nextConfig;
