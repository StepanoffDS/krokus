export interface ProductCard {
	productId: number;
	img: string;
	date: string;
	className?: string;
	desc?: string;
}

export type UseStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IPopup<T> {
	className?: string;
	isOpen: boolean;
	setIsOpen: UseStateType<T>;
}
