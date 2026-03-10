import { attractions } from '@/data/attractions';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://rossiysanya.com';

export function generateStaticParams() {
  return attractions.flatMap((attraction) =>
    routing.locales.map((locale) => ({
      locale,
      id: attraction.id,
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const attraction = attractions.find(a => a.id === id);

  if (!attraction) {
    return { title: '404' };
  }

  const getName = () => {
    if (locale === 'en') return attraction.name;
    if (locale === 'zh') return attraction.nameZh || attraction.name;
    return attraction.nameRu;
  };

  const getDescription = () => {
    if (locale === 'en') return attraction.description;
    if (locale === 'zh') return attraction.descriptionZh || attraction.description;
    return attraction.descriptionRu;
  };

  const name = getName();
  const description = getDescription();
  const url = `${BASE_URL}/${locale}/attractions/${id}`;

  const titleMap: Record<string, string> = {
    ru: `${name} — Экскурсии и билеты | Санья, Хайнань`,
    en: `${name} — Tours & Tickets | Sanya, Hainan`,
    zh: `${name} — 门票与攻略 | 三亚海南`,
  };

  const title = titleMap[locale] || titleMap.en;

  const alternates: Record<string, string> = {};
  routing.locales.forEach((loc) => {
    alternates[loc] = `${BASE_URL}/${loc}/attractions/${id}`;
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
      locale,
      type: 'article',
      images: [
        {
          url: `${BASE_URL}${attraction.image}`,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}${attraction.image}`],
    },
  };
}

export default function AttractionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
