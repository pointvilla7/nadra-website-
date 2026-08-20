import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apni Chhat Apna Ghar Scheme 2026: 1.5M PKR Housing Loan Apply',
  description: 'Apni Chhat Apna Ghar Housing Loan 2026 apply online at acag.punjab.gov.pk. 1.5 Million PKR interest-free loan rules, eligibility, and plot documents.',
  openGraph: {
    title: 'Apni Chhat Apna Ghar Scheme 2026: 1.5M PKR Housing Loan Apply',
    description: 'Apni Chhat Apna Ghar Housing Loan 2026 apply online at acag.punjab.gov.pk. 1.5 Million PKR interest-free loan rules, eligibility, and plot documents.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/loans/apni-chhat-apna-ghar',
  },
};

export default function Page() {
  const article = ARTICLES['apni-chhat-apna-ghar'];
  return <ArticleLayout article={article} />;
}

