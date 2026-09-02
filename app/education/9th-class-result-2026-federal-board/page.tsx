import type { Metadata } from 'next';
import { NINTH_CLASS_BOARDS } from '@/lib/data/ninthClassBoards';
import { NinthClassBoardResultTemplate } from '@/components/NinthClassBoardResultTemplate';

const BOARD_SLUG = '9th-class-result-2026-federal-board';
const board = NINTH_CLASS_BOARDS[BOARD_SLUG];

export const metadata: Metadata = {
  title: board.metaTitle,
  description: board.metaDescription,
  keywords: [
    '9th class result 2026 federal board',
    'fbise 9th result 2026',
    'class 9 result fbise',
    'federal board roll number check',
    'fbise sms code 5050',
    'fbise.edu.pk',
  ],
  openGraph: {
    title: board.metaTitle,
    description: board.metaDescription,
    url: `https://www.pakistaninfohub.com/education/${BOARD_SLUG}`,
  },
  alternates: {
    canonical: `https://www.pakistaninfohub.com/education/${BOARD_SLUG}`,
  },
};

export default function Page() {
  return <NinthClassBoardResultTemplate board={board} />;
}
