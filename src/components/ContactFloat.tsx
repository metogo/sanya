'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactFloat() {
    const t = useTranslations('contact');
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = '+86 13903643352'; // 替换为实际电话号码
    const whatsappNumber = '8613903643352'; // WhatsApp 号码（去掉+和空格）
    const contactName = 'Ваня'; // 联系人姓名

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <div className={`fixed bottom-20 right-6 ${isOpen ? 'z-[60]' : 'z-50'} transition-all duration-300`}>
            {/* 展开的选项 */}
            {isOpen && (
                <div className="mb-4 flex flex-col gap-[5px] animate-fade-in relative z-[60]">
                    {/* WhatsApp 按钮 */}
                    <button
                        onClick={handleWhatsApp}
                        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
                        aria-label="WhatsApp"
                    >
                        <span className="text-2xl">📱</span>
                        <span className="font-semibold whitespace-nowrap">{t('whatsapp')}</span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    </button>

                    {/* 电话按钮 */}
                    <button
                        onClick={handleCall}
                        className="flex items-center gap-3 bg-gradient-to-r from-[#DC143C] to-[#C41E3A] hover:from-[#C41E3A] hover:to-[#DC143C] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 group"
                        aria-label={t('callNow')}
                    >
                        <span className="text-2xl">📞</span>
                        <span className="font-semibold whitespace-nowrap">{t('phone')} {contactName}</span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
                    </button>
                </div>
            )}

            {/* 主按钮 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
                    isOpen
                        ? 'bg-gray-600 hover:bg-gray-700 rotate-45'
                        : 'bg-gradient-to-br from-[#DC143C] via-[#C41E3A] to-[#0039A6] hover:scale-110 animate-pulse-slow'
                }`}
                aria-label={isOpen ? t('close') : t('contact')}
            >
                {isOpen ? (
                    <span className="text-3xl text-white">✕</span>
                ) : (
                    <>
                        <span className="text-3xl">☎️</span>
                        {/* 呼吸光环 */}
                        <div className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping"></div>
                    </>
                )}
            </button>

            {/* 提示文字（仅在关闭状态显示） */}
            {!isOpen && (
                <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl animate-bounce-slow">
                    {t('contactUs')}
                    <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900"></div>
                </div>
            )}
        </div>
    );
}