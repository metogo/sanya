'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function LoadingScreen() {
  const t = useTranslations('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 8 + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const clampedProgress = Math.min(progress, 100);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'var(--ocean)', overflow: 'hidden',
    }}>
      {/* Ambient blur circles */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 320, height: 320, background: 'var(--ocean-mid)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.6 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 256, height: 256, background: '#1A7A9A', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.4 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, padding: '0 32px', textAlign: 'center' }}>

        {/* Icon */}
        <div style={{ position: 'relative', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="animate-spin-slow" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)' }} />
          <div className="animate-float-y" style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3L7 21"/>
              <path d="M3 12c3-3 6-4.5 9-4.5s6 1.5 9 4.5"/>
              <path d="M3 21h18"/>
            </svg>
          </div>
        </div>

        {/* Brand */}
        <div>
          <h1
            className="animate-fade-in-up"
            style={{ fontFamily: "var(--font-serif)", fontSize: 30, fontWeight: 700, color: 'white', marginBottom: 6 }}
          >
            {t('title')}
          </h1>
          <p className="animate-fade-in-up" style={{ color: 'rgba(255,255,255,0.60)', fontSize: 14, animationDelay: '0.1s', opacity: 0 }}>
            {t('subtitle')}
          </p>
        </div>

        {/* Progress bar */}
        <div style={{ width: 192 }}>
          <div style={{ height: 2, background: 'rgba(255,255,255,0.15)', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: 'rgba(255,255,255,0.70)', borderRadius: 999, width: `${clampedProgress}%`, transition: 'width 0.3s ease-out' }} />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: 11, marginTop: 8, fontWeight: 500 }}>
            {clampedProgress < 100 ? t('loading') : t('ready')}
          </p>
        </div>
      </div>
    </div>
  );
}
