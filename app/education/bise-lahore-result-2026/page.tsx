'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function BISELahoreResultPage() {
  const article = ARTICLES['bise-lahore-result-2026'];
  return <ArticleLayout article={article} />;
}
