'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { attractions } from '@/data/attractions';
import { useState } from 'react';
import ShareButton from '@/components/ShareButton';
import ContactFloat from '@/components/ContactFloat';

/* ── Icons ── */
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const TagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const TruckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/>
    <line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function AttractionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const [imageError, setImageError] = useState(false);

  const attraction = attractions.find((a) => a.id === params.id);

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--sand)]">
        <div className="text-center px-6">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[var(--mist)] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3L7 21"/><path d="M3 12c3-3 6-4.5 9-4.5s6 1.5 9 4.5"/>
              <path d="M3 21h18"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[var(--text-1)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            404
          </h1>
          <p className="text-[var(--text-3)] text-sm mb-6">{t('detail.notFound')}</p>
          <button
            onClick={() => router.push(`/${locale}`)}
            className="btn-primary"
          >
            {t('detail.backToHome')}
          </button>
        </div>
      </div>
    );
  }

  const getName         = () => locale === 'en' ? attraction.name : locale === 'zh' ? (attraction.nameZh || attraction.name) : attraction.nameRu;
  const getDescription  = () => locale === 'en' ? (attraction.detailedDescription || attraction.description) : locale === 'zh' ? (attraction.detailedDescriptionZh || attraction.descriptionZh || attraction.description) : (attraction.detailedDescriptionRu || attraction.descriptionRu);
  const getLocation     = () => locale === 'en' ? attraction.location : locale === 'zh' ? (attraction.locationZh || attraction.location) : attraction.locationRu;
  const getHighlights   = () => locale === 'en' ? (attraction.highlights || []) : locale === 'zh' ? (attraction.highlightsZh || attraction.highlights || []) : (attraction.highlightsRu || attraction.highlights || []);
  const getTips         = () => locale === 'en' ? (attraction.tips || []) : locale === 'zh' ? (attraction.tipsZh || attraction.tips || []) : (attraction.tipsRu || attraction.tips || []);
  const getFacilities   = () => locale === 'en' ? (attraction.facilities || []) : locale === 'zh' ? (attraction.facilitiesZh || attraction.facilities || []) : (attraction.facilitiesRu || attraction.facilities || []);
  const getOpeningHours = () => locale === 'en' ? (attraction.openingHours || 'Open 24 hours') : locale === 'zh' ? (attraction.openingHoursZh || '全天开放') : (attraction.openingHoursRu || 'Открыто круглосуточно');
  const getBestTime     = () => locale === 'en' ? (attraction.bestTime || 'Year-round') : locale === 'zh' ? (attraction.bestTimeZh || '全年') : (attraction.bestTimeRu || 'Круглый год');
  const getTransport    = () => locale === 'en' ? (attraction.transportation || 'Public transport available') : locale === 'zh' ? (attraction.transportationZh || '公共交通可达') : (attraction.transportationRu || 'Доступен общественным транспортом');

  const getCategoryLabel = () => {
    const map: Record<string, string> = {
      beach: t('detail.beach'), culture: t('detail.culture'),
      nature: t('detail.nature'), entertainment: t('detail.entertainment'),
    };
    return map[attraction.category] || attraction.category;
  };

  const attractionJsonLd = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: getName(), description: getDescription(),
    image: `https://rossiysanya.com${attraction.image}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Sanya', addressRegion: 'Hainan', addressCountry: 'CN', streetAddress: getLocation() },
    url: `https://rossiysanya.com/${locale}/attractions/${attraction.id}`,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: attraction.rating, bestRating: 5, reviewCount: attraction.reviewCount },
    priceRange: attraction.isFree ? 'Free' : `¥${attraction.price}`,
    isAccessibleForFree: attraction.isFree,
  };

  return (
    <div className="min-h-screen bg-[var(--sand)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionJsonLd) }} />

      {/* ── Hero Image ── */}
      <div className="relative h-[42vh] min-h-[260px] max-h-[460px] w-full bg-[var(--ocean)]">
        {!imageError ? (
          <Image
            src={attraction.image}
            alt={getName()}
            fill priority
            className="object-cover"
            sizes="100vw"
            quality={85}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-mid)] flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3L7 21"/><path d="M3 12c3-3 6-4.5 9-4.5s6 1.5 9 4.5"/><path d="M3 21h18"/>
            </svg>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => router.push(`/${locale}`)}
          className="absolute top-4 left-4 w-9 h-9 rounded-xl glass flex items-center justify-center text-white shadow-[var(--shadow-md)] active:scale-95 transition-all"
        >
          <ArrowLeftIcon />
        </button>

        {/* Title overlay */}
        <div className="detail-hero-text absolute bottom-0 left-0 right-0">
          <div className="max-w-3xl mx-auto">
            <div className="dt-hero-badges">
              <span className="dt-hero-badge">{getCategoryLabel()}</span>
              <span className="dt-hero-badge">
                <StarIcon />
                {attraction.rating}
              </span>
            </div>
            <h1
              style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, color: 'white', lineHeight: 1.3, marginBottom: 4 }}
            >
              {getName()}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
              <PinIcon />
              {getLocation()}
            </p>
          </div>
        </div>
      </div>

      {/* ── Quick Info Cards ── */}
      <div className="detail-quick-info">
        <div className="dt-quick-grid">
          {/* Price */}
          <div className="dt-info-card">
            <p className="dt-info-label">{t('detail.price')}</p>
            {attraction.isFree ? (
              <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--green)' }}>{t('detail.free')}</p>
            ) : (
              <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--coral)' }}>¥{attraction.price}</p>
            )}
          </div>
          {/* Hours */}
          <div className="dt-info-card">
            <div className="dt-info-icon"><ClockIcon /></div>
            <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.3 }}>{getOpeningHours()}</p>
          </div>
          {/* Reviews */}
          <div className="dt-info-card">
            <div className="dt-info-icon"><ChatIcon /></div>
            <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-1)' }}>{attraction.reviewCount.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="detail-content">

        {/* Best Time */}
        {getBestTime() && (
          <div className="dt-best-time">
            <CalendarIcon />
            <span style={{ color: 'var(--ocean)', fontSize: 12, fontWeight: 600 }}>{t('detail.bestTime')}: {getBestTime()}</span>
          </div>
        )}

        {/* Description */}
        <section className="dt-section">
          <SectionTitle icon={<SparkleIcon />} label={t('detail.introduction')} />
          <p className="dt-section-body">{getDescription()}</p>
        </section>

        {/* Video */}
        {attraction.video && (
          <section className="dt-section">
            <SectionTitle icon={<PlayIcon />} label={t('detail.video')} />
            <div style={{ marginTop: 16, borderRadius: 16, overflow: 'hidden', background: 'black', boxShadow: 'var(--shadow-md)' }}>
              <video controls className="w-full h-auto max-h-80" poster={attraction.image} preload="metadata">
                <source src={attraction.video} type="video/mp4" />
              </video>
            </div>
          </section>
        )}

        {/* Highlights */}
        {getHighlights().length > 0 && (
          <section className="dt-section">
            <SectionTitle icon={<StarIcon />} label={t('detail.highlights')} />
            <ul className="dt-highlight-list">
              {getHighlights().map((item, i) => (
                <li key={i} className="dt-highlight-item">
                  <span className="dt-highlight-check"><CheckIcon /></span>
                  <span style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Facilities */}
        {getFacilities().length > 0 && (
          <section className="dt-section">
            <SectionTitle icon={<TagIcon />} label={t('detail.facilities')} />
            <div className="dt-facility-list">
              {getFacilities().map((f, i) => (
                <span key={i} className="dt-facility-tag">{f}</span>
              ))}
            </div>
          </section>
        )}

        {/* Transportation */}
        <section className="dt-section">
          <SectionTitle icon={<TruckIcon />} label={t('detail.transportation')} />
          <p className="dt-section-body">{getTransport()}</p>
        </section>

        {/* Tips */}
        {getTips().length > 0 && (
          <section className="dt-section">
            <SectionTitle icon={<LightbulbIcon />} label={t('detail.tips')} />
            <div className="dt-tips-box">
              <ul className="dt-tips-list">
                {getTips().map((tip, i) => (
                  <li key={i} className="dt-tips-item">
                    <span className="dt-tips-dot" />
                    <span style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <div className="dt-cta-block">
          <p className="dt-cta-title" style={{ fontFamily: "var(--font-serif)" }}>
            {t('detail.bookTitle', { defaultValue: 'Готовы посетить?' })}
          </p>
          <p className="dt-cta-desc">
            {t('detail.bookSubtitle', { defaultValue: 'Свяжитесь с нами для организации поездки' })}
          </p>
          <div className="dt-cta-btns">
            <a href="https://t.me/saborovivan" target="_blank" rel="noopener noreferrer"
              className="action-btn bg-[#0088cc] hover:bg-[#0077b5] text-white active:scale-95">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a href="https://wa.me/8613903643352" target="_blank" rel="noopener noreferrer"
              className="action-btn bg-[#25D366] hover:bg-[#20BA5A] text-white active:scale-95">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <ContactFloat />
    </div>
  );
}

function SectionTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="dt-section-title">
      <span className="dt-section-title-icon">{icon}</span>
      <h2 className="dt-section-title-text" style={{ fontFamily: "var(--font-serif)" }}>
        {label}
      </h2>
    </div>
  );
}
