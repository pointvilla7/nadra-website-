'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function AllBiseResultPage() {
  const article = ARTICLES['bise-result-check-2026'];
  return <ArticleLayout article={article} />;
}
