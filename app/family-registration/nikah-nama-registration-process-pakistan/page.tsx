import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nikah Nama Registration Process in Pakistan – Union Council Rules',
  description: 'Step-by-step procedure for registering a Muslim Nikah Nama under the Muslim Family Laws Ordinance 1961 with Union Councils in Pakistan. Fees, columns, and legal rights.',
  openGraph: {
    title: 'Nikah Nama Registration Process in Pakistan – Union Council Rules',
    description: 'Step-by-step procedure for registering a Muslim Nikah Nama under the Muslim Family Laws Ordinance 1961 with Union Councils in Pakistan. Fees, columns, and legal rights.',
    images: [{ url: 'https://pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://pakistaninfohub.com/family-registration/nikah-nama-registration-process-pakistan',
  },
};

export default function Page() {
  const article = ARTICLES['nikah-nama-registration-process-pakistan'];
  return <ArticleLayout article={article} />;
}
