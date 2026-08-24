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
      // 1. Apex domain to www canonical redirect
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
      // 2. Legacy category root redirects (exact match, no trailing slash chain)
      {
        source: '/marriage-family',
        destination: '/family-registration',
        permanent: true,
      },
      {
        source: '/marriage-family/:slug+',
        destination: '/family-registration/:slug+',
        permanent: true,
      },
      {
        source: '/disaster-alerts',
        destination: '/alerts',
        permanent: true,
      },
      {
        source: '/disaster-alerts/:slug+',
        destination: '/alerts/:slug+',
        permanent: true,
      },
      // 3. Merged & Alias page redirects (1-hop direct to final live page)
      {
        source: '/legal/police-character-certificate-apply-online',
        destination: '/certificates/police-character-certificate-online-apply-2026',
        permanent: true,
      },
      {
        source: '/legal/police-character-certificate-online-punjab',
        destination: '/certificates/police-character-certificate-online-apply-2026',
        permanent: true,
      },
      {
        source: '/certificates/police-character-certificate-online-punjab',
        destination: '/certificates/police-character-certificate-online-apply-2026',
        permanent: true,
      },
      {
        source: '/health/sehat-card-eligibility-checker-2026',
        destination: '/welfare/sehat-card-eligibility-checker-2026',
        permanent: true,
      },
      {
        source: '/finance/withholding-tax-rates-filers-non-filers',
        destination: '/tax/withholding-tax-rates-filers-non-filers',
        permanent: true,
      },
      {
        source: '/finance/iban-validator-pakistan-2026',
        destination: '/finance/pakistan-iban-number-check-validator-2026',
        permanent: true,
      },
      {
        source: '/loans/government-loan-emi-calculator-2026',
        destination: '/loans/emi-calculator-2026',
        permanent: true,
      },
      {
        source: '/overseas/opf-membership-card-benefits-2026',
        destination: '/overseas/opf-scholarship-children-spouses-overseas-pakistanis-2026',
        permanent: true,
      },
      {
        source: '/certificates/domicile-certificate-online-apply-punjab-sindh-kp-2026',
        destination: '/certificates/domicile-certificate-apply-online',
        permanent: true,
      },
      {
        source: '/jobs/fpsc-online-apply-step-by-step',
        destination: '/jobs/fpsc-online-apply-procedure',
        permanent: true,
      },
      {
        source: '/business/secp-company-registration-online-guide-2026',
        destination: '/business/secp-company-registration-online-2026',
        permanent: true,
      },
      {
        source: '/certificates/birth-certificate-union-council-online-apply-2026',
        destination: '/certificates/birth-certificate-union-council-online',
        permanent: true,
      },
      {
        source: '/education/roll-number-slip-checker',
        destination: '/jobs/roll-number-slip-checker-2026',
        permanent: true,
      },
      {
        source: '/education/mdcat-aggregate-calculator-2026',
        destination: '/education/university-entry-test-guide-nust-fast-comsats-2026',
        permanent: true,
      },
      {
        source: '/hajj-umrah/hajj-eligibility-checker-2026',
        destination: '/hajj-umrah/hajj-application-eligibility-checker-2026',
        permanent: true,
      },
      {
        source: '/hajj-umrah/hajj-balloting-result-2026',
        destination: '/hajj-umrah/hajj-balloting-result-check-online',
        permanent: true,
      },
      {
        source: '/hajj-umrah/hajj-policy-2026-pakistan-application-guide',
        destination: '/hajj-umrah/hajj-registration-portal-pakistan-2026',
        permanent: true,
      },
      {
        source: '/family-registration/family-registration-certificate-frc-apply',
        destination: '/nadra/family-registration-certificate',
        permanent: true,
      },
      {
        source: '/nadra/family-registration-certificate-frc-apply',
        destination: '/nadra/family-registration-certificate',
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
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
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
