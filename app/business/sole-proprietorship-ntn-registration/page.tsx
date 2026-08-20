import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sole Proprietorship NTN Registration with FBR in Pakistan",
  description: "Register a Sole Proprietorship business in Pakistan on FBR Iris Form 181. Open a commercial business bank account and obtain Chamber of Commerce membership.",
  openGraph: {
    title: "Sole Proprietorship NTN Registration with FBR in Pakistan",
    description: "Register a Sole Proprietorship business in Pakistan on FBR Iris Form 181. Open a commercial business bank account and obtain Chamber of Commerce membership.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/sole-proprietorship-ntn-registration',
  },
};

export default function Page() {
  const article = ARTICLES['sole-proprietorship-ntn-registration'];
  return <ArticleLayout article={article} />;
}
