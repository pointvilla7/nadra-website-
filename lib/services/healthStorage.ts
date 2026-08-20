import fs from 'fs';
import path from 'path';

export interface ScraperStatus {
  id: string;
  name: string;
  status: 'LIVE' | 'DEGRADED' | 'CHECKING';
  lastCheck: string;
  consecutiveFailures: number;
}

export interface HealthLog {
  timestamp: string;
  scraperId: string;
  status: 'PASS' | 'FAIL';
  errorMessage?: string;
  latencyMs: number;
}

const LOCAL_TMP_FILE = path.join('/tmp', 'scraper_health.json');

// List of all 21 tools
export const ALL_TOOLS = [
  // 17 Live Scraper Checkers
  { id: 'lesco', name: 'LESCO Electricity Bill' },
  { id: 'iesco', name: 'IESCO Electricity Bill' },
  { id: 'fesco', name: 'FESCO Electricity Bill' },
  { id: 'mepco', name: 'MEPCO Electricity Bill' },
  { id: 'gepco', name: 'GEPCO Electricity Bill' },
  { id: 'pesco', name: 'PESCO Electricity Bill' },
  { id: 'hesco', name: 'HESCO Electricity Bill' },
  { id: 'sepco', name: 'SEPCO Electricity Bill' },
  { id: 'qesco', name: 'QESCO Electricity Bill' },
  { id: 'tesco', name: 'TESCO Electricity Bill' },
  { id: 'bisp', name: 'BISP 8171 NSER Welfare' },
  { id: 'bise', name: 'BISE Board Result' },
  { id: 'traffic', name: 'PSCA E-Challan' },
  { id: 'mtmis', name: 'MTMIS Vehicle Verification' },
  { id: 'sehat', name: 'Sehat Card Eligibility' },
  { id: 'pser', name: 'PSER Survey Status' },
  { id: 'nts', name: 'NTS Roll Number Slip' },
  // 4 Captcha Redirect Fallbacks
  { id: 'kelectric', name: 'K-Electric Bill (Redirect)' },
  { id: 'wasa', name: 'WASA Sewerage Bill (Redirect)' },
  { id: 'sngpl', name: 'SNGPL Sui Gas Bill (Redirect)' },
  { id: 'kwsc', name: 'KWSC Water Bill (Redirect)' },
];

interface LocalState {
  statuses: Record<string, 'LIVE' | 'DEGRADED' | 'CHECKING'>;
  failures: Record<string, number>;
  lastChecked: Record<string, string>;
  logs: HealthLog[];
}

// Helpers for Local Storage fallback (used in dev and stateless cold starts if KV not configured)
function readLocalState(): LocalState {
  try {
    if (fs.existsSync(LOCAL_TMP_FILE)) {
      const data = fs.readFileSync(LOCAL_TMP_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading local health storage file:', err);
  }
  return { statuses: {}, failures: {}, lastChecked: {}, logs: [] };
}

function writeLocalState(state: LocalState) {
  try {
    const dir = path.dirname(LOCAL_TMP_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_TMP_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing local health storage file:', err);
  }
}

// Execute Upstash commands directly via fetch
async function runRedisCommand(command: any[]): Promise<any> {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(command),
      next: { revalidate: 0 }, // do not cache KV pings
    });
    if (res.ok) {
      const json = await res.json();
      return json.result;
    }
  } catch (err) {
    console.error('Upstash Redis command error:', err);
  }
  return null;
}

export async function getScraperHealth(): Promise<ScraperStatus[]> {
  const isKVConfigured = !!(process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL);

  let statuses: Record<string, 'LIVE' | 'DEGRADED' | 'CHECKING'> = {};
  let failures: Record<string, number> = {};
  let lastChecked: Record<string, string> = {};

  if (isKVConfigured) {
    const statusKV = await runRedisCommand(['GET', 'pih:health_statuses']);
    const failuresKV = await runRedisCommand(['GET', 'pih:consecutive_failures']);
    const lastCheckedKV = await runRedisCommand(['GET', 'pih:last_checked']);

    if (statusKV) statuses = JSON.parse(statusKV);
    if (failuresKV) failures = JSON.parse(failuresKV);
    if (lastCheckedKV) lastChecked = JSON.parse(lastCheckedKV);
  } else {
    const local = readLocalState();
    statuses = local.statuses;
    failures = local.failures;
    lastChecked = local.lastChecked;
  }

  return ALL_TOOLS.map((tool) => {
    // 4 Redirect fallbacks are always LIVE or standard
    const isRedirect = ['kelectric', 'wasa', 'sngpl', 'kwsc'].includes(tool.id);
    return {
      id: tool.id,
      name: tool.name,
      status: isRedirect ? 'LIVE' : (statuses[tool.id] || 'LIVE'),
      lastCheck: lastChecked[tool.id] || new Date('2026-08-17').toISOString(),
      consecutiveFailures: isRedirect ? 0 : (failures[tool.id] || 0),
    };
  });
}

export async function setScraperHealth(
  scraperId: string,
  status: 'LIVE' | 'DEGRADED' | 'CHECKING',
  failuresCount?: number
) {
  const isKVConfigured = !!(process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL);
  const nowStr = new Date().toISOString();

  if (isKVConfigured) {
    // 1. Fetch current status hashes
    const statusKV = await runRedisCommand(['GET', 'pih:health_statuses']);
    const failuresKV = await runRedisCommand(['GET', 'pih:consecutive_failures']);
    const lastCheckedKV = await runRedisCommand(['GET', 'pih:last_checked']);

    const statuses = statusKV ? JSON.parse(statusKV) : {};
    const failures = failuresKV ? JSON.parse(failuresKV) : {};
    const lastChecked = lastCheckedKV ? JSON.parse(lastCheckedKV) : {};

    // Update
    statuses[scraperId] = status;
    lastChecked[scraperId] = nowStr;
    if (failuresCount !== undefined) {
      failures[scraperId] = failuresCount;
    }

    // Set back
    await runRedisCommand(['SET', 'pih:health_statuses', JSON.stringify(statuses)]);
    await runRedisCommand(['SET', 'pih:consecutive_failures', JSON.stringify(failures)]);
    await runRedisCommand(['SET', 'pih:last_checked', JSON.stringify(lastChecked)]);
  } else {
    const local = readLocalState();
    local.statuses[scraperId] = status;
    local.lastChecked[scraperId] = nowStr;
    if (failuresCount !== undefined) {
      local.failures[scraperId] = failuresCount;
    }
    writeLocalState(local);
  }
}

export async function getHealthLogs(): Promise<HealthLog[]> {
  const isKVConfigured = !!(process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL);

  if (isKVConfigured) {
    const logsKV = await runRedisCommand(['GET', 'pih:health_logs']);
    return logsKV ? JSON.parse(logsKV) : [];
  } else {
    const local = readLocalState();
    return local.logs || [];
  }
}

export async function addHealthLog(log: HealthLog) {
  const isKVConfigured = !!(process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL);

  if (isKVConfigured) {
    const logsKV = await runRedisCommand(['GET', 'pih:health_logs']);
    const logs: HealthLog[] = logsKV ? JSON.parse(logsKV) : [];
    logs.unshift(log); // Prepend so newest logs are first
    const trimmedLogs = logs.slice(0, 200); // Retain last 200 entries
    await runRedisCommand(['SET', 'pih:health_logs', JSON.stringify(trimmedLogs)]);
  } else {
    const local = readLocalState();
    local.logs = local.logs || [];
    local.logs.unshift(log);
    local.logs = local.logs.slice(0, 200);
    writeLocalState(local);
  }
}
