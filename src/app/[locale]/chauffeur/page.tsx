'use client';

import { useTranslations } from 'next-intl';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useState, ReactElement } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import ContactFloat from '@/components/ContactFloat';
import ShareButton from '@/components/ShareButton';

export default function ChauffeurPage() {
  const t = useTranslations('chauffeur');
  const menuT = useTranslations('menu');
  const params = useParams();
  const router = useRouter();
  const locale = params.locale as string;
  const [hoveredCar, setHoveredCar] = useState<string | null>(null);

  // 标题动画
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 }
  });

  // 副标题动画
  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
    config: { tension: 280, friction: 60 }
  });

  // 车型卡片数据
  const cars = [
    {
      id: 'tesla',
      brand: t('tesla'),
      model: t('teslaModel'),
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=60&auto=format&fit=crop',
      gradient: 'from-slate-900 via-blue-900 to-slate-900',
      accentColor: 'from-blue-400 to-cyan-400',
      features: [t('teslaFeature1'), t('teslaFeature2'), t('teslaFeature3')]
    },
    {
      id: 'lixiang',
      brand: t('lixiang'),
      model: t('lixiangModel'),
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=60&auto=format&fit=crop',
      gradient: 'from-slate-900 via-purple-900 to-slate-900',
      accentColor: 'from-purple-400 to-pink-400',
      features: [t('lixiangFeature1'), t('lixiangFeature2'), t('lixiangFeature3')]
    }
  ];

  // 特色服务数据 - 使用SVG图标
  const features = [
    {
      title: t('feature1'),
      description: t('feature1Desc'),
      iconType: 'driver',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderGradient: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400'
    },
    {
      title: t('feature2'),
      description: t('feature2Desc'),
      iconType: 'car',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400'
    },
    {
      title: t('feature3'),
      description: t('feature3Desc'),
      iconType: 'settings',
      gradient: 'from-orange-500/20 to-yellow-500/20',
      borderGradient: 'from-orange-500 to-yellow-500',
      iconColor: 'text-orange-400'
    },
    {
      title: t('feature4'),
      description: t('feature4Desc'),
      iconType: 'clock',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderGradient: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-400'
    }
  ];

  // 服务项目数据 - 使用SVG图标
  const services = [
    {
      title: t('airport'),
      description: t('airportDesc'),
      iconType: 'plane',
      iconColor: 'text-blue-400'
    },
    {
      title: t('daily'),
      description: t('dailyDesc'),
      iconType: 'location',
      iconColor: 'text-green-400'
    },
    {
      title: t('wedding'),
      description: t('weddingDesc'),
      iconType: 'heart',
      iconColor: 'text-pink-400'
    },
    {
      title: t('custom'),
      description: t('customDesc'),
      iconType: 'calendar',
      iconColor: 'text-purple-400'
    }
  ];

  // SVG图标渲染函数
  const renderIcon = (iconType: string, className: string = 'w-12 h-12'): ReactElement | null => {
    const icons: { [key: string]: ReactElement } = {
      driver: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      car: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      settings: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      clock: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      plane: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 9-18 9V3z" />
        </svg>
      ),
      location: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      heart: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      calendar: (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    };
    return icons[iconType] || null;
  };

  // 特色服务卡片动画
  const featureTrail = useTrail(features.length, {
    from: { opacity: 0, transform: 'scale(0.9) translateY(20px)' },
    to: { opacity: 1, transform: 'scale(1) translateY(0px)' },
    delay: 400,
    config: { tension: 280, friction: 60 }
  });

  // 服务项目卡片动画
  const serviceTrail = useTrail(services.length, {
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 600,
    config: { tension: 280, friction: 60 }
  });

  return (
    <div className="min-h-screen bg-slate-950">
      <Header onSearch={() => {}} />
      <ContactFloat />
      <ShareButton />

      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-32 pb-24">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <animated.div style={titleSpring}>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-200">{t('badge')}</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {t('title')}
            </h1>
          </animated.div>
          
          <animated.div style={subtitleSpring}>
            <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-light">
              {t('subtitle')}
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </animated.div>

          {/* CTA Buttons */}
          <animated.div style={subtitleSpring} className="mt-12 flex gap-4 justify-center flex-wrap">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <span>{t('bookNow')}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 rounded-2xl font-bold border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
              {t('contactUs')}
            </button>
          </animated.div>
        </div>
      </div>

      {/* Car Showcase Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t('brands')}
          </h2>
          <p className="text-slate-400 text-lg">{t('brandsSubtitle')}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {cars.map((car, index) => {
            const carSpring = useSpring({
              transform: hoveredCar === car.id 
                ? 'scale(1.02) translateY(-10px)' 
                : 'scale(1) translateY(0px)',
              config: { tension: 300, friction: 20 }
            });

            return (
              <animated.div
                key={car.id}
                style={carSpring}
                onMouseEnter={() => setHoveredCar(car.id)}
                onMouseLeave={() => setHoveredCar(null)}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500"
              >
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                
                {/* Car Image */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                  <img
                    src={car.image}
                    alt={car.brand}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease-in' }}
                  />
                  
                  {/* Accent Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${car.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>

                <div className="relative p-8 text-center">
                  {/* Brand Badge */}
                  <div className={`inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r ${car.accentColor} text-white text-sm font-bold`}>
                    {car.brand}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6">{car.model}</h3>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {car.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-center gap-3 text-slate-300 group-hover:text-white transition-colors duration-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${car.accentColor}`}></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${car.accentColor} rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mx-auto max-w-xs`}></div>
                </div>
              </animated.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('features')}
            </h2>
            <p className="text-slate-400 text-lg">{t('featuresSubtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureTrail.map((style, index) => {
              const feature = features[index];
              return (
                <animated.div
                  key={index}
                  style={style}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 p-6 hover:border-slate-600 transition-all duration-300"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Border Gradient on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 text-center my-[3px]">
                    <div className={`mb-4 transform group-hover:scale-110 transition-all duration-300 ${feature.iconColor} flex justify-center`}>
                      {renderIcon(feature.iconType, 'w-10 h-10')}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              {t('services')}
            </h2>
            <p className="text-slate-400 text-lg">{t('servicesSubtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {serviceTrail.map((style, index) => {
              const service = services[index];
              return (
                <animated.div
                  key={index}
                  style={style}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 p-8 hover:border-slate-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${service.iconColor}`}>
                        {renderIcon(service.iconType, 'w-6 h-6')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </animated.div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-xl border border-slate-700/50 p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="m-5 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">{t('ctaTitle')}</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('ctaDescription')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">{t('bookNow')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <BottomMenuDark locale={locale} router={router} currentPage="chauffeur" menuT={menuT} />

      {/* Footer */}
      <footer className="mt-24 mb-20 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-400">© 2025 {t('title')} | {t('footerSlogan')}</p>
        </div>
      </footer>
    </div>
  );
}

function BottomMenuDark({ locale, router, currentPage, menuT }: { locale: string; router: any; currentPage: 'home' | 'chauffeur'; menuT: any }) {
    const homeActive = currentPage === 'home';
    const chauffeurActive = currentPage === 'chauffeur';

    const homeSpring = useSpring({
        scale: homeActive ? 1 : 0.95,
        opacity: homeActive ? 1 : 0.7,
        config: { tension: 300, friction: 20 }
    });

    const chauffeurSpring = useSpring({
        scale: chauffeurActive ? 1 : 0.95,
        opacity: chauffeurActive ? 1 : 0.7,
        config: { tension: 300, friction: 20 }
    });

    const handleHomeClick = () => {
        router.push(`/${locale}`);
    };

    const handleChauffeurClick = () => {
        router.push(`/${locale}/chauffeur`);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900 to-slate-900/95 backdrop-blur-xl border-t border-slate-700 shadow-2xl z-50">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex items-center py-2">
                    <animated.button
                        onClick={handleHomeClick}
                        onTouchEnd={handleHomeClick}
                        style={homeSpring}
                        className="relative flex-1 flex flex-col items-center gap-1 py-2 group cursor-pointer touch-manipulation active:scale-95"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 shadow-lg ${homeActive ? 'opacity-100 shadow-blue-500/50' : 'opacity-0 group-hover:opacity-100 group-hover:shadow-blue-500/50'}`}></div>
                        <div className="relative flex flex-col items-center gap-0.5">
                            <svg className={`w-5 h-5 transform group-hover:scale-110 transition-transform duration-300 ${homeActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className={`text-xs font-bold transition-colors duration-300 ${homeActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                {menuT('home')}
                            </span>
                        </div>
                    </animated.button>
                    
                    <animated.button
                        onClick={handleChauffeurClick}
                        onTouchEnd={handleChauffeurClick}
                        style={chauffeurSpring}
                        className="relative flex-1 flex flex-col items-center gap-1 py-2 group cursor-pointer touch-manipulation active:scale-95"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 shadow-lg ${chauffeurActive ? 'opacity-100 shadow-purple-500/50' : 'opacity-0 group-hover:opacity-100 group-hover:shadow-purple-500/50'}`}></div>
                        <div className="relative flex flex-col items-center gap-0.5">
                            <svg className={`w-5 h-5 transform group-hover:scale-110 transition-all duration-300 ${chauffeurActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <span className={`text-xs font-bold transition-colors duration-300 ${chauffeurActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                {menuT('chauffeur')}
                            </span>
                        </div>
                    </animated.button>
                </div>
            </div>
        </div>
    );
}