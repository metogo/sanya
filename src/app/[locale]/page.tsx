'use client';

import {useEffect, useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {useParams} from 'next/navigation';
import Link from 'next/link';
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
            else if (selectedPrice === 'budget') matchesPrice = !attraction.isFree && attraction.price < 100;
            else if (selectedPrice === 'premium') matchesPrice = !attraction.isFree && attraction.price >= 100;

            return matchesSearch && matchesCategory && matchesRating && matchesPrice;
        });
    }, [searchQuery, selectedCategory, selectedRating, selectedPrice]);

    // 加载状态显示Loading过场
    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header onSearch={setSearchQuery}/>

            {/* Hero Banner - 使用Vercel CDN自动优化 */}
            <HeroBanner />

            {/* Filter Bar */}
            <FilterBar
                selectedCategory={selectedCategory}
                selectedRating={selectedRating}
                selectedPrice={selectedPrice}
                onCategoryChange={setSelectedCategory}
                onRatingChange={setSelectedRating}
                onPriceChange={setSelectedPrice}
            />

            {/* 浮动联系按钮 */}
            <ContactFloat />
            
            {/* 浮动分享按钮 */}
            <ShareButton />

            {/* Main Content */}
            <main
                className="max-w-[1400px] mx-auto py-12 md:py-16"
                style={{paddingLeft: '10px', paddingRight: '10px'}}>
                {/* Results Count */}
                <div className="mb-10" style={{marginTop: 10, marginBottom: 10}}>
                    <div
                        style={{padding: 10}}
                        className="flex items-center justify-between flex-wrap gap-4 bg-gradient-to-r from-blue-50 via-red-50 to-blue-50 p-6 md:p-8 rounded-2xl border-4 border-gray-300 shadow-lg">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                                style={{fontFamily: "'Playfair Display', serif"}}>
                                {t('main.popularPlaces')}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base">
                                {t('main.foundAttractions')} <span
                                className="font-bold text-[#DC143C] text-lg">{filteredAttractions.length}</span>
                            </p>
                        </div>

                        {/* Quick Stats */}
                        {filteredAttractions.length > 0 && (
                            <div className="flex gap-4 text-sm">
                                <div className="bg-white px-5 py-3 rounded-xl shadow-md border-2 border-gray-300">
                                    <span className="text-gray-600 font-semibold">{t('main.averageRating')}</span>
                                    <span className="ml-2 font-bold text-[#DC143C] text-lg">
                    {(filteredAttractions.reduce((acc, a) => acc + a.rating, 0) / filteredAttractions.length).toFixed(1)} ⭐
                  </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Attractions Grid */}
                {filteredAttractions.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                        {filteredAttractions.map((attraction) => (
                            <div key={attraction.id} className="p-2">
                                <AttractionCard attraction={attraction}/>
                            </div>
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
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setSelectedRating('all');
                                setSelectedPrice('all');
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            {t('main.resetFilters')}
                        </button>
                    </div>
                )}
            </main>

            {/* Bottom Navigation Menu */}
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-50">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex justify-around items-center py-4">
                        <Link
                            href={`/${locale}`}
                            className="relative flex flex-col items-center gap-2 px-8 py-3 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-blue-500/50"></div>
                            <div className="relative flex flex-col items-center gap-1">
                                <svg className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="text-sm font-bold text-white">
                                    {t('menu.home')}
                                </span>
                            </div>
                        </Link>
                        
                        <Link
                            href={`/${locale}/chauffeur`}
                            className="relative flex flex-col items-center gap-2 px-8 py-3 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg group-hover:shadow-purple-500/50"></div>
                            <div className="relative flex flex-col items-center gap-1">
                                <svg className="w-7 h-7 text-gray-600 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <span className="text-sm font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                                    {t('menu.chauffeur')}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 mb-20 bg-gradient-to-br from-[#DC143C] via-[#C41E3A] to-[#0039A6] text-white py-12">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4"
                            style={{fontFamily: "'Playfair Display', serif"}}>
                            {t('footer.title')}
                        </h3>
                        <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
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

