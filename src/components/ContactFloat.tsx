'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactFloat() {
    const t = useTranslations('contact');
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = '+86 13903643352';
    const whatsappNumber = '8613903643352';
    const telegramUsername = 'saborovivan';
    const contactName = 'Ваня';

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const handleTelegram = () => {
        window.open(`https://t.me/${telegramUsername}`, '_blank');
    };

    return (
        <div className={`fixed bottom-20 right-6 lg:bottom-10 lg:right-10 ${isOpen ? 'z-[60]' : 'z-50'} transition-all duration-300`}>
            {/* 展开的选项 */}
            {isOpen && (
                <div className="mb-4 flex flex-col gap-[5px] animate-fade-in relative z-[60]">
                    {/* Telegram 按钮 */}
                    <button
                        onClick={handleTelegram}
                        className="flex items-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
                        aria-label="Telegram"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        <span className="font-semibold whitespace-nowrap">{t('telegram')}</span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                    </button>

                    {/* WhatsApp 按钮 */}
                    <button
                        onClick={handleWhatsApp}
                        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
                        aria-label="WhatsApp"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
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