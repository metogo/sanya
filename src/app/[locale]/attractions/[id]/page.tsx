'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { attractions } from '@/data/attractions';
import { useState } from 'react';
import ShareButton from '@/components/ShareButton';
import ContactFloat from '@/components/ContactFloat';

export default function AttractionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const [isLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const attraction = attractions.find(a => a.id === params.id);

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-6">
          <div className="text-6xl mb-6">🏝️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">404</h1>
          <p className="text-gray-500 mb-8">{t('detail.notFound')}</p>
          <button
            onClick={() => router.push(`/${locale}`)}
            className="px-6 py-3 bg-[#DC143C] text-white rounded-xl hover:bg-[#C41E3A] transition-all"
          >
            {t('detail.backToHome')}
          </button>
        </div>
      </div>
    );
  }

  const getName = () => {
    if (locale === 'en') return attraction.name;
    if (locale === 'zh') return attraction.nameZh || attraction.name;
    return attraction.nameRu;
  };

  const getDescription = () => {
    if (locale === 'en') return attraction.detailedDescription || attraction.description;
    if (locale === 'zh') return attraction.detailedDescriptionZh || attraction.descriptionZh || attraction.description;
    return attraction.detailedDescriptionRu || attraction.descriptionRu;
  };

  const getLocation = () => {
    if (locale === 'en') return attraction.location;
    if (locale === 'zh') return attraction.locationZh || attraction.location;
    return attraction.locationRu;
  };

  const getHighlights = () => {
    if (locale === 'en') return attraction.highlights || [];
    if (locale === 'zh') return attraction.highlightsZh || attraction.highlights || [];
    return attraction.highlightsRu || attraction.highlights || [];
  };

  const getTips = () => {
    if (locale === 'en') return attraction.tips || [];
    if (locale === 'zh') return attraction.tipsZh || attraction.tips || [];
    return attraction.tipsRu || attraction.tips || [];
  };

  const getFacilities = () => {
    if (locale === 'en') return attraction.facilities || [];
    if (locale === 'zh') return attraction.facilitiesZh || attraction.facilities || [];
    return attraction.facilitiesRu || attraction.facilities || [];
  };

  const getOpeningHours = () => {
    if (locale === 'en') return attraction.openingHours || 'Open 24 hours';
    if (locale === 'zh') return attraction.openingHoursZh || '全天开放';
    return attraction.openingHoursRu || 'Открыто круглосуточно';
  };

  const getBestTime = () => {
    if (locale === 'en') return attraction.bestTime || 'Year-round';
    if (locale === 'zh') return attraction.bestTimeZh || '全年';
    return attraction.bestTimeRu || 'Круглый год';
  };

  const getTransportation = () => {
    if (locale === 'en') return attraction.transportation || 'Public transport available';
    if (locale === 'zh') return attraction.transportationZh || '公共交通可达';
    return attraction.transportationRu || 'Доступен общественным транспортом';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-200 border-t-[#DC143C]"></div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: getName(),
    description: getDescription(),
    image: attraction.image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sanya',
      addressRegion: 'Hainan',
      addressCountry: 'CN',
      streetAddress: getLocation(),
    },
    url: `https://rossiysanya.com/${locale}/attractions/${attraction.id}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: attraction.rating,
      reviewCount: attraction.reviewCount,
    },
    priceRange: attraction.isFree ? '0' : `¥${attraction.price}`,
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back Button */}
      <button
        onClick={() => router.push(`/${locale}`)}
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-all active:scale-95"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Hero Image */}
      <div className="relative h-[35vh] min-h-[240px] md:h-[45vh] md:min-h-[320px] max-h-[480px] w-full">
        {!imageError ? (
          <Image
            src={attraction.image}
            alt={getName()}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#DC143C] to-[#0039A6] flex items-center justify-center">
            <span className="text-8xl opacity-50">🏖️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Title on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[11px] font-medium border border-white/20">
                {attraction.category === 'beach' ? t('detail.beach') :
                 attraction.category === 'culture' ? t('detail.culture') :
                 attraction.category === 'nature' ? t('detail.nature') : t('detail.entertainment')}
              </span>
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[11px] font-medium border border-white/20">
                ⭐ {attraction.rating}
              </span>
            </div>
            <h1
              className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1.5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {getName()}
            </h1>
            <p className="text-white/70 text-xs md:text-sm flex items-center gap-1">
              📍 {getLocation()}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 py-4 -mt-5 relative z-10">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-3 py-2.5 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">{t('detail.price')}</div>
            {attraction.isFree ? (
              <div className="text-base font-bold text-emerald-600">{t('detail.free')}</div>
            ) : (
              <div className="text-base font-bold text-[#DC143C]">¥{attraction.price}</div>
            )}
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-3 py-2.5 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">{t('detail.openingHours')}</div>
            <div className="text-xs font-semibold text-gray-800 leading-snug">{getOpeningHours()}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-3 py-2.5 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">{t('detail.bestTime')}</div>
            <div className="text-xs font-semibold text-gray-800 leading-snug">{getBestTime()}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-3 py-2.5 text-center">
            <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">💬</div>
            <div className="text-xs font-semibold text-gray-800">{attraction.reviewCount.toLocaleString()}</div>
          </div>
        </div>

        {/* Description */}
        <section className="py-5 border-b border-gray-100">
          <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('detail.introduction')}
          </h2>
          <p className="text-gray-600 text-sm md:text-[15px] leading-[1.85] whitespace-pre-line">
            {getDescription()}
          </p>
        </section>

        {/* Video */}
        {attraction.video && (
          <section className="py-5 border-b border-gray-100">
            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              🎬 {t('detail.video')}
            </h2>
            <p className="text-gray-500 text-xs mb-3">{t('detail.watchVideo')}</p>
            <div className="rounded-xl overflow-hidden bg-black">
              <video
                controls
                className="w-full h-auto"
                poster={attraction.image}
                preload="metadata"
                style={{ maxHeight: '400px' }}
              >
                <source src={attraction.video} type="video/mp4" />
              </video>
            </div>
          </section>
        )}

        {/* Highlights */}
        {getHighlights().length > 0 && (
          <section className="py-5 border-b border-gray-100">
            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('detail.highlights')}
            </h2>
            <div className="space-y-2">
              {getHighlights().map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 py-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Facilities */}
        {getFacilities().length > 0 && (
          <section className="py-5 border-b border-gray-100">
            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('detail.facilities')}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {getFacilities().map((facility, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs border border-gray-100"
                >
                  {facility}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Transportation */}
        <section className="py-5 border-b border-gray-100">
          <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('detail.transportation')}
          </h2>
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
            {getTransportation()}
          </p>
        </section>

        {/* Tips */}
        {getTips().length > 0 && (
          <section className="py-5 mb-20">
            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('detail.tips')}
            </h2>
            <div className="bg-amber-50/50 rounded-xl p-3.5">
              <ul className="space-y-2.5">
                {getTips().map((tip, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0 text-sm">•</span>
                    <span className="text-gray-600 text-[13px] leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      <ShareButton />
      <ContactFloat />
    </div>
  );
}
