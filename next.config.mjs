/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Compress responses (Gzip/Brotli via Next.js built-in)
  compress: true,

  // Disable X-Powered-By header (minor security + bandwidth)
  poweredByHeader: false,

  images: {
    // Prefer AVIF then WebP — best compression ratios
    formats: ['image/avif', 'image/webp'],
    // Reasonable sizes for responsive layout
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Minimize re-optimization calls
    minimumCacheTTL: 31536000, // 1 year
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'pakistaninfohub.com',
          },
        ],
        destination: 'https://www.pakistaninfohub.com/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Security headers on all routes
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      // Long-lived cache for immutable Next.js static chunks
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache public assets (fonts, icons, manifest) for 1 week
      {
        source: '/:file((?!api/).*\\.(?:ico|png|webp|svg|woff2?|ttf|eot))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      // GSC verification file — must be accessible, no caching issues
      {
        source: '/google:file*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      // robots.txt and sitemap.xml — short cache for fast search engine re-crawling
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
