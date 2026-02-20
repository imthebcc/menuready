import { create } from 'zustand';
import {
  Restaurant,
  YelpImage,
  MenuDraft,
  MenuSettings,
  OnboardingStep,
} from '@/types/onboarding';
import { initialOnboardingState } from './mockData';

interface OnboardingStore {
  // State
  currentStep: OnboardingStep;
  restaurant: Restaurant | null;
  images: YelpImage[];
  menuDraft: MenuDraft | null;
  settings: MenuSettings;
  hideNonMenuPhotos: boolean;
  blurFaces: boolean;
  
  // Loading states
  isLoadingImages: boolean;
  isGeneratingDraft: boolean;
  isPublishing: boolean;
  
  // Actions
  setStep: (step: OnboardingStep) => void;
  nextStep: () => void;
  previousStep: () => void;
  setRestaurant: (restaurant: Restaurant | null) => void;
  setImages: (images: YelpImage[]) => void;
  setMenuDraft: (draft: MenuDraft | null) => void;
  updateSettings: (settings: Partial<MenuSettings>) => void;
  toggleHideNonMenuPhotos: () => void;
  toggleBlurFaces: () => void;
  setLoadingImages: (loading: boolean) => void;
  setGeneratingDraft: (loading: boolean) => void;
  setPublishing: (loading: boolean) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  // Initial state
  currentStep: 1,
  restaurant: null,
  images: [],
  menuDraft: null,
  settings: initialOnboardingState.settings,
  hideNonMenuPhotos: false,
  blurFaces: true,
  isLoadingImages: false,
  isGeneratingDraft: false,
  isPublishing: false,
  
  // Actions
  setStep: (step) => set({ currentStep: step }),
  
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(5, state.currentStep + 1) as OnboardingStep,
    })),
  
  previousStep: () =>
    set((state) => ({
      currentStep: Math.max(1, state.currentStep - 1) as OnboardingStep,
    })),
  
  setRestaurant: (restaurant) => set({ restaurant }),
  
  setImages: (images) => set({ images }),
  
  setMenuDraft: (menuDraft) => set({ menuDraft }),
  
  updateSettings: (newSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
  
  toggleHideNonMenuPhotos: () =>
    set((state) => ({ hideNonMenuPhotos: !state.hideNonMenuPhotos })),
  
  toggleBlurFaces: () =>
    set((state) => ({ blurFaces: !state.blurFaces })),
  
  setLoadingImages: (isLoadingImages) => set({ isLoadingImages }),
  
  setGeneratingDraft: (isGeneratingDraft) => set({ isGeneratingDraft }),
  
  setPublishing: (isPublishing) => set({ isPublishing }),
  
  reset: () => set({
    currentStep: 1,
    restaurant: null,
    images: [],
    menuDraft: null,
    settings: initialOnboardingState.settings,
    hideNonMenuPhotos: false,
    blurFaces: true,
    isLoadingImages: false,
    isGeneratingDraft: false,
    isPublishing: false,
  }),
}));
