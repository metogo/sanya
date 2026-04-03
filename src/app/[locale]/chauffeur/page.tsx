'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import ContactFloat from '@/components/ContactFloat';
import ShareButton from '@/components/ShareButton';

/* ── Icons ── */
const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const CarIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/>
    <circle cx="9" cy="17" r="2"/>
    <circle cx="17" cy="17" r="2"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PlaneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.5-.8 1.1l1 4c.1.5.5.8 1 .9L8 13l-2 3H4l-1 1 3 2 2 3 1-1v-2l3-2 .2 5.3c.1.5.4.9.9 1l4 1c.6.1 1-.3 1.1-.8L17.8 19.2z"/>
  </svg>
);

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ClipboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export default function ChauffeurPage() {
  const t = useTranslations('chauffeur');
  const footerT = useTranslations('footer');
  const menuT = useTranslations('menu');
  const params = useParams();

  const handleContact = () => { window.open('https://t.me/+8613903643352', '_blank'); };

  const cars = [
    {
      id: 'tesla',
      brand: t('tesla'),
      model: t('teslaModel'),
      features: [t('teslaFeature1'), t('teslaFeature2'), t('teslaFeature3')],
      color: 'from-sky-500 to-blue-600',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
    },
    {
      id: 'lixiang',
      brand: t('lixiang'),
      model: t('lixiangModel'),
      features: [t('lixiangFeature1'), t('lixiangFeature2'), t('lixiangFeature3')],
      color: 'from-violet-500 to-purple-700',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/>
          <circle cx="9" cy="17" r="2"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      ),
    },
  ];

  const features = [
    { icon: <UserIcon />, title: t('feature1'), desc: t('feature1Desc') },
    { icon: <CarIcon size={20} />, title: t('feature2'), desc: t('feature2Desc') },
    { icon: <StarIcon />, title: t('feature3'), desc: t('feature3Desc') },
    { icon: <ClockIcon />, title: t('feature4'), desc: t('feature4Desc') },
  ];

  const services = [
    { icon: <PlaneIcon />, title: t('airport'), desc: t('airportDesc'), color: 'bg-sky-50 border-sky-200 text-sky-600' },
    { icon: <MapIcon />, title: t('daily'), desc: t('dailyDesc'), color: 'bg-emerald-50 border-emerald-200 text-emerald-600' },
    { icon: <HeartIcon />, title: t('wedding'), desc: t('weddingDesc'), color: 'bg-rose-50 border-rose-200 text-rose-600' },
    { icon: <ClipboardIcon />, title: t('custom'), desc: t('customDesc'), color: 'bg-amber-50 border-amber-200 text-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-[var(--sand)]">
      {/* ── Top Nav ── */}
      <div className="sticky top-0 z-40 bg-white border-b border-[var(--mist)] shadow-[var(--shadow-xs)]">
        <div className="chauffeur-nav-inner">
          <Link
            href="/"
            className="w-9 h-9 rounded-xl bg-[var(--sand)] hover:bg-[var(--mist)] flex items-center justify-center transition-colors text-[var(--text-2)]"
          >
            <ArrowLeftIcon />
          </Link>
          <span
            className="text-base font-bold text-[var(--text-1)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t('title')}
          </span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[var(--ocean)] text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--ocean-mid)] rounded-full blur-[80px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1A7A9A] rounded-full blur-[60px] opacity-40" />

        <div className="chauffeur-hero-inner">
          <div className="ch-hero-badge">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', flexShrink: 0, display: 'inline-block' }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.70)', fontWeight: 500 }}>{t('badge')}</span>
          </div>

          <h2
            className="ch-hero-title text-2xl font-bold leading-snug"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t('title')}
          </h2>
          <p className="ch-hero-desc text-white/55 text-sm leading-relaxed" style={{ maxWidth: 384, margin: '0 auto 28px' }}>
            {t('description')}
          </p>

          <div className="ch-hero-btns">
            <button
              onClick={handleContact}
              className="action-btn bg-white text-[var(--ocean)] hover:bg-[var(--ocean-lt)] active:scale-[0.98] shadow-[var(--shadow-sm)]"
            >
              {t('bookNow')} →
            </button>
            <button
              onClick={handleContact}
              className="action-btn border border-white/20 text-white/80 hover:bg-white/10 active:scale-[0.98]"
            >
              <TelegramIcon />
              {t('contactUs')}
            </button>
          </div>
        </div>
      </section>

      <div className="chauffeur-main">

        {/* ── Fleet ── */}
        <section className="ch-section-first">
          <SectionHeader label={t('brands')} sub={t('brandsSubtitle')} />
          <div className="ch-section-grid-cars">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl border border-[var(--mist)] shadow-[var(--shadow-xs)] overflow-hidden">
                <div className={`bg-gradient-to-br ${car.color} flex items-center justify-center`} style={{ height: 96 }}>
                  {car.icon}
                </div>
                <div className="ch-car-card-body">
                  <p className="ch-car-brand">{car.brand}</p>
                  <h3 className="ch-car-model">{car.model}</h3>
                  <ul className="ch-car-features">
                    {car.features.map((f, i) => (
                      <li key={i} className="ch-car-feature">
                        <span className="ch-car-check"><CheckIcon /></span>
                        <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section className="ch-section">
          <SectionHeader label={t('features')} sub={t('featuresSubtitle')} />
          <div className="ch-section-grid-features">
            {features.map((f, i) => (
              <div key={i} className="ch-feature-card">
                <div className="ch-feature-icon">{f.icon}</div>
                <h3 className="ch-feature-title">{f.title}</h3>
                <p className="ch-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section className="ch-section">
          <SectionHeader label={t('services')} sub={t('servicesSubtitle')} />
          <div className="ch-section-list">
            {services.map((s, i) => (
              <div key={i} className={`ch-service-item ${s.color}`}>
                <div className="ch-service-icon-wrap">{s.icon}</div>
                <div style={{ minWidth: 0 }}>
                  <h3 className="ch-service-title">{s.title}</h3>
                  <p className="ch-service-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ch-section">
          <div className="ch-cta-block">
            <div className="ch-cta-icon"><CarIcon size={24} /></div>
            <h2 className="ch-cta-title" style={{ fontFamily: "var(--font-serif)" }}>
              {t('ctaTitle')}
            </h2>
            <p className="ch-cta-desc">{t('ctaDescription')}</p>
            <button
              onClick={handleContact}
              className="action-btn mx-auto bg-white text-[var(--ocean)] hover:bg-[var(--ocean-lt)] active:scale-[0.98] shadow-[var(--shadow-sm)]"
            >
              <TelegramIcon />
              {t('bookNow')}
            </button>
          </div>
        </section>

      </div>

      {/* ── Bottom Nav ── */}
      <div className="lg:hidden">
        <BottomNav menuT={menuT} />
      </div>

      {/* ── Footer ── */}
      <footer style={{ marginBottom: 64, background: 'var(--ocean)', color: 'white', padding: '24px 0' }} className="lg:mb-0">
          <div className="chauffeur-footer-inner">
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.50)' }}>{footerT('copyright')}</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.30)', marginTop: 4 }}>{footerT('rights')}</p>
        </div>
      </footer>

      <ContactFloat />
    </div>
  );
}

function SectionHeader({ label, sub }: { label: string; sub: string }) {
  return (
    <div>
      <h2
        style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-1)', fontFamily: "var(--font-serif)" }}
      >
        {label}
      </h2>
      {sub && <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>{sub}</p>}
    </div>
  );
}

function BottomNav({ menuT }: { menuT: any }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-[var(--mist)] shadow-[0_-2px_12px_rgba(0,0,0,0.06)] pb-safe">
      <div className="flex items-center h-14">
        <Link href="/" className="flex-1">
          <div className="flex flex-col items-center justify-center gap-0.5 py-1.5 text-[var(--text-3)] transition-colors">
            <div className="p-1 rounded-xl">
              <HomeIcon />
            </div>
            <span className="text-[10px] font-semibold">{menuT('home')}</span>
          </div>
        </Link>
        <Link href="/chauffeur" className="flex-1">
          <div className="flex flex-col items-center justify-center gap-0.5 py-1.5 text-[var(--ocean)] transition-colors">
            <div className="p-1 rounded-xl bg-[var(--ocean-lt)]">
              <CarIcon />
            </div>
            <span className="text-[10px] font-semibold">{menuT('chauffeur')}</span>
          </div>
        </Link>
        <Link href="/tcm" className="flex-1">
          <div className="flex flex-col items-center justify-center gap-0.5 py-1.5 text-[var(--text-3)] transition-colors">
            <div className="p-1 rounded-xl">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 1 4-1 8-4 11"/>
                <path d="M11.7 20c.5-3.5 2.3-6.5 5.3-8.5"/>
              </svg>
            </div>
            <span className="text-[10px] font-semibold">{menuT('tcm')}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
