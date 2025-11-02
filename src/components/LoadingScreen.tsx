'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function LoadingScreen() {
    const t = useTranslations('loading');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 5;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#DC143C] via-[#C41E3A] to-[#0039A6] overflow-hidden">
            {/* 动态背景光效 */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-float-delayed"></div>
            </div>

            {/* 主内容 */}
            <div className="relative z-10 text-center px-6">
                {/* Logo区域 - 三亚图标 */}
                <div className="mb-8 relative">
                    <div className="inline-block relative">
                        {/* 外圈旋转 */}
                        <div className="absolute inset-0 animate-spin-slow">
                            <div className="w-32 h-32 border-4 border-white/30 border-t-white rounded-full"></div>
                        </div>
                        
                        {/* 中圈反向旋转 */}
                        <div className="absolute inset-2 animate-spin-reverse">
                            <div className="w-28 h-28 border-4 border-white/20 border-b-white rounded-full"></div>
                        </div>

                        {/* 中心图标 */}
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <div className="text-7xl animate-bounce-gentle">
                                🏝️
                            </div>
                        </div>
                    </div>
                </div>

                {/* 标题 */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('title')}
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up-delayed">
                    {t('subtitle')}
                </p>

                {/* 进度条 */}
                <div className="max-w-md mx-auto">
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm mb-3">
                        <div 
                            className="h-full bg-gradient-to-r from-white via-yellow-200 to-white rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                            style={{ width: `${progress}%` }}
                        >
                            {/* 进度条光效 */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer-fast"></div>
                        </div>
                    </div>
                    <p className="text-white/80 text-sm font-medium">
                        {progress < 100 ? t('loading') : t('ready')}
                    </p>
                </div>

                {/* 装饰性emoji */}
                <div className="mt-12 flex justify-center gap-6 text-4xl">
                    <span className="animate-bounce" style={{ animationDelay: '0s' }}>🏖️</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌊</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>☀️</span>
                    <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🏛️</span>
                </div>
            </div>

            {/* 底部装饰波浪 */}
            <div className="absolute bottom-0 left-0 right-0 opacity-20">
                <svg viewBox="0 0 1440 120" className="w-full h-24">
                    <path
                        fill="white"
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        className="animate-wave"
                    />
                </svg>
            </div>
        </div>
    );
}