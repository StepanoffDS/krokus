interface Props {
	className?: string;
}

const SearchIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.22592 9.3L11.5 11.5M10.7667 5.63333C10.7667 8.4684 8.4684 10.7667 5.63333 10.7667C2.79827 10.7667 0.5 8.4684 0.5 5.63333C0.5 2.79827 2.79827 0.5 5.63333 0.5C8.4684 0.5 10.7667 2.79827 10.7667 5.63333Z'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default SearchIcon;
