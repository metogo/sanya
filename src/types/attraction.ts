export interface Attraction {
  id: string;
  name: string;
  nameRu: string;
  nameZh?: string;
  description: string;
  descriptionRu: string;
  descriptionZh?: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  locationRu: string;
  locationZh?: string;
  category: string;
  categoryRu: string;
  categoryEn?: string;
  categoryZh?: string;
  price: number;
  originalPrice?: number; // 原价
  isFree: boolean;
  tags: string[];
  
  // 详情页扩展字段
  detailedDescription?: string;
  detailedDescriptionRu?: string;
  detailedDescriptionZh?: string;
  highlights?: string[];
  highlightsRu?: string[];
  highlightsZh?: string[];
  openingHours?: string;
  openingHoursRu?: string;
  openingHoursZh?: string;
  bestTime?: string;
  bestTimeRu?: string;
  bestTimeZh?: string;
  tips?: string[];
  tipsRu?: string[];
  tipsZh?: string[];
  facilities?: string[];
  facilitiesRu?: string[];
  facilitiesZh?: string[];
  transportation?: string;
  transportationRu?: string;
  transportationZh?: string;
}

export type FilterCategory = 'all' | 'beach' | 'culture' | 'nature' | 'entertainment';
export type FilterRating = 'all' | '4+' | '4.5+' | '5';
export type FilterPrice = 'all' | 'free' | 'budget' | 'premium';

