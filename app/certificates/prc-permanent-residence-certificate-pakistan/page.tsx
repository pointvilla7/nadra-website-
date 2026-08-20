import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PRC (Permanent Residence Certificate) Form C & D Application',
  description: 'Apply for a Permanent Residence Certificate (PRC) in Sindh and other provinces for MDCAT, medical college quota, and government university admissions.',
  openGraph: {
    title: 'PRC (Permanent Residence Certificate) Form C & D Application',
    description: 'Apply for a Permanent Residence Certificate (PRC) in Sindh and other provinces for MDCAT, medical college quota, and government university admissions.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/certificates/prc-permanent-residence-certificate-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['prc-permanent-residence-certificate-pakistan'];
  return <ArticleLayout article={article} />;
}
