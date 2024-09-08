/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          // optionally specify the pathname to limit the scope
          // pathname: '/**',
        },
      ],
    },
  }
  
  export default nextConfig
  