'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function EChallanCheckPage() {
  const article = ARTICLES['e-challan-check-online'];
  return <ArticleLayout article={article} />;
}
