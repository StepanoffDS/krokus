interface Props {
	className?: string;
}

const MenuIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='17'
			height='13'
			viewBox='0 0 17 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0.500001 0.5L16.5 0.500001M6 6.5L16.5 6.5M0.5 12.5L16.5 12.5'
				stroke='#DFDFDF'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default MenuIcon;
