import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'e-Stamping Punjab Challan 32-A Online Payment & Verification',
  description: 'Generate and pay e-Stamp non-judicial stamp papers online in Punjab via estamp.punjab.gov.pk. Pay Challan 32-A for property registry, rent agreements, and affidavits.',
  openGraph: {
    title: 'e-Stamping Punjab Challan 32-A Online Payment & Verification',
    description: 'Generate and pay e-Stamp non-judicial stamp papers online in Punjab via estamp.punjab.gov.pk. Pay Challan 32-A for property registry, rent agreements, and affidavits.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/property/stamp-duty-challan-32a-online-payment',
  },
};

export default function Page() {
  const article = ARTICLES['stamp-duty-challan-32a-online-payment'];
  return <ArticleLayout article={article} />;
}
