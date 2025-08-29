/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/**', // Allows all paths
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static1.srcdn.com',
        pathname: '/**',
      },
    
      {
        protocol: 'https',
        hostname: 'static1.colliderimages.com',
        pathname: '/**',
      },
      // 
      {
        protocol: 'https',
        hostname: 'lh5.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'comicbook.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'media.posterstore.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.movieposters.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'irs.www.warnerbros.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      
      {
        protocol: 'https',
        hostname: 'i.redd.it',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.fabrik.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mir-s3-cdn-cf.behance.net',
        pathname: '/**',
      },
      
      
      
       
      
    ],
  },
};

export default nextConfig;

