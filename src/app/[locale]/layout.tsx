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

  const keywordsMap: Record<string, string[]> = {
    ru: [
      'Санья экскурсии', 'достопримечательности Санья', 'Хайнань туры',
      'отдых в Санье', 'Санья путеводитель', 'экскурсии Хайнань',
      'Ялунвань', 'Наньшань', 'Остров обезьян', 'Тяньяхайцзяо',
      'трансфер Санья', 'Санья на русском', 'Китай тропики',
      'пляжи Санья', 'что посмотреть в Санье', 'билеты Санья',
    ],
    en: [
      'Sanya attractions', 'Sanya travel guide', 'Hainan tourism',
      'things to do in Sanya', 'Sanya beaches', 'Yalong Bay',
      'Nanshan Temple', 'Wuzhizhou Island', 'Sanya tours',
      'Hainan Island', 'China tropical paradise', 'Sanya tickets',
      'Sanya private transfer', 'best beaches Sanya',
    ],
    zh: [
      '三亚旅游', '三亚景点', '海南旅游', '三亚攻略',
      '亚龙湾', '南山寺', '蜈支洲岛', '天涯海角',
      '三亚自由行', '三亚门票', '海南景点', '三亚专车',
      '三亚旅游攻略', '三亚必玩景点', '三亚好玩的地方',
    ],
  };

  const ogImage = '/images/banners/亚龙湾.jpeg';

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
    keywords: keywordsMap[locale] || keywordsMap.en,
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
      locale: locale === 'ru' ? 'ru_RU' : locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
    verification: {
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
    other: {
      'format-detection': 'telephone=no',
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

