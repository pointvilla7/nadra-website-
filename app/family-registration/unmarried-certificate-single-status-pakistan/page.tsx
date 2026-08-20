import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Unmarried / Single Status Certificate Issuance in Pakistan",
  description: "How to get an Unmarried Certificate (Single Status Certificate) in Pakistan for foreign marriages abroad from Union Council, Assistant Commissioner, and MOFA.",
  openGraph: {
    title: "Unmarried / Single Status Certificate Issuance in Pakistan",
    description: "How to get an Unmarried Certificate (Single Status Certificate) in Pakistan for foreign marriages abroad from Union Council, Assistant Commissioner, and MOFA.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/family-registration/unmarried-certificate-single-status-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['unmarried-certificate-single-status-pakistan'];
  return <ArticleLayout article={article} />;
}
