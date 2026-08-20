import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '8171 Web Portal Guide 2026: Registration, Login & Status Check',
  description: 'Comprehensive guide to using the official BISP 8171 web portal. Learn how to check payments, resolve portal loading errors, captcha issues, and NSER status online.',
  openGraph: {
    title: '8171 Web Portal Guide 2026: Registration, Login & Status Check',
    description: 'Comprehensive guide to using the official BISP 8171 web portal. Learn how to check payments, resolve portal loading errors, captcha issues, and NSER status online.',
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/welfare/8171-portal-guide',
  },
};

export default function Page() {
  const article = ARTICLES['8171-portal-guide'];
  return <ArticleLayout article={article} />;
}

