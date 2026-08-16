'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function Portal8171GuidePage() {
  const article = ARTICLES['8171-portal-guide'];
  return <ArticleLayout article={article} />;
}
