interface Props {
	className?: string;
}

const SearchIcon2 = ({ className }: Props) => {
	return (
		<svg
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M18.452 18.6L23 23m-1.467-11.733c0 5.67-4.596 10.266-10.266 10.266S1 16.937 1 11.267 5.597 1 11.267 1c5.67 0 10.266 4.597 10.266 10.267z'
				stroke='#251F1F'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default SearchIcon2;
