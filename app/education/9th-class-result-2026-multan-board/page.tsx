import type { Metadata } from 'next';
import { NINTH_CLASS_BOARDS } from '@/lib/data/ninthClassBoards';
import { NinthClassBoardResultTemplate } from '@/components/NinthClassBoardResultTemplate';

const BOARD_SLUG = '9th-class-result-2026-multan-board';
const board = NINTH_CLASS_BOARDS[BOARD_SLUG];

export const metadata: Metadata = {
  title: board.metaTitle,
  description: board.metaDescription,
  keywords: [
    '9th class result 2026 multan board',
    'bise multan 9th result 2026',
    'class 9 result multan board',
    'bise multan roll number check',
    'multan board 9th result sms code 800293',
    'bisemultan.edu.pk',
  ],
  openGraph: {
    title: board.metaTitle,
    description: board.metaDescription,
    url: 'https://www.pakistaninfohub.com/education/9th-class-result-2026-multan-board',
  },
  alternates: {
    canonical: 'https://www.pakistaninfohub.com/education/9th-class-result-2026-multan-board',
  },
};

export default function Page() {
  return <NinthClassBoardResultTemplate board={board} />;
}
