'use client';

import { useTranslations } from 'next-intl';

export default function HeroBanner() {
  const t = useTranslations();

  return (
    <div className="w-full bg-gradient-to-r from-[var(--ocean)] via-[var(--ocean-mid)] to-[#1A7A9A] px-5 py-4 flex items-center justify-center">
      <p className="text-center text-sm text-white/85 leading-relaxed max-w-md">
        {t('banner.tagline', { defaultValue: '🌴 发现三亚最美景点 · Откройте лучшие достопримечательности Санья · Discover Sanya' })}
      </p>
    </div>
  );
}
