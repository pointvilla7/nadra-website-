import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FBR Cash Withdrawal & Bank Advance Tax Rules for Non-Filers',
  description: 'Understand Section 231AB advance tax on bank cash withdrawals exceeding PKR 50,000 in Pakistan. Learn how filers get complete 0% tax exemption.',
  openGraph: {
    title: 'FBR Cash Withdrawal & Bank Advance Tax Rules for Non-Filers',
    description: 'Understand Section 231AB advance tax on bank cash withdrawals exceeding PKR 50,000 in Pakistan. Learn how filers get complete 0% tax exemption.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/tax/fbr-bank-account-tax-deduction',
  },
};

export default function Page() {
  const article = ARTICLES['fbr-bank-account-tax-deduction'];
  return <ArticleLayout article={article} />;
}
