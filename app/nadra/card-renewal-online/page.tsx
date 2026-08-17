import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA CNIC Renewal Online Guide 2026: Mobile App & Portal Process',
  description: 'Step-by-step online CNIC renewal guide using the Pak-ID app and web portal. Learn fingerprint scanning tips, photo specs, fee rates (PKR 750), and home delivery timelines.',
  openGraph: {
    title: 'NADRA CNIC Renewal Online Guide 2026: Mobile App & Portal Process',
    description: 'Step-by-step online CNIC renewal guide using the Pak-ID app and web portal. Learn fingerprint scanning tips, photo specs, fee rates (PKR 750), and home delivery timelines.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/nadra/card-renewal-online',
  },
};

export default function Page() {
  const article = ARTICLES['card-renewal-online'];
  return <ArticleLayout article={article} />;
}

