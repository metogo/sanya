'use client';

import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';
import { useEffect, useRef, useState } from 'react';

const languages = [
  { code: 'ru', name: 'Рус', flag: 'RU' },
  { code: 'en', name: 'Eng', flag: 'EN' },
  { code: 'zh', name: '中文', flag: 'ZH' },
];

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = params.locale as string;
  const current = languages.find((l) => l.code === currentLocale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (locale: string) => {
    router.replace(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          height: 32, paddingLeft: 12, paddingRight: 12,
          borderRadius: 999, border: '1px solid var(--mist-dk)',
          background: 'transparent', color: 'var(--text-2)',
          fontSize: 12, fontWeight: 500, cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--ocean)';
          (e.currentTarget as HTMLButtonElement).style.background = 'var(--ocean-lt)';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--ocean)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--mist-dk)';
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)';
        }}
      >
        <GlobeIcon />
        <span>{current.flag}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute', right: 0, top: '100%', marginTop: 6,
          width: 144, background: 'white', borderRadius: 12,
          boxShadow: 'var(--shadow-lg)', border: '1px solid var(--mist)',
          overflow: 'hidden', zIndex: 50,
          animation: 'scaleIn 0.2s ease-out forwards',
          transformOrigin: 'top right',
        }}>
          {languages.map((lang) => {
            const active = currentLocale === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleChange(lang.code)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  fontSize: 14, cursor: 'pointer', border: 'none',
                  background: active ? 'var(--ocean-lt)' : 'transparent',
                  color: active ? 'var(--ocean)' : 'var(--text-2)',
                  fontWeight: active ? 600 : 400,
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'var(--sand)'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                <span>{lang.name}</span>
                {active && <CheckIcon />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
