import { NextResponse } from 'next/server';

interface RateLimitStore {
  [ip: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};
const WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS = 10; // Max 10 requests per minute per IP

export function applyRateLimit(req: Request): { isRateLimited: boolean; response?: NextResponse } {
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

  const now = Date.now();
  const record = store[ip];

  if (!record || now > record.resetTime) {
    store[ip] = {
      count: 1,
      resetTime: now + WINDOW_MS,
    };
    return { isRateLimited: false };
  }

  if (record.count >= MAX_REQUESTS) {
    return {
      isRateLimited: true,
      response: NextResponse.json(
        {
          error: 'Too many requests. Please wait a minute before trying again.',
          code: 'RATE_LIMIT_EXCEEDED',
        },
        { status: 429 }
      ),
    };
  }

  record.count += 1;
  return { isRateLimited: false };
}
