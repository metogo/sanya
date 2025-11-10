'use client';

import {Attraction} from '@/types/attraction';
import Image from 'next/image';
import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';

interface AttractionCardProps {
    attraction: Attraction;
}

export default function AttractionCard({attraction}: AttractionCardProps) {
    const t = useTranslations('card');
    const locale = useLocale();
    const router = useRouter();
    const [imageError, setImageError] = useState(false);

    // Get localized content based on current locale
    const getName = () => {
        if (locale === 'en') return attraction.name;
        if (locale === 'zh') return attraction.nameZh || attraction.nameRu;
        return attraction.nameRu;
    };

    const getDescription = () => {
        if (locale === 'en') return attraction.description;
        if (locale === 'zh') return attraction.descriptionZh || attraction.descriptionRu;
        return attraction.descriptionRu;
    };

    const getLocation = () => {
        if (locale === 'en') return attraction.location;
        if (locale === 'zh') return attraction.locationZh || attraction.locationRu;
        return attraction.locationRu;
    };

    const getCategory = () => {
        if (locale === 'en') return attraction.categoryEn || attraction.categoryRu;
        if (locale === 'zh') return attraction.categoryZh || attraction.categoryRu;
        return attraction.categoryRu;
    };

    return (
        <div
            className="bg-white rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden group border-4 border-gray-300 hover:border-[#DC143C] transform hover:-translate-y-2 hover:scale-[1.02]">
            {/* Image Container */}
            <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {!imageError ? (
                    <Image
                        src={attraction.image}
                        alt={getName()}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transition-transform duration-700 ease-out"
                        style={{
                            transform: 'scale(1.15)',
                            transformOrigin: 'center center'
                        }}
                        onError={() => setImageError(true)}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                ) : (
                    <div
                        className="w-full h-full bg-gradient-to-br from-[#DC143C] to-[#0039A6] flex items-center justify-center">
                        <span className="text-7xl opacity-90">🏖️</span>
                    </div>
                )}

                {/* Overlay gradient - 悬停时额外放大 */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onMouseEnter={(e) => {
                        const img = e.currentTarget.previousElementSibling as HTMLElement;
                        if (img) img.style.transform = 'scale(1.25)';
                    }}
                    onMouseLeave={(e) => {
                        const img = e.currentTarget.previousElementSibling as HTMLElement;
                        if (img) img.style.transform = 'scale(1.15)';
                    }}
                />

                {/* Rating Badge */}
                <div
                    className="absolute top-4 right-4 bg-gradient-to-br from-yellow-400 to-orange-500 backdrop-blur-sm px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-lg">
                    <span className="text-white text-lg">⭐</span>
                    <span className="text-white font-bold text-base">{attraction.rating}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md">
                    <span className="text-sm font-semibold text-gray-700">{getCategory()}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5" style={{padding: 10}}>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-[#DC143C] transition-colors"
                    style={{fontFamily: "'Playfair Display', serif"}}>
                    {getName()}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {getDescription()}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <span className="text-base">📍</span>
                    <span className="line-clamp-1 flex-1">{getLocation()}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4"/>

                {/* Bottom Section */}
                <div className="flex items-center justify-between mb-4">
                    {/* Reviews Count */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span className="text-sm">💬</span>
                        <span>{attraction.reviewCount.toLocaleString(locale)} {t('reviews')}</span>
                    </div>

                    {/* Price */}
                    <div>
                        {attraction.isFree ? (
                            <span
                                className="text-xl font-bold bg-gradient-to-r from-[#DC143C] to-[#0039A6] bg-clip-text text-transparent">
                {t('free')}
              </span>
                        ) : (
                            <div className="text-right">
                                {/* 如果有原价，显示折扣信息 */}
                                {attraction.originalPrice ? (
                                    <div className="space-y-1">
                                        {/* 折扣百分比标签 */}
                                        <div className="flex items-center justify-end gap-2">
                                            <span className="text-[10px] text-gray-400 line-through">
                                                ¥{attraction.originalPrice}
                                            </span>
                                            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
                                                {Math.round((1 - attraction.price / attraction.originalPrice) * 100)}% {t('off')}
                                            </div>
                                        </div>
                                        {/* 折扣价 */}
                                        <div className="flex items-baseline justify-end gap-1">
                                            <span className="text-xs text-gray-500">{t('now')}</span>
                                            <span className="text-2xl font-black bg-gradient-to-r from-[#DC143C] to-[#FF6B6B] bg-clip-text text-transparent">
                                                ¥{attraction.price}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    // 没有原价时的显示
                                    <div>
                                        <div className="text-xs text-gray-500">{t('from')}</div>
                                        <div className="text-xl font-bold bg-gradient-to-r from-[#DC143C] to-[#0039A6] bg-clip-text text-transparent">
                                            {attraction.price}¥
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={() => {
                        // 保存当前滚动位置
                        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                        router.push(`/${locale}/attractions/${attraction.id}`);
                    }}
                    onTouchStart={(e) => {
                        e.currentTarget.style.transform = 'scale(0.98)';
                    }}
                    onTouchEnd={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        // 保存当前滚动位置
                        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                        setTimeout(() => {
                            router.push(`/${locale}/attractions/${attraction.id}`);
                        }, 0);
                    }}
                    className="w-full py-3.5 bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group-hover:from-[#C41E3A] group-hover:to-[#002D80] touch-manipulation">
          <span className="flex items-center justify-center gap-2">
            {t('details')}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
                </button>
            </div>
        </div>
    );
}

