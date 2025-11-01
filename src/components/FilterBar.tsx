'use client';

import {useEffect, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {FilterCategory, FilterPrice, FilterRating} from '@/types/attraction';

interface FilterBarProps {
    selectedCategory: FilterCategory;
    selectedRating: FilterRating;
    selectedPrice: FilterPrice;
    onCategoryChange: (category: FilterCategory) => void;
    onRatingChange: (rating: FilterRating) => void;
    onPriceChange: (price: FilterPrice) => void;
}

export default function FilterBar({
                                      selectedCategory,
                                      selectedRating,
                                      selectedPrice,
                                      onCategoryChange,
                                      onRatingChange,
                                      onPriceChange,
                                  }: FilterBarProps) {
    const t = useTranslations('filters');
    const [isCompact, setIsCompact] = useState(false); // 默认宽松模式
    const [headerHeight, setHeaderHeight] = useState(86); // Header 高度，默认 86px
    const filterBarRef = useRef<HTMLDivElement>(null);
    const isCompactRef = useRef(false);

    const categories: { value: FilterCategory; label: string }[] = [
        {value: 'all', label: t('all')},
        {value: 'beach', label: t('beach')},
        {value: 'culture', label: t('culture')},
        {value: 'nature', label: t('nature')}, 
        {value: 'entertainment', label: t('entertainment')},
    ];

    const ratings: { value: FilterRating; label: string }[] = [
        {value: 'all', label: t('allRatings')},
        {value: '4+', label: t('rating4Plus')},
        {value: '4.5+', label: t('rating45Plus')},
        {value: '5', label: t('rating5')},
    ];

    const prices: { value: FilterPrice; label: string }[] = [ 
        {value: 'all', label: t('allPrices')},
        {value: 'free', label: t('free')},
        {value: 'budget', label: t('budget')},
        {value: 'premium', label: t('premium')},
    ];

    // 计算 Header 高度
    useEffect(() => {
        const updateHeaderHeight = () => {
            const header = document.querySelector('header');
            if (header) {
                const height = header.offsetHeight;
                setHeaderHeight(height);
                console.log(`📏 [FilterBar] Header 高度: ${height}px`);
            }
        };

        // 初始计算
        updateHeaderHeight();

        // 监听窗口大小变化（Header 高度可能改变）
        window.addEventListener('resize', updateHeaderHeight);
        
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    // 监听滚动，滚动到第一个卡片时（约300px）切换为紧凑模式
    useEffect(() => {
        let ticking = false;
        const SCROLL_THRESHOLD = 300; // 约一个卡片高度

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY || window.pageYOffset;
                    const shouldBeCompact = scrollY > SCROLL_THRESHOLD;

                    if (shouldBeCompact !== isCompactRef.current) {
                        console.log(`🔄 [FilterBar] ${isCompactRef.current ? '紧凑' : '宽松'} -> ${shouldBeCompact ? '紧凑' : '宽松'} (滚动: ${scrollY}px)`);
                        isCompactRef.current = shouldBeCompact;
                        setIsCompact(shouldBeCompact);
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        const initialScrollY = window.scrollY || window.pageYOffset;
        console.log(`✅ [FilterBar] 初始化 - 滚动: ${initialScrollY}px, 阈值: 300px`);
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={filterBarRef}
            className={`w-full transition-all duration-300 ${
                isCompact
                    ? 'fixed left-0 right-0 py-1 md:py-1.5 z-45 bg-red-100 border-b-4 border-red-500 shadow-2xl'
                    : 'relative py-6 md:py-8 z-10 bg-gradient-to-b from-gray-50 to-white shadow-xl border-b-2 border-gray-200'
            }`}
            style={isCompact ? { top: `${headerHeight}px` } : undefined}
        >
            {/* 临时调试面板 */}
            <div className={`fixed top-20 right-4 px-4 py-2 rounded-lg shadow-xl z-50 text-white font-bold ${
                isCompact ? 'bg-red-600 text-lg' : 'bg-blue-600'
            }`}>
            </div>
            <div  className={`max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 ${
                isCompact ? ' justify-items-center p-[5px]' : ''
            }`}>
                <div className={`flex flex-col transition-all duration-300 ${
                    isCompact ? 'gap-2 md:gap-3 py-[5px]' : 'gap-6 md:gap-8'
                }`}>
                    {/* Category Filter */}
                    <div>
                        {!isCompact && (
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 block">
                                {t('categories')}
                            </label>
                        )}
                        <div className={`flex overflow-x-auto pb-2 scrollbar-hide ${
                            isCompact ? 'gap-1.5' : 'gap-3 md:gap-4'
                        }`}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => onCategoryChange(cat.value)}
                                    className={`whitespace-nowrap font-semibold transition-all ${
                                        isCompact
                                            ? 'px-2 py-0.5 rounded text-[10px]'
                                            : 'px-6 py-3 rounded-xl text-sm'
                                    } ${
                                        selectedCategory === cat.value
                                            ? 'bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white shadow-lg shadow-red-500/30 scale-105'
                                            : 'bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-[#DC143C] hover:bg-gray-100 hover:scale-105'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Rating and Price Filters */}
                    <div className={`flex flex-wrap gap-4 md:gap-6 ${isCompact ? 'hidden md:flex' : ''}`}>
                        <div className="flex-1 min-w-[180px]">
                            {!isCompact && (
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 block">
                                    {t('ratings')}
                                </label>
                            )}
                            <select
                                value={selectedRating}
                                onChange={(e) => onRatingChange(e.target.value as FilterRating)}
                                className={`w-full rounded-xl font-medium bg-gray-50 text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 cursor-pointer hover:bg-gray-100 ${
                                    isCompact ? 'px-2 py-1 text-[10px]' : 'px-5 py-3.5 text-sm'
                                }`}
                            >
                                {ratings.map((rating) => (
                                    <option key={rating.value} value={rating.value}>
                                        {rating.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex-1 min-w-[180px]">
                            {!isCompact && (
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 block">
                                    {t('prices')}
                                </label>
                            )}
                            <select
                                value={selectedPrice}
                                onChange={(e) => onPriceChange(e.target.value as FilterPrice)}
                                className={`w-full rounded-xl font-medium bg-gray-50 text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 cursor-pointer hover:bg-gray-100 ${
                                    isCompact ? 'px-2 py-1 text-[10px]' : 'px-5 py-3.5 text-sm'
                                }`}
                            >
                                {prices.map((price) => (
                                    <option key={price.value} value={price.value}>
                                        {price.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

