import type { Metadata } from 'next';
import { NINTH_CLASS_BOARDS } from '@/lib/data/ninthClassBoards';
import { NinthClassBoardResultTemplate } from '@/components/NinthClassBoardResultTemplate';

const BOARD_SLUG = '9th-class-result-2026-abbottabad-board';
const board = NINTH_CLASS_BOARDS[BOARD_SLUG];

export const metadata: Metadata = {
  title: board.metaTitle,
  description: board.metaDescription,
  keywords: [
    '9th class result 2026 abbottabad board',
    'bise abbottabad 9th result 2026',
    'bise atd 9th result',
    'abbottabad board roll number search',
    'hazara board 9th result 2026',
    'biseatd.edu.pk result',
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
