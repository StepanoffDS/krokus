import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';


interface Props {
	feedbackId: number;
	setFeedbackId: (value: number) => void;

	photoFeedbackId: number;
	setPhotoFeedbackId: (value: number) => void;
}

const createFeedbackSlice: StateCreator<
	Props,
	[['zustand/devtools', never]],
	[],
	Props
> = (set) => ({
	feedbackId: 0,
	setFeedbackId: (value) => set({ feedbackId: value }),

	photoFeedbackId: 0,
	setPhotoFeedbackId: (value) => set({ photoFeedbackId: value }),
	//
});

export const useFeedbackStore = create<Props>()(
	devtools((...args) => ({
		...createFeedbackSlice(...args),
	})),
);
