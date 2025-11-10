'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { attractions } from '@/data/attractions';
import { useEffect, useState } from 'react';
import ShareButton from '@/components/ShareButton';

export default function AttractionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(false);

  const attraction = attractions.find(a => a.id === params.id);

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-6">{t('detail.notFound')}</p>
          <button
            onClick={() => router.push(`/${locale}`)}
            className="px-6 py-3 bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white rounded-xl hover:shadow-lg transition-all"
          >
            {t('detail.backToHome')}
          </button>
        </div>
      </div>
    );
  }

  // 获取本地化内容
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
    if (locale === 'en') return attraction.openingHours || '全天开放';
    if (locale === 'zh') return attraction.openingHoursZh || '全天开放';
    return attraction.openingHoursRu || 'Открыто круглосуточно';
  };

  const getBestTime = () => {
    if (locale === 'en') return attraction.bestTime || '全年';
    if (locale === 'zh') return attraction.bestTimeZh || '全年';
    return attraction.bestTimeRu || 'Круглый год';
  };

  const getTransportation = () => {
    if (locale === 'en') return attraction.transportation || '公共交通可达';
    if (locale === 'zh') return attraction.transportationZh || '公共交通可达';
    return attraction.transportationRu || 'Доступен общественным транспортом';
  };

  // 生成包含折扣信息的分享文案
  const getShareText = () => {
    const name = getName();
    if (attraction.isFree) {
      if (locale === 'zh') return `🎉 ${name} - 免费开放！三亚必游景点，不容错过！`;
      if (locale === 'en') return `🎉 ${name} - FREE Entry! Must-visit attraction in Sanya!`;
      return `🎉 ${name} - БЕСПЛАТНО! Обязательно посетите в Санье!`;
    }
    
    if (attraction.originalPrice) {
      const discount = Math.round((1 - attraction.price / attraction.originalPrice) * 100);
      if (locale === 'zh') return `🔥 限时优惠！${name} - 现在只需¥${attraction.price}（原价¥${attraction.originalPrice}，省${discount}%）！快来抢购！`;
      if (locale === 'en') return `🔥 Limited Offer! ${name} - Only ¥${attraction.price} (was ¥${attraction.originalPrice}, save ${discount}%)! Book now!`;
      return `🔥 Акция! ${name} - Всего ¥${attraction.price} (было ¥${attraction.originalPrice}, скидка ${discount}%)! Бронируйте сейчас!`;
    }
    
    if (locale === 'zh') return `✨ ${name} - 仅需¥${attraction.price}！三亚热门景点推荐！`;
    if (locale === 'en') return `✨ ${name} - Only ¥${attraction.price}! Popular attraction in Sanya!`;
    return `✨ ${name} - Всего ¥${attraction.price}! Популярная достопримечательность Саньи!`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#DC143C] mx-auto mb-4"></div>
          <p className="text-gray-600">{t('detail.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Fixed Back Button - 固定在左上角，直接返回首页 */}
      <button
        onClick={() => router.push(`/${locale}`)}
        onTouchEnd={(e) => {
          e.preventDefault();
          router.push(`/${locale}`);
        }}
        className="fixed top-6 left-6 z-50 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-2xl hover:bg-white hover:shadow-3xl transition-all flex items-center gap-2 group border-2 border-gray-200 hover:border-[#DC143C] touch-manipulation active:scale-95"
      >
        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
        <span className="font-semibold text-gray-900">{t('detail.backToList')}</span>
      </button>

      {/* Hero Section with Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={attraction.image}
          alt={getName()}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold border border-white/30">
                {attraction.category === 'beach' ? t('detail.beach') :
                 attraction.category === 'culture' ? t('detail.culture') :
                 attraction.category === 'nature' ? t('detail.nature') : t('detail.entertainment')}
              </span>
              <div className="flex items-center gap-2 bg-yellow-500/90 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-white text-lg">⭐</span>
                <span className="text-white font-bold">{attraction.rating}</span>
              </div>
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {getName()}
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <span>📍</span>
              <span>{getLocation()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 -mt-20 relative z-10">
          {/* Price Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-200 hover:border-[#DC143C] transition-all">
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <div className="text-sm text-gray-500 mb-2">{t('detail.price')}</div>
              {attraction.isFree ? (
                <div className="text-2xl font-bold bg-gradient-to-r from-[#DC143C] to-[#0039A6] bg-clip-text text-transparent">
                  {t('detail.free')}
                </div>
              ) : (
                <div className="text-2xl font-bold text-[#DC143C]">
                  ¥{attraction.price}
                </div>
              )}
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-200 hover:border-[#DC143C] transition-all">
            <div className="text-center">
              <div className="text-4xl mb-2">🕐</div>
              <div className="text-sm text-gray-500 mb-2">{t('detail.openingHours')}</div>
              <div className="text-lg font-semibold text-gray-900">
                {getOpeningHours()}
              </div>
            </div>
          </div>

          {/* Best Time Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-200 hover:border-[#DC143C] transition-all">
            <div className="text-center">
              <div className="text-4xl mb-2">🌞</div>
              <div className="text-sm text-gray-500 mb-2">{t('detail.bestTime')}</div>
              <div className="text-lg font-semibold text-gray-900">
                {getBestTime()}
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div style={{margin:10,padding: 10}} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-16 border-2 border-gray-200">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-4xl">📖</span>
            {t('detail.introduction')}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {getDescription()}
          </p>
        </div>

        {/* Highlights Section */}
        {getHighlights().length > 0 && (
          <div style={{margin:10,padding: 10}} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-8 md:p-10 mb-16 border-2 border-blue-200">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-4xl">✨</span>
              {t('detail.highlights')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getHighlights().map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-800 flex-1">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Facilities Section */}
        {getFacilities().length > 0 && (
          <div style={{margin:10,padding: 10}} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-16 border-2 border-gray-200">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-4xl">🏢</span>
              {t('detail.facilities')}
            </h2>
            <div className="flex flex-wrap gap-3">
              {getFacilities().map((facility, index) => (
                <span 
                  key={index}
                  className="px-5 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900 rounded-full font-semibold border-2 border-blue-200"
                >
                  {facility}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Transportation Section */}
        <div style={{margin:10,padding: 10}} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-10 mb-16 border-2 border-green-200">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-4xl">🚗</span>
            {t('detail.transportation')}
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            {getTransportation()}
          </p>
        </div>

        {/* Tips Section */}
        {getTips().length > 0 && (
          <div style={{margin:10,padding: 10}} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl p-8 md:p-10 border-2 border-amber-200">
            <h2 
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-4xl">💡</span>
              {t('detail.tips')}
            </h2>
            <ul className="space-y-3">
              {getTips().map((tip, index) => (
                <li key={index} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                  <span className="text-xl mt-0.5">💡</span>
                  <span className="text-gray-800 flex-1">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="sticky bottom-0 bg-white border-t-4 border-gray-200 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* <div>
            <div className="text-sm text-gray-500">门票价格</div>
            <div className="text-2xl font-bold text-[#DC143C]">
              {attraction.isFree ? '免费' : `¥${attraction.price}`}
            </div>
          </div> */}
          {/* <button className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#0039A6] text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all">
            立即预订
          </button> */}
        </div>
      </div>

      {/* Share Button */}
      <ShareButton customText={getShareText()} />
    </div>
  );
}