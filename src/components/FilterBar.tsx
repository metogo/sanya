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
    const filterBarRef = useRef<HTMLDivElement>(null);

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

    // 监听滚动事件
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // 当页面滚动超过 50px 时切换为紧凑模式
                    const scrollY = window.scrollY || window.pageYOffset;
                    setIsCompact(scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        // 初始检查
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={filterBarRef}
            className={`sticky bg-gradient-to-b from-gray-50 to-white shadow-xl border-b-2 border-gray-200 transition-all duration-300 ${
                isCompact ? 'py-2 md:py-3 z-40 top-[100px] md:top-[120px]' : 'py-6 md:py-8 z-30 top-0'
            }`}
        >
            {/* 调试指示器 - 可以在测试后删除 */}
            {isCompact && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl">
                    Mini Mode
                </div>
            )}

            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className={`flex flex-col transition-all duration-300 ${
                    isCompact ? 'gap-2 md:gap-3' : 'gap-6 md:gap-8'
                }`}>
                    {/* Category Filter */}
                    <div>
                        {!isCompact && (
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 block">
                                {t('categories')}
                            </label>
                        )}
                        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat.value}
                                    style={{paddingLeft: 3, paddingRight: 3}}
                                    onClick={() => onCategoryChange(cat.value)}
                                    className={`whitespace-nowrap font-semibold transition-all duration-200 ${
                                        isCompact
                                            ? 'px-4 py-1.5 rounded-lg text-xs'
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
                                className={`w-full rounded-xl font-medium bg-gray-50 text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 cursor-pointer transition-all hover:bg-gray-100 ${
                                    isCompact ? 'px-3 py-2 text-xs' : 'px-5 py-3.5 text-sm'
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
                                className={`w-full rounded-xl font-medium bg-gray-50 text-gray-700 border-2 border-gray-300 focus:outline-none focus:border-[#DC143C] focus:ring-2 focus:ring-[#DC143C]/20 cursor-pointer transition-all hover:bg-gray-100 ${
                                    isCompact ? 'px-3 py-2 text-xs' : 'px-5 py-3.5 text-sm'
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

