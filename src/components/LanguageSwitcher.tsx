'use client';

import {useParams} from 'next/navigation';
import {usePathname, useRouter} from '@/i18n/routing';
import {useEffect, useRef, useState} from 'react';

const languages = [
    {code: 'ru', name: 'Русский', flag: '🇷🇺'},
    {code: 'en', name: 'English', flag: '🇬🇧'},
    {code: 'zh', name: '中文', flag: '🇨🇳'},
];

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLocale = params.locale as string;
    const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (locale: string) => {
        router.replace(pathname, {locale});
        setIsOpen(false);
    }

    return (
        <div className="relative top-1" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/20"
                aria-label="Select language"
            >
                <span className="text-xl">{currentLanguage.flag}</span>
                <span className="text-sm font-medium hidden sm:inline">{currentLanguage.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                                currentLocale === language.code ? 'bg-blue-50 text-[#DC143C] font-semibold' : 'text-gray-700'
                            }`}
                        >
                            <span className="text-xl">{language.flag}</span>
                            <span className="text-sm">{language.name}</span>
                            {currentLocale === language.code && (
                                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

