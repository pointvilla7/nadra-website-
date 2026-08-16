'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function PUAdmissionPage() {
  const article = ARTICLES['punjab-university-admission-2026'];
  return <ArticleLayout article={article} />;
}
