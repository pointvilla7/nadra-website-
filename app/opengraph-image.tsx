import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pakistan Info Hub — Verified Civic & Public Services Directory 2026';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1B2A4A 0%, #12192B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Border decorative frame */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            right: '24px',
            bottom: '24px',
            border: '2px solid rgba(176, 141, 87, 0.4)',
            borderRadius: '24px',
          }}
        />

        {/* Top Branding Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: '#12192B',
              border: '2px solid #B08D57',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
            }}
          >
            🇵🇰
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '28px', fontWeight: 800, color: '#F7F4EC', letterSpacing: '-0.5px' }}>
              PAKISTAN INFO HUB
            </span>
            <span style={{ fontSize: '13px', color: '#B08D57', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Verified Civic & Public Services Directory
            </span>
          </div>
          <div
            style={{
              marginLeft: '20px',
              padding: '6px 14px',
              borderRadius: '10px',
              background: 'linear-gradient(90deg, #D4AF37, #B08D57)',
              color: '#1B2A4A',
              fontWeight: 800,
              fontSize: '14px',
              letterSpacing: '1px',
            }}
          >
            2026 EDITION
          </div>
        </div>

        {/* Center Main Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 10,
            maxWidth: '1000px',
          }}
        >
          <h1
            style={{
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              textShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }}
          >
            Official Guidelines, Fee Schedules & Tracking
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#CBD5E1',
              margin: 0,
              lineHeight: 1.4,
              maxWidth: '850px',
            }}
          >
            NADRA CNIC • Passports • Utility Bills • BISP 8171 • BISE Results • Govt Loans • Traffic Challan
          </p>
        </div>

        {/* Bottom Trust Indicators Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '20px',
            borderTop: '1px solid rgba(176, 141, 87, 0.3)',
            zIndex: 10,
            fontSize: '16px',
            color: '#94A3B8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#22C55E', fontWeight: 'bold' }}>✓</span>
            <span style={{ color: '#F7F4EC' }}>100% Original Official Gazette Citations</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#B08D57' }}>🌐</span>
            <span style={{ color: '#F7F4EC', fontWeight: 700 }}>pakistaninfohub.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#22C55E', fontWeight: 'bold' }}>✓</span>
            <span style={{ color: '#F7F4EC' }}>Updated August 2026</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
