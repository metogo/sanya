'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const t = useTranslations('header');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#DC143C] via-[#C41E3A] to-[#0039A6] text-white shadow-xl w-full">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-6 md:py-8">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="inline-block transform hover:scale-105 transition-transform">🏛️</span>
            {' '}{t('title')}
          </h1>
          <p className="text-white/90 text-sm md:text-base font-light tracking-wide">
            {t('subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        {/* <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <div className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию, описанию, тегам..."
              className="w-full px-6 py-4 pr-14 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FFD700]/50 shadow-lg transition-all bg-white/95 backdrop-blur-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#DC143C] to-[#0039A6] rounded-xl hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              <span className="text-xl">🔍</span>
            </button>
          </div>
        </form> */}
      </div>
    </header>
  );
}

