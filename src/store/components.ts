import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Props {
	isAuthPopupOpen: boolean;
	setIsAuthPopupOpen: (value: boolean) => void;

	isOpenSearch: boolean;
	setIsOpenSearch: (value: boolean) => void;
}

const createComponentsSlice: StateCreator<
	Props,
	[['zustand/devtools', never]],
	[],
	Props
> = (set) => ({
	isAuthPopupOpen: false,
	setIsAuthPopupOpen: (value) => set({ isAuthPopupOpen: value }),

	isOpenSearch: false,
	setIsOpenSearch: (value) => set({ isOpenSearch: value }),
});

export const useComponentsStore = create<Props>()(
	devtools((...args) => ({
		...createComponentsSlice(...args),
	})),
);
