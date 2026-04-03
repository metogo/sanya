'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { FilterCategory, FilterPrice, FilterRating } from '@/types/attraction';

interface HeaderProps {
  onSearch: (query: string) => void;
  selectedCategory?: FilterCategory;
  selectedRating?: FilterRating;
  selectedPrice?: FilterPrice;
  onCategoryChange?: (category: FilterCategory) => void;
  onRatingChange?: (rating: FilterRating) => void;
  onPriceChange?: (price: FilterPrice) => void;
}

const PalmIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10"/>
    <path d="M12 10C9 10 6 8 5 5c2 0 5 1 7 5z"/>
    <path d="M12 10c3 0 6-2 7-5-2 0-5 1-7 5z"/>
    <path d="M12 14c-3 0-5 2-6 5 2 0 4-1 6-5z"/>
    <path d="M12 14c3 0 5 2 6 5-2 0-4-1-6-5z"/>
  </svg>
);

export default function Header({
  onSearch,
  selectedCategory = 'all',
  selectedRating = 'all',
  selectedPrice = 'all',
  onCategoryChange,
  onRatingChange,
  onPriceChange,
}: HeaderProps) {
  const t = useTranslations('header');
  const tFilters = useTranslations('filters');

  const categories: { value: FilterCategory; label: string }[] = [
    { value: 'all',           label: tFilters('all') },
    { value: 'beach',         label: tFilters('beach') },
    { value: 'culture',       label: tFilters('culture') },
    { value: 'nature',        label: tFilters('nature') },
    { value: 'entertainment', label: tFilters('entertainment') },
  ];

  const ratings: { value: FilterRating; label: string }[] = [
    { value: 'all',  label: tFilters('allRatings') },
    { value: '4+',   label: tFilters('rating4Plus') },
    { value: '4.5+', label: tFilters('rating45Plus') },
    { value: '5',    label: tFilters('rating5') },
  ];

  const prices: { value: FilterPrice; label: string }[] = [
    { value: 'all',     label: tFilters('allPrices') },
    { value: 'free',    label: tFilters('free') },
    { value: 'budget',  label: tFilters('budget') },
    { value: 'premium', label: tFilters('premium') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--mist)] shadow-[var(--shadow-xs)]">
        <div className="header-inner">

        {/* Logo */}
        <div className="flex items-center gap-2 text-[var(--ocean)] min-w-0 shrink">
          <PalmIcon />
          <span
            className="text-lg font-bold tracking-tight leading-none truncate"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t('title')}
          </span>
        </div>

        {/* Desktop Category Navigation */}
        {onCategoryChange && (
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-[var(--ocean)] text-white shadow-sm'
                    : 'text-[var(--text-2)] hover:bg-[var(--ocean-lt)] hover:text-[var(--ocean)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
          {/* Desktop Filters */}
          {onRatingChange && onPriceChange && (
            <div className="hidden lg:flex items-center gap-2">
              <select
                value={selectedRating}
                onChange={(e) => onRatingChange(e.target.value as FilterRating)}
                className="h-8 px-3 text-xs font-medium text-[var(--text-2)] bg-[var(--sand)] border border-[var(--mist-dk)] rounded-full focus:outline-none focus:border-[var(--ocean)] focus:ring-2 focus:ring-[var(--ocean-lt)] cursor-pointer [&>option]:text-[var(--text-1)]"
              >
                {ratings.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <select
                value={selectedPrice}
                onChange={(e) => onPriceChange(e.target.value as FilterPrice)}
                className="h-8 px-3 text-xs font-medium text-[var(--text-2)] bg-[var(--sand)] border border-[var(--mist-dk)] rounded-full focus:outline-none focus:border-[var(--ocean)] focus:ring-2 focus:ring-[var(--ocean-lt)] cursor-pointer [&>option]:text-[var(--text-1)]"
              >
                {prices.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          )}

          {/* Desktop Contact Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            <a
              href="https://t.me/+8613903643352"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 header-contact-link bg-[#0088cc] hover:bg-[#0077b5]"
              title="Telegram"
            >
              <TelegramIcon size={14} />
              <span>Telegram</span>
            </a>
            <a
              href="https://wa.me/8613903643352"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 header-contact-link bg-[#25D366] hover:bg-[#20BA5A]"
              title="WhatsApp"
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp</span>
            </a>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
