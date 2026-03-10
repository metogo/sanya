'use client';

import {useEffect, useMemo, useState, useCallback} from 'react';
import {useTranslations} from 'next-intl';
import {useParams} from 'next/navigation';
import {Link} from '@/i18n/routing';
import {useSpring, animated} from '@react-spring/web';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FilterBar from '@/components/FilterBar';
import AttractionCard from '@/components/AttractionCard';
import ContactFloat from '@/components/ContactFloat';
import ShareButton from '@/components/ShareButton';
import LoadingScreen from '@/components/LoadingScreen';
import {attractions} from '@/data/attractions';
import {FilterCategory, FilterPrice, FilterRating} from '@/types/attraction';

export default function Home() {
    const t = useTranslations();
    const params = useParams();
    const locale = params.locale as string;
    const [isLoading, setIsLoading] = useState(true); // 始终从true开始，避免hydration错误
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
    const [selectedRating, setSelectedRating] = useState<FilterRating>('all');
    const [selectedPrice, setSelectedPrice] = useState<FilterPrice>('all');
    const [isMounted, setIsMounted] = useState(false);

    // 挂载后检查是否需要显示loading
    useEffect(() => {
        setIsMounted(true);
        const hasVisited = sessionStorage.getItem('hasVisitedHome');
        
        if (!hasVisited) {
            const startTime = Date.now();
            const minDisplayTime = 800; // 最小显示 800ms

            const handleLoad = () => {
                const elapsedTime = Date.now() - startTime;
                const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem('hasVisitedHome', 'true');
                }, remainingTime);
            };

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
                return () => window.removeEventListener('load', handleLoad);
            }
        } else {
            // 已访问过，直接跳过loading
            setIsLoading(false);
        }
    }, []);

    // 恢复滚动位置（从详情页返回时）
    useEffect(() => {
        if (!isLoading) {
            const savedPosition = sessionStorage.getItem('scrollPosition');
            if (savedPosition) {
                // 立即恢复位置，使用instant而非smooth以获得最快速度
                requestAnimationFrame(() => {
                    window.scrollTo({
                        top: parseInt(savedPosition),
                        behavior: 'instant'
                    });
                    // 清除保存的位置
                    sessionStorage.removeItem('scrollPosition');
                });
            }
        }
    }, [isLoading]);

    // Filter attractions based on search and filters
    const filteredAttractions = useMemo(() => {
        return attractions.filter((attraction) => {
            // Search filter
            const matchesSearch = searchQuery === '' ||
                attraction.nameRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
                attraction.descriptionRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
                attraction.locationRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
                attraction.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            // Category filter
            const matchesCategory = selectedCategory === 'all' || attraction.category === selectedCategory;

            // Rating filter
            let matchesRating = true;
            if (selectedRating === '4+') matchesRating = attraction.rating >= 4;
            else if (selectedRating === '4.5+') matchesRating = attraction.rating >= 4.5;
            else if (selectedRating === '5') matchesRating = attraction.rating === 5;

            // Price filter
            let matchesPrice = true;
            if (selectedPrice === 'free') matchesPrice = attraction.isFree;
            else if (selectedPrice === 'budget') matchesPrice = !attraction.isFree && attraction.price < 200;
            else if (selectedPrice === 'premium') matchesPrice = !attraction.isFree && attraction.price >= 200;

            return matchesSearch && matchesCategory && matchesRating && matchesPrice;
        });
    }, [searchQuery, selectedCategory, selectedRating, selectedPrice]);

    // 使用 useCallback 优化事件处理函数
    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query);
    }, []);

    const handleCategoryChange = useCallback((category: FilterCategory) => {
        setSelectedCategory(category);
    }, []);

    const handleRatingChange = useCallback((rating: FilterRating) => {
        setSelectedRating(rating);
    }, []);

    const handlePriceChange = useCallback((price: FilterPrice) => {
        setSelectedPrice(price);
    }, []);

    const handleResetFilters = useCallback(() => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSelectedRating('all');
        setSelectedPrice('all');
    }, []);

    // 加载状态显示Loading过场
    if (isLoading) {
        return <LoadingScreen />;
    }

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'RossiySanya',
        alternateName: ['Санья Экскурсии', 'Sanya Excursions', '三亚旅游'],
        url: 'https://rossiysanya.com',
        description: locale === 'ru'
            ? 'Лучшие экскурсии и достопримечательности в Санье, Хайнань. Организация туров, билеты, трансферы.'
            : locale === 'zh'
            ? '三亚最佳旅游景点攻略，海南岛热带天堂，景点门票、专车接送、旅游指南。'
            : 'Best tours and attractions in Sanya, Hainan. Tour organization, tickets, transfers and travel guides.',
        inLanguage: locale === 'ru' ? 'ru-RU' : locale === 'zh' ? 'zh-CN' : 'en-US',
    };

    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'RossiySanya',
        url: 'https://rossiysanya.com',
        logo: 'https://rossiysanya.com/images/banners/亚龙湾.jpeg',
        description: locale === 'ru'
            ? 'Организация экскурсий и туров по Санье для русскоговорящих туристов'
            : locale === 'zh'
            ? '三亚旅游服务，为游客提供专业的景点导览和专车接送'
            : 'Tour organization and travel services in Sanya for international tourists',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Sanya',
            addressRegion: 'Hainan',
            addressCountry: 'CN',
        },
        areaServed: {
            '@type': 'City',
            name: 'Sanya',
        },
        sameAs: [
            'https://t.me/saborovivan',
        ],
    };

    const itemListJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: locale === 'ru' ? 'Достопримечательности Санья' : locale === 'zh' ? '三亚景点列表' : 'Sanya Attractions',
        numberOfItems: filteredAttractions.length,
        itemListElement: filteredAttractions.slice(0, 10).map((attraction, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://rossiysanya.com/${locale}/attractions/${attraction.id}`,
            name: locale === 'ru' ? attraction.nameRu : locale === 'zh' ? (attraction.nameZh || attraction.name) : attraction.name,
        })),
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />
            {/* Header */}
            <Header
                onSearch={handleSearch}
                selectedCategory={selectedCategory}
                selectedRating={selectedRating}
                selectedPrice={selectedPrice}
                onCategoryChange={handleCategoryChange}
                onRatingChange={handleRatingChange}
                onPriceChange={handlePriceChange}
            />

            {/* Hero Banner - 使用Vercel CDN自动优化 */}
            <HeroBanner />

            {/* Filter Bar - 仅在移动端显示 */}
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

            {/* 浮动联系按钮 - 仅在移动端显示 */}
            <div className="lg:hidden">
                <ContactFloat />
            </div>
            
            {/* 浮动分享按钮 - 仅在移动端显示 */}
            <div className="lg:hidden">
                <ShareButton />
            </div>

            {/* Main Content */}
            <main
                style={{margin: '0 auto'}}
                className="max-w-[1440px] mx-auto py-5 md:py-8 px-4 sm:px-6 lg:px-12 xl:px-16">
                {/* Results Count */}
                <div className="mb-5 md:mb-8">
                    <div className="flex items-baseline justify-between">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900"
                            style={{fontFamily: "'Playfair Display', serif"}}>
                            {t('main.popularPlaces')}
                        </h2>
                        <p className="text-gray-400 text-xs md:text-sm">
                            {t('main.foundAttractions')} <span
                            className="font-semibold text-gray-600">{filteredAttractions.length}</span>
                        </p>
                    </div>
                </div>

                {/* Attractions Grid */}
                {filteredAttractions.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                        {filteredAttractions.map((attraction) => (
                            <AttractionCard key={attraction.id} attraction={attraction}/>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-3xl shadow-lg border border-gray-100">
                        <div className="text-8xl mb-6 animate-bounce">🔍</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                            style={{fontFamily: "'Playfair Display', serif"}}>
                            {t('main.noResults')}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                            {t('main.noResultsDescription')}
                        </p>
                        <button
                            onClick={handleResetFilters}
                            className="px-8 py-3 bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            {t('main.resetFilters')}
                        </button>
                    </div>
                )}
            </main>

            {/* Bottom Navigation Menu - 仅在移动端显示 */}
            <div className="lg:hidden">
                <BottomMenu locale={locale} currentPage="home" t={t} />
            </div>

            {/* Footer */}
            <footer className="mt-10 mb-16 bg-gradient-to-br from-[#DC143C] via-[#C41E3A] to-[#0039A6] text-white py-10">
                <div style={{margin: '0 auto'}} className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                    <div  className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4"
                            style={{fontFamily: "'Playfair Display', serif"}}>
                            {t('footer.title')}
                        </h3>
                        <p style={{margin: '0 auto'}} className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                            {t('footer.subtitle')}
                        </p>
                        <div className="border-t border-white/20 pt-6 mt-6">
                            <p className="text-sm text-white/80">
                                {t('footer.copyright')}
                            </p>
                            <p className="text-xs text-white/60 mt-2">
                                {t('footer.rights')}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function BottomMenu({ locale, currentPage, t }: { locale: string; currentPage: 'home' | 'chauffeur'; t: any }) {
    const homeActive = currentPage === 'home';
    const chauffeurActive = currentPage === 'chauffeur';

    const homeSpring = useSpring({
        scale: homeActive ? 1 : 0.95,
        opacity: homeActive ? 1 : 0.7,
        config: { tension: 300, friction: 20 }
    });

    const chauffeurSpring = useSpring({
        scale: chauffeurActive ? 1 : 0.95,
        opacity: chauffeurActive ? 1 : 0.7,
        config: { tension: 300, friction: 20 }
    });

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[9999] pb-safe">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex items-center justify-around py-2">
                    <Link href="/" className="flex-1 max-w-[120px]">
                        <div className="flex flex-col items-center gap-1 py-2 cursor-pointer">
                            <div className={`p-1.5 rounded-full transition-colors duration-300 ${homeActive ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <span className={`text-xs font-medium transition-colors duration-300 ${homeActive ? 'text-blue-600' : 'text-gray-500'}`}>
                                {t('menu.home')}
                            </span>
                        </div>
                    </Link>
                    
                    <Link href="/chauffeur" className="flex-1 max-w-[120px]">
                        <div className="flex flex-col items-center gap-1 py-2 cursor-pointer">
                            <div className={`p-1.5 rounded-full transition-colors duration-300 ${chauffeurActive ? 'bg-purple-50 text-purple-600' : 'text-gray-500'}`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <span className={`text-xs font-medium transition-colors duration-300 ${chauffeurActive ? 'text-purple-600' : 'text-gray-500'}`}>
                                {t('menu.chauffeur')}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

