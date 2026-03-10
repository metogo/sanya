import { routing } from '@/i18n/routing';

const BASE_URL = 'https://rossiysanya.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const url = `${BASE_URL}/${locale}/chauffeur`;

  const titleMap: Record<string, string> = {
    ru: 'Трансфер в Санье — Индивидуальный водитель | Tesla, Li Auto | RossiySanya',
    en: 'Sanya Private Transfer — Chauffeur Service | Tesla, Li Auto | RossiySanya',
    zh: '三亚专车接送 — 私人定制出行服务 | 特斯拉、理想 | RossiySanya',
  };

  const descriptionMap: Record<string, string> = {
    ru: 'Премиальный трансфер в Санье на Tesla и Li Auto. Встреча в аэропорту, экскурсии, свадьбы. Русскоговорящий водитель, комфорт и безопасность 24/7.',
    en: 'Premium private transfer service in Sanya with Tesla and Li Auto vehicles. Airport pickup, tours, weddings. Professional drivers available 24/7.',
    zh: '三亚豪华专车接送服务，特斯拉、理想等新能源车型。机场接送、景点游览、婚礼用车。专业司机24小时待命。',
  };

  const title = titleMap[locale] || titleMap.en;
  const description = descriptionMap[locale] || descriptionMap.en;

  const alternates: Record<string, string> = {};
  routing.locales.forEach((loc) => {
    alternates[loc] = `${BASE_URL}/${loc}/chauffeur`;
  });

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternates,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'RossiySanya',
      locale: locale === 'ru' ? 'ru_RU' : locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ChauffeurLayout({ children }: { children: React.ReactNode }) {
  return children;
}
