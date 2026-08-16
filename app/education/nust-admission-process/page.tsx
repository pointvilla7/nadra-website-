'use client';

import React from 'react';
import { ARTICLES } from '@/lib/data/articles';
import { ArticleLayout } from '@/components/ArticleLayout';

export default function NUSTAdmissionPage() {
  const article = ARTICLES['nust-admission-process'];
  return <ArticleLayout article={article} />;
}
