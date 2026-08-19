import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Succession Certificate NADRA for Legal Heirs – Law & Fees 2026',
  description: 'Get a Letter of Administration & Succession Certificate from NADRA in 15 days without lengthy civil court cases. Transfer deceased bank funds, shares, and vehicles.',
  openGraph: {
    title: 'Succession Certificate NADRA for Legal Heirs – Law & Fees 2026',
    description: 'Get a Letter of Administration & Succession Certificate from NADRA in 15 days without lengthy civil court cases. Transfer deceased bank funds, shares, and vehicles.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/certificates/succession-certificate-nadra-legal-heirs',
  },
};

export default function Page() {
  const article = ARTICLES['succession-certificate-nadra-legal-heirs'];
  return <ArticleLayout article={article} />;
}
