import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ru', 'en', 'zh'],

  // Used when no locale matches
  defaultLocale: 'ru',

  // Disable locale detection based on browser language
  localePrefix: 'always',

  // Don't use browser language detection
  localeDetection: false
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);

