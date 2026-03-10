'use client';

import {Attraction} from '@/types/attraction';
import Image from 'next/image';
import {useState, memo} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/routing';

interface AttractionCardProps {
    attraction: Attraction;
}

function AttractionCard({attraction}: AttractionCardProps) {
    const t = useTranslations('card');
    const locale = useLocale();
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
        <article
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shrink-0">
                {!imageError ? (
                    <Image
                        src={attraction.image}
                        alt={getName()}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="text-amber-500 text-sm">⭐</span>
                    <span className="text-gray-800 font-bold text-sm">{attraction.rating}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm">
                    <span className="text-xs font-semibold text-gray-700">{getCategory()}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#DC143C] transition-colors"
                    style={{fontFamily: "'Playfair Display', serif"}}>
                    {getName()}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed flex-1">
                    {getDescription()}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 mb-3 text-xs text-gray-400">
                    <span className="text-sm">📍</span>
                    <span className="line-clamp-1 flex-1">{getLocation()}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-3"/>

                {/* Bottom Section: Button & Price */}
                <div className="flex flex-col gap-3 mt-auto">
                    {/* Price & Reviews Row */}
                    <div className="flex items-end justify-between">
                        {/* Reviews Count */}
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <span className="text-xs">💬</span>
                            <span>{attraction.reviewCount.toLocaleString(locale)} {t('reviews')}</span>
                        </div>

                        {/* Price */}
                        <div>
                            {attraction.isFree ? (
                                <span className="text-lg font-bold text-emerald-600">
                                    {t('free')}
                                </span>
                            ) : (
                                <div className="text-right">
                                    {attraction.originalPrice ? (
                                        <div className="flex flex-col items-end">
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-xs text-gray-400 line-through">
                                                    ¥{attraction.originalPrice}
                                                </span>
                                                <span className="text-[10px] font-bold text-red-500">
                                                    -{Math.round((1 - attraction.price / attraction.originalPrice) * 100)}%
                                                </span>
                                            </div>
                                            <span className="text-xl font-extrabold text-[#DC143C]">
                                                ¥{attraction.price}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-xs text-gray-400">{t('from')}</span>
                                            <span className="text-xl font-extrabold text-[#DC143C]">
                                                ¥{attraction.price}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Button & Share */}
                    <div className="flex gap-2">
                        <Link
                            href={`/attractions/${attraction.id}`}
                            onClick={() => {
                                sessionStorage.setItem('scrollPosition', window.scrollY.toString());
                            }}
                            className="flex-1 block py-2.5 bg-[#DC143C] text-white font-semibold text-sm rounded-xl hover:bg-[#C41E3A] hover:shadow-lg active:scale-[0.98] transition-all duration-200 text-center"
                        >
                            {t('details')} →
                        </Link>
                        
                        {/* Inline Share Button for PC */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                const url = `${window.location.origin}/attractions/${attraction.id}`;
                                const text = `${getName()} - ${getDescription()}`;
                                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`;
                                window.open(whatsappUrl, '_blank');
                            }}
                            className="hidden lg:flex items-center justify-center w-14 bg-green-500 text-white rounded-xl hover:bg-green-600 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                            title={t('share')}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default memo(AttractionCard);

