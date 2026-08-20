import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WeBOC Registration Guide – Import & Export License in Pakistan",
  description: "Complete guide to WeBOC (Web Based One Customs) and PSW (Pakistan Single Window) registration for import and export business. Chamber certificate & customs biometric.",
  openGraph: {
    title: "WeBOC Registration Guide – Import & Export License in Pakistan",
    description: "Complete guide to WeBOC (Web Based One Customs) and PSW (Pakistan Single Window) registration for import and export business. Chamber certificate & customs biometric.",
    images: [{ url: 'https://www.pakistaninfohub.com/og-default.jpg', width: 1200, height: 630 }],
    url: 'https://www.pakistaninfohub.com/business/import-export-license-weboc-registration',
  },
};

export default function Page() {
  const article = ARTICLES['import-export-license-weboc-registration'];
  return <ArticleLayout article={article} />;
}
