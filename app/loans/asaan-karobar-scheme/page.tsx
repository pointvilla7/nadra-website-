'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function AsaanKarobarPage() {
  const article = ARTICLES['asaan-karobar-scheme'];
  return <ArticleLayout article={article} />;
}
