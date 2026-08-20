import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NADRA Succession Certificate & Letter of Administration 2026",
  description: "Apply online for NADRA Succession Certificate & Letter of Administration. Fee structure, legal heir biometric verification, and bank asset transfer rules.",
  openGraph: {
    title: "NADRA Succession Certificate & Letter of Administration 2026",
    description: "Apply online for NADRA Succession Certificate & Letter of Administration. Fee structure, legal heir biometric verification, and bank asset transfer rules.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/nadra/succession-certificate-online',
  },
};

export default function Page() {
  const article = ARTICLES['succession-certificate-online'];
  return <ArticleLayout article={article} />;
}

