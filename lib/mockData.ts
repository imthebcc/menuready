import {
  Restaurant,
  YelpImage,
  MenuDraft,
  MenuCategory,
  MenuItem,
  OnboardingState,
  ReviewQueueItem,
} from '@/types/onboarding';

// Mock restaurant search results
export const mockRestaurantResults: Restaurant[] = [
  {
    id: 'rest-001',
    name: 'Sunrise Diner',
    address: '123 Main Street',
    city: 'Orange',
    state: 'CA',
    zip: '92866',
    phone: '(714) 555-1234',
    cuisine: 'American Diner',
    yelpUrl: 'https://yelp.com/biz/sunrise-diner-orange',
    hours: {
      monday: '6:00 AM - 3:00 PM',
      tuesday: '6:00 AM - 3:00 PM',
      wednesday: '6:00 AM - 3:00 PM',
      thursday: '6:00 AM - 3:00 PM',
      friday: '6:00 AM - 3:00 PM',
      saturday: '7:00 AM - 4:00 PM',
      sunday: '7:00 AM - 4:00 PM',
    },
  },
  {
    id: 'rest-002',
    name: 'Bella Vista Italian Kitchen',
    address: '456 Oak Avenue',
    city: 'Irvine',
    state: 'CA',
    zip: '92618',
    phone: '(949) 555-5678',
    cuisine: 'Italian',
    yelpUrl: 'https://yelp.com/biz/bella-vista-irvine',
  },
  {
    id: 'rest-003',
    name: 'Pho Palace',
    address: '789 Westminster Blvd',
    city: 'Westminster',
    state: 'CA',
    zip: '92683',
    phone: '(714) 555-9012',
    cuisine: 'Vietnamese',
    yelpUrl: 'https://yelp.com/biz/pho-palace-westminster',
  },
];

// Mock Yelp review images
export const mockYelpImages: YelpImage[] = [
  {
    id: 'img-001',
    url: '/api/placeholder/800/600?menu=breakfast',
    thumbnailUrl: '/api/placeholder/200/150?menu=breakfast',
    caption: 'Breakfast menu board',
    date: '2026-01-15T10:30:00Z',
    isMenuPhoto: true,
    hasFaces: false,
  },
  {
    id: 'img-002',
    url: '/api/placeholder/800/600?menu=lunch',
    thumbnailUrl: '/api/placeholder/200/150?menu=lunch',
    caption: 'Lunch specials menu',
    date: '2026-01-20T12:45:00Z',
    isMenuPhoto: true,
    hasFaces: false,
  },
  {
    id: 'img-003',
    url: '/api/placeholder/800/600?food=pancakes',
    thumbnailUrl: '/api/placeholder/200/150?food=pancakes',
    caption: 'Stack of pancakes',
    date: '2026-01-22T09:15:00Z',
    isMenuPhoto: false,
    hasFaces: false,
  },
  {
    id: 'img-004',
    url: '/api/placeholder/800/600?menu=desserts',
    thumbnailUrl: '/api/placeholder/200/150?menu=desserts',
    caption: 'Dessert menu page',
    date: '2026-02-01T14:20:00Z',
    isMenuPhoto: true,
    hasFaces: false,
  },
  {
    id: 'img-005',
    url: '/api/placeholder/800/600?food=burger',
    thumbnailUrl: '/api/placeholder/200/150?food=burger',
    caption: 'Cheeseburger with fries',
    date: '2026-02-05T13:00:00Z',
    isMenuPhoto: false,
    hasFaces: true,
  },
  {
    id: 'img-006',
    url: '/api/placeholder/800/600?menu=drinks',
    thumbnailUrl: '/api/placeholder/200/150?menu=drinks',
    caption: 'Drinks menu',
    date: '2026-02-10T11:30:00Z',
    isMenuPhoto: true,
    hasFaces: false,
  },
];

// Mock menu items
const breakfastItems: MenuItem[] = [
  {
    id: 'item-001',
    name: 'Classic Pancakes',
    description: 'Three fluffy buttermilk pancakes served with maple syrup and butter',
    price: '$8.99',
    modifiers: ['Add blueberries +$2', 'Add chocolate chips +$2'],
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-001',
  },
  {
    id: 'item-002',
    name: 'Sunrise Special',
    description: 'Two eggs any style, bacon or sausage, hash browns, and toast',
    price: '$12.99',
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-001',
  },
  {
    id: 'item-003',
    name: 'Belgian Waffle',
    description: 'Golden waffle with whipped cream and fresh berries',
    price: '$9.99',
    modifiers: ['Add fried chicken +$5'],
    confidence: 'medium',
    needsReview: true,
    sourceImageId: 'img-001',
  },
  {
    id: 'item-004',
    name: 'Veggie Omelet',
    description: 'Mushrooms bell peppers onions spinach cheese',
    price: '$10.99',
    confidence: 'low',
    needsReview: true,
    sourceImageId: 'img-001',
  },
];

const lunchItems: MenuItem[] = [
  {
    id: 'item-101',
    name: 'Classic Burger',
    description: 'Half-pound beef patty, lettuce, tomato, onion, pickles on brioche bun',
    price: '$13.99',
    modifiers: ['Add cheese +$1.50', 'Add bacon +$2', 'Make it a double +$5'],
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-002',
  },
  {
    id: 'item-102',
    name: 'Turkey Club Sandwich',
    description: 'Roasted turkey, bacon, lettuce, tomato, mayo on toasted sourdough',
    price: '$11.99',
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-002',
  },
  {
    id: 'item-103',
    name: 'Caesar Salad',
    description: 'Romaine lettuce parmesan croutons caesar dressing',
    price: '$9.99',
    modifiers: ['Add grilled chicken +$4', 'Add shrimp +$6'],
    confidence: 'medium',
    needsReview: true,
    sourceImageId: 'img-002',
  },
];

const dessertItems: MenuItem[] = [
  {
    id: 'item-201',
    name: 'Apple Pie',
    description: 'Homemade apple pie with vanilla ice cream',
    price: '$6.99',
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-004',
  },
  {
    id: 'item-202',
    name: 'Chocolate Cake',
    description: 'Rich chocolate layer cake',
    price: '$7.99',
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-004',
  },
  {
    id: 'item-203',
    name: 'Cheesecake',
    price: '$6.99',
    confidence: 'low',
    needsReview: true,
    sourceImageId: 'img-004',
  },
];

const drinkItems: MenuItem[] = [
  {
    id: 'item-301',
    name: 'Coffee',
    description: 'Freshly brewed coffee, regular or decaf',
    price: '$2.99',
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-006',
  },
  {
    id: 'item-302',
    name: 'Fresh Squeezed Orange Juice',
    price: '$4.99',
    confidence: 'high',
    needsReview: false,
    sourceImageId: 'img-006',
  },
  {
    id: 'item-303',
    name: 'Milkshake',
    description: 'Vanilla chocolate or strawberry',
    price: '$5.99',
    confidence: 'medium',
    needsReview: false,
    sourceImageId: 'img-006',
  },
];

// Mock menu categories
export const mockMenuCategories: MenuCategory[] = [
  {
    id: 'cat-001',
    name: 'Breakfast',
    items: breakfastItems,
    order: 1,
  },
  {
    id: 'cat-002',
    name: 'Lunch',
    items: lunchItems,
    order: 2,
  },
  {
    id: 'cat-003',
    name: 'Desserts',
    items: dessertItems,
    order: 3,
  },
  {
    id: 'cat-004',
    name: 'Drinks',
    items: drinkItems,
    order: 4,
  },
];

// Mock menu draft
export const mockMenuDraft: MenuDraft = {
  id: 'draft-001',
  restaurantId: 'rest-001',
  categories: mockMenuCategories,
  createdAt: '2026-02-20T10:00:00Z',
  updatedAt: '2026-02-20T10:00:00Z',
  status: 'draft',
};

// Mock review queue (items that need attention)
export const mockReviewQueue: ReviewQueueItem[] = [
  {
    itemId: 'item-004',
    categoryId: 'cat-001',
    issue: 'Description seems incomplete or poorly formatted',
    suggestion: 'Add punctuation between ingredients',
  },
  {
    itemId: 'item-003',
    categoryId: 'cat-001',
    issue: 'Price formatting unclear in source image',
  },
  {
    itemId: 'item-103',
    categoryId: 'cat-002',
    issue: 'Description needs formatting',
    suggestion: 'Add commas between ingredients',
  },
  {
    itemId: 'item-203',
    categoryId: 'cat-003',
    issue: 'Missing description',
    suggestion: 'Add description from review text or leave blank',
  },
];

// Initial onboarding state
export const initialOnboardingState: OnboardingState = {
  currentStep: 1,
  images: [],
  settings: {
    slug: '',
    theme: 'auto',
    enableOrdering: false,
    showPopularItems: true,
  },
  hideNonMenuPhotos: false,
  blurFaces: true,
};
