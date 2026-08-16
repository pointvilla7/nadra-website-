'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function EChallanCnicPage() {
  const article = ARTICLES['e-challan-check-by-cnic'];
  return <ArticleLayout article={article} />;
}
