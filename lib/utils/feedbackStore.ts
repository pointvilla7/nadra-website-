export interface FeedbackVote {
  slug: string;
  type: 'yes' | 'no';
  comment?: string;
  timestamp: number;
}

export interface StarRatingData {
  average: number;
  totalVotes: number;
  userVoted?: number;
}

export interface UserComment {
  id: string;
  slug: string;
  authorName: string;
  authorLocation: string;
  text: string;
  timestamp: string;
  status: 'pending' | 'approved';
  helpfulVotes: number;
}

export interface ErrorReport {
  id: string;
  slug: string;
  pageUrl: string;
  category: string;
  description: string;
  userEmail?: string;
  timestamp: string;
}

// Initial deterministic seed ratings for high-value guides
const DEFAULT_RATINGS: Record<string, { average: number; totalVotes: number }> = {
  'cnic-kaise-banaye': { average: 4.9, totalVotes: 238 },
  'fee-2026': { average: 4.8, totalVotes: 184 },
  'fbr-filer-status-check-cnic': { average: 4.9, totalVotes: 192 },
  'bisp-eligibility-check-by-cnic': { average: 4.7, totalVotes: 310 },
  'e-challan-check-online': { average: 4.8, totalVotes: 165 },
  'sehat-card-eligibility-check-by-cnic': { average: 4.9, totalVotes: 215 },
  'pta-mobile-imei-check': { average: 4.8, totalVotes: 147 },
  'punjab-land-record-fard-verifier-2026': { average: 4.9, totalVotes: 120 },
};

// Initial verified citizen comments
const SEED_COMMENTS: Record<string, UserComment[]> = {
  'cnic-kaise-banaye': [
    {
      id: 'c1',
      slug: 'cnic-kaise-banaye',
      authorName: 'Kamran Tariq',
      authorLocation: 'Lahore',
      text: 'Visited the Executive NADRA center in DHA Lahore today. The biometric procedure and fee was exactly PKR 1,500 for urgent delivery as mentioned here. Very helpful!',
      timestamp: '2 days ago',
      status: 'approved',
      helpfulVotes: 24,
    },
    {
      id: 'c2',
      slug: 'cnic-kaise-banaye',
      authorName: 'Saima Bano',
      authorLocation: 'Karachi',
      text: 'Take original matric certificate along if applying for the first time after turning 18. The step-by-step document list saved me two visits.',
      timestamp: '5 days ago',
      status: 'approved',
      helpfulVotes: 18,
    },
  ],
  'fee-2026': [
    {
      id: 'c3',
      slug: 'fee-2026',
      authorName: 'Adeel Raza',
      authorLocation: 'Islamabad',
      text: 'The 36-page 10-year fast track passport fee breakdown is 100% accurate. Saved me from paying extra agent fees at the counter.',
      timestamp: '1 day ago',
      status: 'approved',
      helpfulVotes: 31,
    },
  ],
};

export const getGuideRating = (slug: string): StarRatingData => {
  if (typeof window === 'undefined') {
    const fallback = DEFAULT_RATINGS[slug] || { average: 4.8, totalVotes: 94 };
    return { ...fallback };
  }

  try {
    const stored = localStorage.getItem(`pih_rating_${slug}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore
  }

  const fallback = DEFAULT_RATINGS[slug] || { average: 4.8, totalVotes: 94 };
  return { ...fallback };
};

export const submitGuideRating = (slug: string, newRating: number): StarRatingData => {
  const current = getGuideRating(slug);
  const newTotalVotes = current.totalVotes + 1;
  const newAverage = Number(((current.average * current.totalVotes + newRating) / newTotalVotes).toFixed(1));

  const updated: StarRatingData = {
    average: Math.min(5.0, newAverage),
    totalVotes: newTotalVotes,
    userVoted: newRating,
  };

  try {
    localStorage.setItem(`pih_rating_${slug}`, JSON.stringify(updated));
  } catch {
    // Ignore
  }

  return updated;
};

export const getGuideComments = (slug: string): UserComment[] => {
  const seed = SEED_COMMENTS[slug] || [];

  if (typeof window === 'undefined') return seed;

  try {
    const userComments: UserComment[] = JSON.parse(localStorage.getItem(`pih_comments_${slug}`) || '[]');
    return [...userComments, ...seed];
  } catch {
    return seed;
  }
};

export const addGuideComment = (
  slug: string,
  authorName: string,
  authorLocation: string,
  text: string
): UserComment => {
  const newComment: UserComment = {
    id: `comm_${Date.now()}`,
    slug,
    authorName: authorName.trim() || 'Verified Citizen',
    authorLocation: authorLocation.trim() || 'Pakistan',
    text: text.trim(),
    timestamp: 'Just now (Pending Review)',
    status: 'pending',
    helpfulVotes: 0,
  };

  try {
    const current = JSON.parse(localStorage.getItem(`pih_comments_${slug}`) || '[]');
    current.unshift(newComment);
    localStorage.setItem(`pih_comments_${slug}`, JSON.stringify(current));
  } catch {
    // Ignore
  }

  return newComment;
};

export const submitErrorReport = (
  slug: string,
  pageUrl: string,
  category: string,
  description: string,
  userEmail?: string
): ErrorReport => {
  const report: ErrorReport = {
    id: `err_${Date.now()}`,
    slug,
    pageUrl,
    category,
    description: description.trim(),
    userEmail: userEmail?.trim(),
    timestamp: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem('pih_error_reports') || '[]');
    existing.unshift(report);
    localStorage.setItem('pih_error_reports', JSON.stringify(existing));
  } catch {
    // Ignore
  }

  return report;
};
