// Restaurant Onboarding Types

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  cuisine: string;
  yelpUrl?: string;
  hours?: RestaurantHours;
}

export interface RestaurantHours {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export interface YelpImage {
  id: string;
  url: string;
  thumbnailUrl: string;
  caption: string;
  date: string; // ISO date
  isMenuPhoto: boolean;
  hasFaces?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  modifiers?: string[];
  confidence: 'high' | 'medium' | 'low';
  needsReview: boolean;
  sourceImageId?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  order: number;
}

export interface MenuDraft {
  id: string;
  restaurantId: string;
  categories: MenuCategory[];
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'reviewing' | 'approved' | 'published';
}

export interface MenuSettings {
  slug: string;
  logoUrl?: string;
  theme: 'light' | 'dark' | 'auto';
  enableOrdering: boolean;
  orderingUrl?: string;
  showPopularItems: boolean;
  primaryColor?: string;
}

export interface OnboardingState {
  currentStep: number;
  restaurant?: Restaurant;
  images: YelpImage[];
  menuDraft?: MenuDraft;
  settings: MenuSettings;
  hideNonMenuPhotos: boolean;
  blurFaces: boolean;
}

export interface ReviewQueueItem {
  itemId: string;
  categoryId: string;
  issue: string;
  suggestion?: string;
}

export type OnboardingStep = 1 | 2 | 3 | 4 | 5;
