interface Props {
	className?: string;
}

const DownSelectChevron = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='12'
			height='6'
			viewBox='0 0 12 6'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 0.788147L6.00081 5.36815L11 0.788147'
				stroke='#7D7369'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default DownSelectChevron;
