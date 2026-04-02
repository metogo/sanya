'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FilterCategory, FilterPrice, FilterRating } from '@/types/attraction';

interface FilterBarProps {
  selectedCategory: FilterCategory;
  selectedRating: FilterRating;
  selectedPrice: FilterPrice;
  onCategoryChange: (category: FilterCategory) => void;
  onRatingChange: (rating: FilterRating) => void;
  onPriceChange: (price: FilterPrice) => void;
}

const categoryIcons: Record<string, React.ReactElement> = {
  all: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  beach: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3L7 21"/><path d="M3 12c3-3 6-4.5 9-4.5s6 1.5 9 4.5"/>
      <path d="M3 21h18"/>
    </svg>
  ),
  culture: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/><path d="M5 21V9l7-6 7 6v12"/>
      <path d="M9 21v-6h6v6"/>
    </svg>
  ),
  nature: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.04 13.44A7 7 0 0 0 3 21c5-1 8.5-3.5 9-8z"/>
      <path d="M21 3c-4 3-5 8-3 12"/>
    </svg>
  ),
  entertainment: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

export default function FilterBar({
  selectedCategory,
  selectedRating,
  selectedPrice,
  onCategoryChange,
  onRatingChange,
  onPriceChange,
}: FilterBarProps) {
  const t = useTranslations('filters');
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(56);
  const filterRef = useRef<HTMLDivElement>(null);

  const categories: { value: FilterCategory; label: string }[] = [
    { value: 'all',           label: t('all') },
    { value: 'beach',         label: t('beach') },
    { value: 'culture',       label: t('culture') },
    { value: 'nature',        label: t('nature') },
    { value: 'entertainment', label: t('entertainment') },
  ];

  const ratings: { value: FilterRating; label: string }[] = [
    { value: 'all',  label: t('allRatings') },
    { value: '4+',   label: '4.0+' },
    { value: '4.5+', label: '4.5+' },
    { value: '5',    label: '5.0' },
  ];

  const prices: { value: FilterPrice; label: string }[] = [
    { value: 'all',     label: t('allPrices') },
    { value: 'free',    label: t('free') },
    { value: 'budget',  label: t('budget') },
    { value: 'premium', label: t('premium') },
  ];

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) setHeaderHeight(header.offsetHeight);
    const ro = new ResizeObserver(() => {
      if (header) setHeaderHeight(header.offsetHeight);
    });
    if (header) ro.observe(header);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const THRESHOLD = 60;
    const handleScroll = () => {
      setIsSticky(window.scrollY > THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasSecondaryFilters = selectedRating !== 'all' || selectedPrice !== 'all';

  return (
    <div
      ref={filterRef}
      className={`w-full transition-all duration-200 ${
        isSticky
          ? 'fixed left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--mist)] shadow-[var(--shadow-xs)]'
          : 'relative bg-white border-b border-[var(--mist)]'
      }`}
      style={isSticky ? { top: `${headerHeight}px` } : undefined}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Category Pills - scrollable row */}
        <div className="filter-inner">
          {categories.map((cat) => {
            const active = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`filter-pill ${active ? 'filter-pill-active' : 'filter-pill-inactive'}`}
              >
                <span style={{ color: active ? 'white' : 'var(--text-3)' }}>
                  {categoryIcons[cat.value]}
                </span>
                {cat.label}
              </button>
            );
          })}

          {/* Divider */}
          <div style={{ height: '20px', width: '1px', background: 'var(--mist)', flexShrink: 0, margin: '0 4px' }} />

          {/* Rating Filter Pill */}
          <div className="filter-select-wrap">
            <select
              value={selectedRating}
              onChange={(e) => onRatingChange(e.target.value as FilterRating)}
              className={`filter-select ${selectedRating !== 'all' ? 'filter-select-active' : 'filter-select-inactive'}`}
            >
              {ratings.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.value === 'all' ? r.label : `★ ${r.label}`}
                </option>
              ))}
            </select>
            <span className="filter-select-arrow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </div>

          {/* Price Filter Pill */}
          <div className="filter-select-wrap">
            <select
              value={selectedPrice}
              onChange={(e) => onPriceChange(e.target.value as FilterPrice)}
              className={`filter-select ${selectedPrice !== 'all' ? 'filter-select-active' : 'filter-select-inactive'}`}
            >
              {prices.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
            <span className="filter-select-arrow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
