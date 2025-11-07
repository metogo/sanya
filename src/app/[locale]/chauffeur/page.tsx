'use client';

import { useTranslations } from 'next-intl';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import ContactFloat from '@/components/ContactFloat';

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
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      gradient: 'from-slate-900 via-blue-900 to-slate-900',
      accentColor: 'from-blue-400 to-cyan-400',
      features: ['自动驾驶辅助', '超长续航里程', '超级充电网络']
    },
    {
      id: 'lixiang',
      brand: t('lixiang'),
      model: t('lixiangModel'),
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
      gradient: 'from-slate-900 via-purple-900 to-slate-900',
      accentColor: 'from-purple-400 to-pink-400',
      features: ['豪华六座布局', '智能座舱系统', '增程式动力']
    }
  ];

  // 特色服务数据
  const features = [
    {
      title: t('feature1'),
      description: t('feature1Desc'),
      icon: '👨‍✈️',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderGradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('feature2'),
      description: t('feature2Desc'),
      icon: '🚗',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500 to-pink-500'
    },
    {
      title: t('feature3'),
      description: t('feature3Desc'),
      icon: '⚙️',
      gradient: 'from-orange-500/20 to-yellow-500/20',
      borderGradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: t('feature4'),
      description: t('feature4Desc'),
      icon: '🕐',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderGradient: 'from-green-500 to-emerald-500'
    }
  ];

  // 服务项目数据
  const services = [
    {
      title: t('airport'),
      description: t('airportDesc'),
      icon: '✈️',
      color: 'blue'
    },
    {
      title: t('daily'),
      description: t('dailyDesc'),
      icon: '🌴',
      color: 'green'
    },
    {
      title: t('wedding'),
      description: t('weddingDesc'),
      icon: '💒',
      color: 'pink'
    },
    {
      title: t('custom'),
      description: t('customDesc'),
      icon: '📅',
      color: 'purple'
    }
  ];

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
                <span className="text-sm text-blue-200">专业豪华出行服务</span>
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
          <p className="text-slate-400 text-lg">顶级新能源车型，为您提供尊贵出行体验</p>
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
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                  <img 
                    src={car.image}
                    alt={car.brand}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
            <p className="text-slate-400 text-lg">专业服务，尽在细节之中</p>
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
                  
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {feature.icon}
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
            <p className="text-slate-400 text-lg">全方位出行解决方案</p>
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
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {service.icon}
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
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">准备开启尊贵之旅？</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              立即预订专车服务，让我们为您打造难忘的三亚之行
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
          <p className="text-slate-400">© 2025 {t('title')} | 专业 · 豪华 · 安全</p>
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

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900 to-slate-900/95 backdrop-blur-xl border-t border-slate-700 shadow-2xl z-50">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex justify-around items-center py-2">
                    <animated.button
                        onClick={() => router.push(`/${locale}`)}
                        style={homeSpring}
                        className="relative flex flex-col items-center gap-1 px-6 py-2 group cursor-pointer"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl transition-all duration-300 shadow-lg ${homeActive ? 'opacity-100 shadow-blue-500/50' : 'opacity-0 group-hover:opacity-100 group-hover:shadow-blue-500/50'}`}></div>
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
                        onClick={() => router.push(`/${locale}/chauffeur`)}
                        style={chauffeurSpring}
                        className="relative flex flex-col items-center gap-1 px-6 py-2 group cursor-pointer"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl transition-all duration-300 shadow-lg ${chauffeurActive ? 'opacity-100 shadow-purple-500/50' : 'opacity-0 group-hover:opacity-100 group-hover:shadow-purple-500/50'}`}></div>
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