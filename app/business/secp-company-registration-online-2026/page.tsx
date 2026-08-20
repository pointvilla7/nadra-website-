import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SECP Company Registration Online 2026 – Pvt Ltd Formation Guide',
  description: 'Register a Private Limited (Pvt Ltd) or Single Member Company (SMC) online in Pakistan via SECP eServices in 4 hours. Fees, Memorandum & Articles of Association.',
  openGraph: {
    title: 'SECP Company Registration Online 2026 – Pvt Ltd Formation Guide',
    description: 'Register a Private Limited (Pvt Ltd) or Single Member Company (SMC) online in Pakistan via SECP eServices in 4 hours. Fees, Memorandum & Articles of Association.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/secp-company-registration-online-2026',
  },
};

export default function Page() {
  const article = ARTICLES['secp-company-registration-online-2026'];
  return <ArticleLayout article={article} />;
}
