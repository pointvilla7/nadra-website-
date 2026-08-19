import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NADRA Computerized Birth Certificate Online Application & Fees',
  description: 'Apply for a NADRA computerized Birth Certificate from Union Council in Pakistan. Necessary for child B-Form, school admission, and minor passport applications.',
  openGraph: {
    title: 'NADRA Computerized Birth Certificate Online Application & Fees',
    description: 'Apply for a NADRA computerized Birth Certificate from Union Council in Pakistan. Necessary for child B-Form, school admission, and minor passport applications.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/certificates/birth-certificate-union-council-online',
  },
};

export default function Page() {
  const article = ARTICLES['birth-certificate-union-council-online'];
  return <ArticleLayout article={article} />;
}
