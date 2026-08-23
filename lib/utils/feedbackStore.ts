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

// Ratings and comments start empty and populate purely from real user interactions.
// Fabricated reviews, fake votes, and fake identities have been permanently removed.

export const getGuideRating = (slug: string): StarRatingData => {
  if (typeof window === 'undefined') {
    return { average: 0, totalVotes: 0 };
  }

  try {
    const stored = localStorage.getItem(`pih_rating_${slug}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore
  }

  return { average: 0, totalVotes: 0 };
};

export const submitGuideRating = (slug: string, newRating: number): StarRatingData => {
  const current = getGuideRating(slug);
  const newTotalVotes = current.totalVotes + 1;
  const newAverage = current.totalVotes === 0
    ? Number(newRating.toFixed(1))
    : Number(((current.average * current.totalVotes + newRating) / newTotalVotes).toFixed(1));

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
  if (typeof window === 'undefined') return [];

  try {
    const userComments: UserComment[] = JSON.parse(localStorage.getItem(`pih_comments_${slug}`) || '[]');
    return userComments;
  } catch {
    return [];
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
