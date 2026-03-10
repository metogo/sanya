import { MetadataRoute } from 'next';
import { attractions } from '@/data/attractions';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://rossiysanya.com';

function generateAlternates(path: string) {
  const languages: Record<string, string> = {};
  routing.locales.forEach((locale) => {
    languages[locale] = `${BASE_URL}/${locale}${path}`;
  });
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: generateAlternates(''),
    });
  });

  attractions.forEach((attraction) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/attractions/${attraction.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: generateAlternates(`/attractions/${attraction.id}`),
      });
    });
  });

  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}/chauffeur`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: generateAlternates('/chauffeur'),
    });
  });

  return sitemapEntries;
}
