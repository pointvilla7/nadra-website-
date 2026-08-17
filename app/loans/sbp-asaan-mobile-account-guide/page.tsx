import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State Bank Asaan Mobile Account (AMA) Guide: Open Bank Account via *2262#',
  description: 'How to open State Bank Asaan Mobile Account (AMA) instantly without internet by dialing *2262# from any mobile phone. Zero fee, instant digital banking.',
  openGraph: {
    title: 'State Bank Asaan Mobile Account (AMA) Guide: Open Bank Account via *2262#',
    description: 'How to open State Bank Asaan Mobile Account (AMA) instantly without internet by dialing *2262# from any mobile phone. Zero fee, instant digital banking.',
    url: 'https://pakistaninfohub.com/loans/sbp-asaan-mobile-account-guide',
  },
};

export default function Page() {
  const article = ARTICLES['sbp-asaan-mobile-account-guide'];
  return <ArticleLayout article={article} />;
}
