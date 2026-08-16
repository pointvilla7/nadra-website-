'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function KamyabJawanPage() {
  const article = ARTICLES['kamyab-jawan-program'];
  return <ArticleLayout article={article} />;
}
