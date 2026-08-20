import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BISP Payment Check & Troubleshooting Guide 2026: Campsites & ATMs',
  description: 'Learn how to collect BISP quarterly payment (PKR 10,500). Campsite collection steps, biometric ATM withdrawal, handling agent deductions, and helpline complaints.',
  openGraph: {
    title: 'BISP Payment Check & Troubleshooting Guide 2026: Campsites & ATMs',
    description: 'Learn how to collect BISP quarterly payment (PKR 10,500). Campsite collection steps, biometric ATM withdrawal, handling agent deductions, and helpline complaints.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/welfare/bisp-payment-check',
  },
};

export default function Page() {
  const article = ARTICLES['bisp-payment-check'];
  return <ArticleLayout article={article} />;
}

