'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function MeraGharPage() {
  const article = ARTICLES['mera-ghar-mera-ashiana'];
  return <ArticleLayout article={article} />;
}
