import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CM Punjab Green Tractor Scheme 2026: 10 Lakh PKR Subsidy Online Apply',
  description: 'CM Punjab Green Tractor Scheme 2026 online application at gts.punjab.gov.pk. 10 Lakh PKR subsidy per tractor, land eligibility (6 to 50 acres), and balloting.',
  openGraph: {
    title: 'CM Punjab Green Tractor Scheme 2026: 10 Lakh PKR Subsidy Online Apply',
    description: 'CM Punjab Green Tractor Scheme 2026 online application at gts.punjab.gov.pk. 10 Lakh PKR subsidy per tractor, land eligibility (6 to 50 acres), and balloting.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/loans/punjab-green-tractor-scheme-2026',
  },
};

export default function Page() {
  const article = ARTICLES['punjab-green-tractor-scheme-2026'];
  return <ArticleLayout article={article} />;
}

