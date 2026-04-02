/** 首页列表所需的精简字段 */
export interface AttractionListItem {
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
  originalPrice?: number;
  isFree: boolean;
  tags: string[];
  video?: string;
}

/** 详情页完整字段（扩展自列表字段） */
export interface Attraction extends AttractionListItem {
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

