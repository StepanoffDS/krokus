interface Props {
	className?: string;
}

const MenuCloseIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width="17"
			height="17"
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16.5 0.500004L0.5 16.5M16.5 16.5L0.500001 0.5"
				stroke="#DFDFDF"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default MenuCloseIcon;
