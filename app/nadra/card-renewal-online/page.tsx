'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function CardRenewalOnlinePage() {
  const article = ARTICLES['card-renewal-online'];
  return <ArticleLayout article={article} />;
}
