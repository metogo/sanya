import { MetadataRoute } from 'next';
import { attractions } from '@/data/attractions';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://rossiysanya.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. 首页 (Home Page)
  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });
  });

  // 2. 景点详情页 (Attraction Detail Pages)
  attractions.forEach((attraction) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/attractions/${attraction.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // 3. 专车服务页 (Chauffeur Page)
  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}/chauffeur`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  return sitemapEntries;
}