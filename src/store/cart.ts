import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Props {
	items: any[];
	addItem: (item: any) => void;
	removeItem: (item: any) => void;
}

const createCartSlice: StateCreator<
	Props,
	[['zustand/devtools', never]],
	[],
	Props
> = (set) => ({
	items: [],
	addItem: (item) => set((state) => ({ items: [...state.items, item] })),
	removeItem: (item) =>
		set((state) => ({ items: state.items.filter((i) => i.id !== item.id) })),
});

export const useCartStore = create<Props>()(
	devtools((...args) => ({
		...createCartSlice(...args),
	})),
);
