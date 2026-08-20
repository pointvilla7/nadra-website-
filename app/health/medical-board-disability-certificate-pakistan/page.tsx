import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Medical Board Disability Certificate & Special CNIC in Pakistan",
  description: "Apply for a government Disability Certificate from District Medical Board. Get NADRA Special CNIC (Wheelchair Logo), 50% PIA/Rail fare discount, and job quotas.",
  openGraph: {
    title: "Medical Board Disability Certificate & Special CNIC in Pakistan",
    description: "Apply for a government Disability Certificate from District Medical Board. Get NADRA Special CNIC (Wheelchair Logo), 50% PIA/Rail fare discount, and job quotas.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/health/medical-board-disability-certificate-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['medical-board-disability-certificate-pakistan'];
  return <ArticleLayout article={article} />;
}
