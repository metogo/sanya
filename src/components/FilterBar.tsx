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
    const [isCompact, setIsCompact] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
                    setIsCompact(scrollY > 150);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    return (
        <div
            ref={filterRef}
            className={`sticky top-[55px] md:top-[110px] z-40 bg-gradient-to-b from-gray-50 to-white shadow-xl border-gray-300 transition-all duration-300 ${
                isCompact ? 'py-3' : 'py-8 md:py-10'
            }`}
            style={{padding: 10}}
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                {/* 滚动后：单行紧凑模式 */}
                {isCompact ? (
                    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
                        {/* Category Filter - Compact */}
                        <div className="flex gap-2 flex-shrink-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => onCategoryChange(cat.value)}
                                    className={`px-4 py-2 rounded-lg whitespace-nowrap text-xs font-semibold transition-all duration-200 ${
                                        selectedCategory === cat.value
                                            ? 'bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white shadow-md'
                                            : 'bg-gray-50 text-gray-700 border border-gray-300 hover:border-[#DC143C]'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-8 w-px bg-gray-300 flex-shrink-0"></div>

                        {/* Rating Filter - Compact */}
                        <select
                            value={selectedRating}
                            onChange={(e) => onRatingChange(e.target.value as FilterRating)}
                            className="px-3 py-2 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 border border-gray-300 focus:outline-none focus:border-[#DC143C] cursor-pointer flex-shrink-0"
                        >
                            {ratings.map((rating) => (
                                <option key={rating.value} value={rating.value}>
                                    {rating.label}
                                </option>
                            ))}
                        </select>

                        {/* Price Filter - Compact */}
                        <select
                            value={selectedPrice}
                            onChange={(e) => onPriceChange(e.target.value as FilterPrice)}
                            className="px-3 py-2 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 border border-gray-300 focus:outline-none focus:border-[#DC143C] cursor-pointer flex-shrink-0"
                        >
                            {prices.map((price) => (
                                <option key={price.value} value={price.value}>
                                    {price.label}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    /* 未滚动：完整展开模式 */
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Category Filter */}
                        <div>
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 block">
                                {t('categories')}
                            </label>
                            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.value}
                                        style={{paddingLeft: 3, paddingRight: 3}}
                                        onClick={() => onCategoryChange(cat.value)}
                                        className={`px-6 py-3 rounded-xl whitespace-nowrap text-sm font-semibold transition-all duration-200 ${
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
                        <div className="flex flex-wrap gap-4 md:gap-6">
                            <div className="flex-1 min-w-[180px]">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 block">
                                    {t('ratings')}
                                </label>
                                <select
                                    value={selectedRating}
                                    onChange={(e) => onRatingChange(e.target.value as FilterRating)}
                                    className="w-full px-5 py-3.5 rounded-xl text-sm font-medium bg-gray-50 text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 cursor-pointer transition-all hover:bg-gray-100"
                                >
                                    {ratings.map((rating) => (
                                        <option key={rating.value} value={rating.value}>
                                            {rating.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex-1 min-w-[180px]">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 block">
                                    {t('prices')}
                                </label>
                                <select
                                    value={selectedPrice}
                                    onChange={(e) => onPriceChange(e.target.value as FilterPrice)}
                                    className="w-full px-5 py-3.5 rounded-xl text-sm font-medium bg-gray-50 text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 cursor-pointer transition-all hover:bg-gray-100"
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
                )}
            </div>
        </div>
    );
}

