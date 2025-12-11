import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Analytics} from '@vercel/analytics/react';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const messages = await getMessages({locale}) as any;
  
  const title = messages.meta?.title || 'Sanya Attractions - Discover the Best of Sanya';
  const description = messages.meta?.description || 'Explore top attractions in Sanya, China. From Yalong Bay to Nanshan Temple, find the best places to visit, travel tips, and local guides.';
  const url = `https://rossiysanya.com/${locale}`;

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: ['Санья Экскурсии', 'Sanya Excursions', 'Sanya', 'Sanya Travel', 'Hainan', 'Yalong Bay', 'Nanshan Temple', 'China Tourism', 'Sanya Guide', 'Санья', 'Хайнань', 'Путешествие в Санью', '三亚', '海南', '三亚旅游', 'Экскурсии в Санье', 'Гиды в Санье', 'Достопримечательности Санья'],
    authors: [{ name: 'RossiySanya' }],
    creator: 'RossiySanya',
    publisher: 'RossiySanya',
    metadataBase: new URL('https://rossiysanya.com'),
    alternates: {
      canonical: url,
      languages: {
        'en': 'https://rossiysanya.com/en',
        'ru': 'https://rossiysanya.com/ru',
        'zh': 'https://rossiysanya.com/zh',
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: 'RossiySanya',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/images/banners/sanya-hero.jpg', // 确保有一张默认的 OG 图片
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/images/banners/sanya-hero.jpg'],
    },
    verification: {
      // google: 'google-site-verification-code', // 已通过 DNS 验证
      yandex: '1f7dbb461066674d',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

