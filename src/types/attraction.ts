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
  isFree: boolean;
  tags: string[];
}

export type FilterCategory = 'all' | 'beach' | 'culture' | 'nature' | 'entertainment';
export type FilterRating = 'all' | '4+' | '4.5+' | '5';
export type FilterPrice = 'all' | 'free' | 'budget' | 'premium';

