'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import AttractionCard from '@/components/AttractionCard';
import LoadingScreen from '@/components/LoadingScreen';
import { attractionsList } from '@/data/attractions-list';
import { FilterCategory, FilterPrice, FilterRating } from '@/types/attraction';

// 非首屏关键组件懒加载
const ContactFloat = dynamic(() => import('@/components/ContactFloat'), { ssr: false });

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const CarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/>
    <circle cx="9" cy="17" r="2"/>
    <circle cx="17" cy="17" r="2"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 1 4-1 8-4 11"/>
    <path d="M11.7 20c.5-3.5 2.3-6.5 5.3-8.5"/>
  </svg>
);

const SearchOffIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--mist-dk)]">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="8" y1="8" x2="14" y2="14"/>
    <line x1="14" y1="8" x2="8" y2="14"/>
  </svg>
);

export default function Home() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [selectedRating, setSelectedRating] = useState<FilterRating>('all');
  const [selectedPrice, setSelectedPrice] = useState<FilterPrice>('all');

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    if (!hasVisited) {
      // 首访：等页面资源加载完即显示，最多等 300ms 保留品牌感
      const startTime = Date.now();
      const show = () => {
        const elapsed = Date.now() - startTime;
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('hasVisitedHome', 'true');
        }, Math.max(0, 300 - elapsed));
      };
      if (document.readyState === 'complete') { show(); }
      else {
        window.addEventListener('load', show, { once: true });
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const saved = sessionStorage.getItem('scrollPosition');
      if (saved) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: parseInt(saved), behavior: 'instant' });
          sessionStorage.removeItem('scrollPosition');
        });
      }
    }
  }, [isLoading]);

  const filteredAttractions = useMemo(() => {
    return attractionsList.filter((a) => {
      const matchSearch = searchQuery === '' ||
        a.nameRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.descriptionRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.locationRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchCat = selectedCategory === 'all' || a.category === selectedCategory;
      let matchRating = true;
      if (selectedRating === '4+')   matchRating = a.rating >= 4;
      if (selectedRating === '4.5+') matchRating = a.rating >= 4.5;
      if (selectedRating === '5')    matchRating = a.rating === 5;
      let matchPrice = true;
      if (selectedPrice === 'free')    matchPrice = a.isFree;
      if (selectedPrice === 'budget')  matchPrice = !a.isFree && a.price < 200;
      if (selectedPrice === 'premium') matchPrice = !a.isFree && a.price >= 200;
      return matchSearch && matchCat && matchRating && matchPrice;
    });
  }, [searchQuery, selectedCategory, selectedRating, selectedPrice]);

  const handleSearch          = useCallback((q: string) => setSearchQuery(q), []);
  const handleCategoryChange  = useCallback((c: FilterCategory) => setSelectedCategory(c), []);
  const handleRatingChange    = useCallback((r: FilterRating) => setSelectedRating(r), []);
  const handlePriceChange     = useCallback((p: FilterPrice) => setSelectedPrice(p), []);
  const handleResetFilters    = useCallback(() => {
    setSearchQuery(''); setSelectedCategory('all'); setSelectedRating('all'); setSelectedPrice('all');
  }, []);

  if (isLoading) return <LoadingScreen />;

  const websiteJsonLd = {
    '@context': 'https://schema.org', '@type': 'WebSite',
    name: 'RossiySanya',
    alternateName: ['Санья Экскурсии', 'Sanya Excursions', '三亚旅游'],
    url: 'https://rossiysanya.com',
    description: locale === 'ru'
      ? 'Лучшие экскурсии и достопримечательности в Санье, Хайнань. Организация туров, билеты, трансферы.'
      : locale === 'zh' ? '三亚最佳旅游景点攻略，海南岛热带天堂，景点门票、专车接送、旅游指南。'
      : 'Best tours and attractions in Sanya, Hainan. Tour organization, tickets, transfers and travel guides.',
    inLanguage: locale === 'ru' ? 'ru-RU' : locale === 'zh' ? 'zh-CN' : 'en-US',
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    name: 'RossiySanya',
    url: 'https://rossiysanya.com',
    description: locale === 'ru'
      ? 'Организация экскурсий и туров по Санье для русскоговорящих туристов'
      : locale === 'zh' ? '三亚旅游服务，为游客提供专业的景点导览和专车接送'
      : 'Tour organization and travel services in Sanya for international tourists',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sanya',
      addressRegion: 'Hainan',
      addressCountry: 'CN',
    },
    areaServed: { '@type': 'City', name: 'Sanya' },
    sameAs: ['https://t.me/+8613903643352'],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: locale === 'ru' ? 'Достопримечательности Санья' : locale === 'zh' ? '三亚景点列表' : 'Sanya Attractions',
    numberOfItems: filteredAttractions.length,
    itemListElement: filteredAttractions.slice(0, 10).map((a, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://rossiysanya.com/${locale}/attractions/${a.id}`,
      name: locale === 'ru' ? a.nameRu : locale === 'zh' ? (a.nameZh || a.name) : a.name,
    })),
  };

  return (
    <div className="min-h-screen bg-[var(--sand)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <Header
        onSearch={handleSearch}
        selectedCategory={selectedCategory}
        selectedRating={selectedRating}
        selectedPrice={selectedPrice}
        onCategoryChange={handleCategoryChange}
        onRatingChange={handleRatingChange}
        onPriceChange={handlePriceChange}
      />

      {/* Filter Bar - mobile only */}
      <div className="lg:hidden">
        <FilterBar
          selectedCategory={selectedCategory}
          selectedRating={selectedRating}
          selectedPrice={selectedPrice}
          onCategoryChange={handleCategoryChange}
          onRatingChange={handleRatingChange}
          onPriceChange={handlePriceChange}
        />
      </div>

      {/* Floating buttons - mobile only */}
      <div className="lg:hidden">
        <ContactFloat />
      </div>

      {/* Main Content */}
      <main className="page-main">
        {/* Count row */}
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-lg font-bold text-[var(--text-1)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t('main.popularPlaces')}
          </h2>
          <span className="text-xs text-[var(--text-3)] font-medium">
            {filteredAttractions.length} {t('main.foundAttractions')}
          </span>
        </div>

        {/* Grid */}
        {filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredAttractions.map((attraction, index) => (
              <AttractionCard key={attraction.id} attraction={attraction} priority={index < 2} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <SearchOffIcon />
            <h3
              className="mt-5 text-xl font-bold text-[var(--text-1)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t('main.noResults')}
            </h3>
            <p className="mt-2 text-sm text-[var(--text-3)] mb-6 max-w-xs">
              {t('main.noResultsDescription')}
            </p>
            <button
              onClick={handleResetFilters}
              className="btn-primary"
            >
              {t('main.resetFilters')}
            </button>
          </div>
        )}
      </main>

      {/* Bottom Navigation - mobile only */}
      <div className="lg:hidden">
        <BottomNav locale={locale} currentPage="home" t={t} />
      </div>

      {/* Footer */}
      <footer className="mb-16 lg:mb-0 bg-[var(--ocean)] text-white py-8">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <p
            className="text-lg font-bold mb-1.5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t('footer.title')}
          </p>
          <p className="text-white/60 text-sm mb-5 max-w-md mx-auto">
            {t('footer.subtitle')}
          </p>
          <div className="border-t border-white/10 pt-4">
            <p className="text-xs text-white/50">{t('footer.copyright')}</p>
            <p className="text-xs text-white/30 mt-1">{t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BottomNav({ locale, currentPage, t }: { locale: string; currentPage: 'home' | 'chauffeur' | 'tcm'; t: any }) {
  const homeActive = currentPage === 'home';
  const carActive  = currentPage === 'chauffeur';
  const tcmActive  = currentPage === 'tcm';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-[var(--mist)] shadow-[0_-2px_12px_rgba(0,0,0,0.06)] pb-safe">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center h-14">
          <Link href="/" className="flex-1">
            <div className={`flex flex-col items-center justify-center gap-0.5 py-1.5 transition-colors ${homeActive ? 'text-[var(--ocean)]' : 'text-[var(--text-3)]'}`}>
              <div className={`p-1 rounded-xl transition-colors ${homeActive ? 'bg-[var(--ocean-lt)]' : ''}`}>
                <HomeIcon />
              </div>
              <span className="text-[10px] font-semibold">{t('menu.home')}</span>
            </div>
          </Link>

          <Link href="/chauffeur" className="flex-1">
            <div className={`flex flex-col items-center justify-center gap-0.5 py-1.5 transition-colors ${carActive ? 'text-[var(--ocean)]' : 'text-[var(--text-3)]'}`}>
              <div className={`p-1 rounded-xl transition-colors ${carActive ? 'bg-[var(--ocean-lt)]' : ''}`}>
                <CarIcon />
              </div>
              <span className="text-[10px] font-semibold">{t('menu.chauffeur')}</span>
            </div>
          </Link>

          <Link href="/tcm" className="flex-1">
            <div className={`flex flex-col items-center justify-center gap-0.5 py-1.5 transition-colors ${tcmActive ? 'text-[var(--ocean)]' : 'text-[var(--text-3)]'}`}>
              <div className={`p-1 rounded-xl transition-colors ${tcmActive ? 'bg-[var(--ocean-lt)]' : ''}`}>
                <LeafIcon />
              </div>
              <span className="text-[10px] font-semibold">{t('menu.tcm')}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
