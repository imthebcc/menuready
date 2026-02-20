// Mock API functions with realistic delays

import {
  Restaurant,
  YelpImage,
  MenuDraft,
  MenuSettings,
} from '@/types/onboarding';
import {
  mockRestaurantResults,
  mockYelpImages,
  mockMenuDraft,
} from './mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function searchRestaurants(
  query: string
): Promise<Restaurant[]> {
  await delay(800); // Simulate API call
  
  if (!query.trim()) return [];
  
  // Filter mock results by query
  const lowerQuery = query.toLowerCase();
  return mockRestaurantResults.filter(
    r =>
      r.name.toLowerCase().includes(lowerQuery) ||
      r.city.toLowerCase().includes(lowerQuery) ||
      r.cuisine.toLowerCase().includes(lowerQuery)
  );
}

export async function getRestaurantById(id: string): Promise<Restaurant | null> {
  await delay(400);
  return mockRestaurantResults.find(r => r.id === id) || null;
}

export async function fetchYelpImages(restaurantId: string): Promise<YelpImage[]> {
  await delay(1500); // Simulate scraping/fetching
  return mockYelpImages;
}

export async function generateMenuDraft(
  restaurantId: string,
  imageIds: string[]
): Promise<MenuDraft> {
  await delay(3000); // Simulate OCR + LLM processing
  return {
    ...mockMenuDraft,
    restaurantId,
  };
}

export async function saveMenuDraft(draft: MenuDraft): Promise<MenuDraft> {
  await delay(600);
  return {
    ...draft,
    updatedAt: new Date().toISOString(),
  };
}

export async function publishMenu(
  draftId: string,
  settings: MenuSettings
): Promise<{ success: boolean; url: string; qrCodeUrl: string }> {
  await delay(1200);
  
  const baseUrl = 'https://menuready.app';
  const menuUrl = `${baseUrl}/m/${settings.slug}`;
  const qrCodeUrl = `${baseUrl}/api/qr?url=${encodeURIComponent(menuUrl)}`;
  
  return {
    success: true,
    url: menuUrl,
    qrCodeUrl,
  };
}

export async function checkSlugAvailability(slug: string): Promise<boolean> {
  await delay(400);
  
  // Mock: slugs starting with 'test' are taken
  return !slug.toLowerCase().startsWith('test');
}

export async function sendTeamInvites(emails: string[]): Promise<{ sent: number }> {
  await delay(800);
  return { sent: emails.length };
}
