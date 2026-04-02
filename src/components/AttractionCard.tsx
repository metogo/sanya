'use client';

import { AttractionListItem } from '@/types/attraction';
import Image from 'next/image';
import { useState, memo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

interface AttractionCardProps {
  attraction: AttractionListItem;
  priority?: boolean;
}

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

function AttractionCard({ attraction, priority = false }: AttractionCardProps) {
  const t = useTranslations('card');
  const locale = useLocale();
  const [imageError, setImageError] = useState(false);

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
    <article className="bg-white rounded-2xl overflow-hidden border border-[var(--mist)] shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-[var(--sand)] flex-shrink-0">
        {!imageError ? (
          <Image
            src={attraction.image}
            alt={getName()}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            onError={() => setImageError(true)}
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-mid)] flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3L7 21"/><path d="M3 12c3-3 6-4.5 9-4.5s6 1.5 9 4.5"/>
              <path d="M3 21h18"/>
            </svg>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Category badge - top left */}
        <div className="absolute top-2.5 left-2.5">
          <span className="card-category-badge">{getCategory()}</span>
        </div>

        {/* Rating badge - top right */}
        <div className="absolute top-2.5 right-2.5 card-rating-badge">
          <StarIcon />
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-1)' }}>{attraction.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="card-body">
        {/* Title */}
        <h3
          className="card-title group-hover:text-[var(--ocean)] transition-colors text-[var(--text-1)]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {getName()}
        </h3>

        {/* Description */}
        <p className="card-desc text-[var(--text-3)]">
          {getDescription()}
        </p>

        {/* Location */}
        <div className="card-location text-[var(--text-3)]">
          <PinIcon />
          <span className="line-clamp-1">{getLocation()}</span>
        </div>

        {/* Divider */}
        <div className="card-divider" />

        {/* Bottom row: reviews + price + CTA */}
        <div className="card-footer">
          {/* Reviews */}
          <div className="card-reviews text-[var(--text-3)]">
            <ChatIcon />
            <span>{attraction.reviewCount.toLocaleString(locale)}</span>
          </div>

          {/* Price + CTA */}
          <div className="card-price-cta">
            {attraction.isFree ? (
              <span className="text-sm font-bold text-[var(--green)]">{t('free')}</span>
            ) : (
              <div className="text-right">
                {attraction.originalPrice ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] text-[var(--text-3)] line-through">¥{attraction.originalPrice}</span>
                    <span className="text-[15px] font-extrabold text-[var(--coral)]">¥{attraction.price}</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[10px] text-[var(--text-3)]">{t('from')}</span>
                    <span className="text-[15px] font-extrabold text-[var(--coral)]">¥{attraction.price}</span>
                  </div>
                )}
              </div>
            )}

            {/* CTA Button */}
            <Link
              href={`/attractions/${attraction.id}`}
              onClick={() => {
                sessionStorage.setItem('scrollPosition', window.scrollY.toString());
              }}
              className="card-cta-btn bg-[var(--ocean)] hover:bg-[var(--ocean-mid)] text-white active:scale-95"
            >
              {t('details')}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default memo(AttractionCard);
