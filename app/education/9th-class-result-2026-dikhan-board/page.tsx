import type { Metadata } from 'next';
import { NINTH_CLASS_BOARDS } from '@/lib/data/ninthClassBoards';
import { NinthClassBoardResultTemplate } from '@/components/NinthClassBoardResultTemplate';

const BOARD_SLUG = '9th-class-result-2026-dikhan-board';
const board = NINTH_CLASS_BOARDS[BOARD_SLUG];

export const metadata: Metadata = {
  title: board.metaTitle,
  description: board.metaDescription,
  keywords: [
    '9th class result 2026 dikhan board',
    'bise di khan 9th result 2026',
    'dera ismail khan board 9th result',
    'bisedik.edu.pk result',
    'di khan board roll number search',
    'di khan board sms 9818',
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
