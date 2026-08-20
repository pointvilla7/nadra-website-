import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Death Certificate Registration Process – Union Council & NADRA',
  description: 'Step-by-step procedure to report death and obtain a NADRA Computerized Death Certificate for inheritance succession, bank account closure, and pension claims.',
  openGraph: {
    title: 'Death Certificate Registration Process – Union Council & NADRA',
    description: 'Step-by-step procedure to report death and obtain a NADRA Computerized Death Certificate for inheritance succession, bank account closure, and pension claims.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/certificates/death-certificate-registration-process',
  },
};

export default function Page() {
  const article = ARTICLES['death-certificate-registration-process'];
  return <ArticleLayout article={article} />;
}
