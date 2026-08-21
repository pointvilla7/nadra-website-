import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SECP Company Registration Online 2026 – Pvt Ltd Formation Guide | Pakistan Info Hub',
  description:
    'Register a Private Limited (Pvt Ltd) or Single Member Company (SMC) online in Pakistan via SECP eServices in 4 hours. Fees, Memorandum & Articles of Association.',
  openGraph: {
    title: 'SECP Company Registration Online 2026 – Pvt Ltd Formation Guide',
    description:
      'Register a Private Limited (Pvt Ltd) or Single Member Company (SMC) online in Pakistan via SECP eServices in 4 hours. Fees, Memorandum & Articles of Association.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026',
  },
  alternates: { canonical: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pakistaninfohub.com' },
        { '@type': 'ListItem', position: 2, name: 'Business', item: 'https://www.pakistaninfohub.com/business' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SECP Company Registration Online 2026',
          item: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026',
        },
      ],
    },
    {
      '@type': 'Article',
      headline: 'SECP Company Registration Online 2026: Private Limited & SMC Formation Guide',
      description:
        'Complete regulatory guide for incorporating a Private Limited Company or Single Member Company online through the SECP eServices portal.',
      author: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      publisher: { '@type': 'Organization', name: 'Pakistan Info Hub', url: 'https://www.pakistaninfohub.com' },
      datePublished: '2026-08-15',
      dateModified: '2026-08-21',
      mainEntityOfPage: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does SECP online company registration take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Through SECP eServices and digital incorporation workflows, company registration is typically approved within 4 hours to 1 working day if documents are complete.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documents are required to register a company in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copies of CNIC/NICOP/Passports of all proposed directors, Memorandum of Association (MoA), Articles of Association (AoA), and digital payment receipts.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const article = ARTICLES['secp-company-registration-online-2026'];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleLayout article={article} />
    </>
  );
}
