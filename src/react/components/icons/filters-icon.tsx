interface Props {
	className?: string;
}

const FiltersIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='18'
			height='12'
			viewBox='0 0 18 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3.46154 6H14.5385M1 1H17M7.15385 11H10.8462'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default FiltersIcon;
