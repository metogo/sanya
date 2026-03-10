'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import ContactFloat from '@/components/ContactFloat';
import ShareButton from '@/components/ShareButton';

export default function ChauffeurPage() {
  const t = useTranslations('chauffeur');
  const menuT = useTranslations('menu');
  const footerT = useTranslations('footer');
  const params = useParams();
  const locale = params.locale as string;

  const cars = [
    {
      id: 'tesla',
      brand: t('tesla'),
      model: t('teslaModel'),
      features: [t('teslaFeature1'), t('teslaFeature2'), t('teslaFeature3')],
      color: 'bg-sky-50/70 border-sky-100',
      accent: 'text-sky-600',
      dot: 'bg-sky-500',
    },
    {
      id: 'lixiang',
      brand: t('lixiang'),
      model: t('lixiangModel'),
      features: [t('lixiangFeature1'), t('lixiangFeature2'), t('lixiangFeature3')],
      color: 'bg-violet-50/70 border-violet-100',
      accent: 'text-violet-600',
      dot: 'bg-violet-500',
    },
  ];

  const features = [
    { title: t('feature1'), desc: t('feature1Desc'), icon: '👨‍✈️' },
    { title: t('feature2'), desc: t('feature2Desc'), icon: '🚗' },
    { title: t('feature3'), desc: t('feature3Desc'), icon: '✨' },
    { title: t('feature4'), desc: t('feature4Desc'), icon: '🕐' },
  ];

  const services = [
    { title: t('airport'), desc: t('airportDesc'), icon: '✈️', accent: 'border-l-sky-400' },
    { title: t('daily'), desc: t('dailyDesc'), icon: '🗺️', accent: 'border-l-emerald-400' },
    { title: t('wedding'), desc: t('weddingDesc'), icon: '💍', accent: 'border-l-rose-400' },
    { title: t('custom'), desc: t('customDesc'), icon: '📋', accent: 'border-l-amber-400' },
  ];

  const handleContact = () => {
    window.open('https://t.me/saborovivan', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 h-12 flex items-center gap-3">
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <span className="text-sm font-medium text-gray-800">{t('title')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-5 py-10 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3.5 py-1 mb-5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[11px] text-white/70">{t('badge')}</span>
          </div>
          <h2
            className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('title')}
          </h2>
          <p className="text-white/60 text-[13px] md:text-sm max-w-md mx-auto mb-7 leading-relaxed">
            {t('description')}
          </p>
          <div className="flex gap-2.5 justify-center">
            <button
              onClick={handleContact}
              className="px-5 py-2.5 bg-white text-gray-900 font-semibold text-[13px] rounded-lg hover:bg-gray-100 active:scale-[0.98] transition-all"
            >
              {t('bookNow')} →
            </button>
            <button
              onClick={handleContact}
              className="px-5 py-2.5 border border-white/25 text-white/90 font-medium text-[13px] rounded-lg hover:bg-white/10 transition-all"
            >
              {t('contactUs')}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5">

        {/* Vehicle Section */}
        <section className="pt-8 pb-8 md:pt-14 md:pb-12">
          <h2 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('brands')}
          </h2>
          <p className="text-gray-400 text-[12px] mb-6">{t('brandsSubtitle')}</p>

          <div className="space-y-8">
            {cars.map((car) => (
              <div
                key={car.id}
                className={`rounded-xl border p-5 ${car.color}`}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${car.dot}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${car.accent}`}>{car.brand}</span>
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2.5">{car.model}</h3>
                <div className="space-y-1.5">
                  {car.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className={`w-3.5 h-3.5 flex-shrink-0 ${car.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-[13px]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200/60" />

        {/* Features */}
        <section className="pt-8 pb-8 md:pt-14 md:pb-12">
          <h2 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('features')}
          </h2>
          <p className="text-gray-400 text-[12px] mb-6">{t('featuresSubtitle')}</p>

          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <div className="text-2xl mb-2.5">{f.icon}</div>
                <h3 className="text-[13px] font-bold text-gray-900 mb-1 leading-tight">{f.title}</h3>
                <p className="text-[11px] text-gray-400 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200/60" />

        {/* Services */}
        <section className="pt-8 pb-8 md:pt-14 md:pb-12">
          <h2 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('services')}
          </h2>
          <p className="text-gray-400 text-[12px] mb-6">{t('servicesSubtitle')}</p>

          <div className="space-y-3">
            {services.map((s, i) => (
              <div
                key={i}
                className={`flex items-center gap-3.5 bg-white rounded-xl border border-gray-100 border-l-[3px] ${s.accent} px-4 py-4`}
              >
                <span className="text-lg flex-shrink-0">{s.icon}</span>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-bold text-gray-900 leading-tight">{s.title}</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200/60" />

        {/* CTA */}
        <section className="pt-8 pb-10 md:pt-14 md:pb-16 mb-10">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl px-6 py-8 text-center">
            <h2
              className="text-lg font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('ctaTitle')}
            </h2>
            <p className="text-white/50 text-[12px] mb-5 max-w-sm mx-auto leading-relaxed">
              {t('ctaDescription')}
            </p>
            <button
              onClick={handleContact}
              className="px-6 py-2.5 bg-white text-gray-900 font-semibold text-[13px] rounded-lg hover:bg-gray-100 active:scale-[0.98] transition-all"
            >
              {t('bookNow')} →
            </button>
          </div>
        </section>
      </div>

      {/* Bottom Nav */}
      <div className="lg:hidden">
        <BottomMenu />
      </div>

      {/* Footer */}
      <footer className="mb-14 lg:mb-0 bg-gradient-to-br from-[#DC143C] via-[#C41E3A] to-[#0039A6] text-white py-6">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-[12px] text-white/80">{footerT('copyright')}</p>
          <p className="text-[11px] text-white/50 mt-1">{footerT('rights')}</p>
        </div>
      </footer>

      <ContactFloat />
      <ShareButton />
    </div>
  );
}

function BottomMenu() {
  const menuT = useTranslations('menu');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.06)] z-[9999] pb-safe">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-around py-1.5">
          <Link href="/" className="flex-1 max-w-[100px]">
            <div className="flex flex-col items-center gap-0.5 py-1.5">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-[10px] font-medium text-gray-400">{menuT('home')}</span>
            </div>
          </Link>

          <Link href="/chauffeur" className="flex-1 max-w-[100px]">
            <div className="flex flex-col items-center gap-0.5 py-1.5">
              <div className="p-1 rounded-full bg-purple-50">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="text-[10px] font-medium text-purple-600">{menuT('chauffeur')}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
