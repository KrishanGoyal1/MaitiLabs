/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.maitilabs.org',
            port: '',
            pathname: '/static/**',
          },
        ],
      },    
};

export default nextConfig;
