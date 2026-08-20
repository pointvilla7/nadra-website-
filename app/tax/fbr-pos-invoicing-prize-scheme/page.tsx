import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FBR POS Invoicing & Digital Tax Receipt Verification Guide',
  description: 'Verify official FBR POS invoices on your shopping receipts via the Tax Asaan App. Win monthly cash prizes up to PKR 1 Million through the FBR Prize Scheme.',
  openGraph: {
    title: 'FBR POS Invoicing & Digital Tax Receipt Verification Guide',
    description: 'Verify official FBR POS invoices on your shopping receipts via the Tax Asaan App. Win monthly cash prizes up to PKR 1 Million through the FBR Prize Scheme.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/tax/fbr-pos-invoicing-prize-scheme',
  },
};

export default function Page() {
  const article = ARTICLES['fbr-pos-invoicing-prize-scheme'];
  return <ArticleLayout article={article} />;
}
