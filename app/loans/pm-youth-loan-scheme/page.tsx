import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prime Minister Youth Business & Agriculture Loan Scheme 2026 (PMYB&ALS)',
  description: 'PM Youth Business Loan 2026 application guide (pmyp.gov.pk). Tier 1 (PKR 0.5M @ 0%), Tier 2 (PKR 1.5M @ 5%), Tier 3 (PKR 7.5M @ 7%), eligibility & forms.',
  openGraph: {
    title: 'Prime Minister Youth Business & Agriculture Loan Scheme 2026 (PMYB&ALS)',
    description: 'PM Youth Business Loan 2026 application guide (pmyp.gov.pk). Tier 1 (PKR 0.5M @ 0%), Tier 2 (PKR 1.5M @ 5%), Tier 3 (PKR 7.5M @ 7%), eligibility & forms.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/loans/pm-youth-loan-scheme',
  },
};

export default function Page() {
  const article = ARTICLES['pm-youth-loan-scheme'];
  return <ArticleLayout article={article} />;
}

