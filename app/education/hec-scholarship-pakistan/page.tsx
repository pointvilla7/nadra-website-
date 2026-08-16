'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function HECScholarshipPage() {
  const article = ARTICLES['hec-scholarship-pakistan'];
  return <ArticleLayout article={article} />;
}
