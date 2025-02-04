interface Props {
	setIsOpen: (value: boolean) => void;
	isOpen: boolean;
}

export const togglePopup = ({ setIsOpen, isOpen }: Props) => {
	const scrollBarWidth =
		window.innerWidth - document.documentElement.clientWidth;
	setIsOpen(!isOpen);
	document.body.style.marginRight = !isOpen ? `${scrollBarWidth}px` : '0px';
	document.body.style.overflow = isOpen ? 'auto' : 'hidden';
	const classListAction = !isOpen ? 'add' : 'remove';
	document.body.classList[classListAction]('overlay');
};
