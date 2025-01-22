import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Props {
  isAuthPopupOpen: boolean;
  setIsAuthPopupOpen: (value: boolean) => void;

  isFeedbackPopupOpen: boolean;
  setIsFeedbackPopupOpen: (value: boolean) => void;

  isPhotoFeedbackPopupOpen: boolean;
  setIsPhotoFeedbackPopupOpen: (value: boolean) => void;
}

const createComponentsSlice: StateCreator<
  Props,
  [['zustand/devtools', never]],
  [],
  Props
> = (set) => ({
  isAuthPopupOpen: false,
  setIsAuthPopupOpen: (value) => set({ isAuthPopupOpen: value }),

  isFeedbackPopupOpen: false,
  setIsFeedbackPopupOpen: (value) => set({ isFeedbackPopupOpen: value }),

  isPhotoFeedbackPopupOpen: false,
  setIsPhotoFeedbackPopupOpen: (value) =>
    set({ isPhotoFeedbackPopupOpen: value }),
});

export const useComponentsStore = create<Props>()(
  devtools((...args) => ({
    ...createComponentsSlice(...args),
  })),
);
