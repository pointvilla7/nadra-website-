'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function NICOPPage() {
  const article = ARTICLES['nicop-apply-online'];
  return <ArticleLayout article={article} />;
}
