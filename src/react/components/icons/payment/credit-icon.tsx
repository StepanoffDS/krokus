interface Props {
	className?: string;
}

const CreditIcon = ({ className }: Props) => {
	return (
		<svg
			width={26}
			height={20}
			viewBox='0 0 26 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M1.75 6.556h22.5m-18 5.478H10M4 1.079h18c1.657 0 3 1.4 3 3.13v11.741c0 1.729-1.343 3.13-3 3.13l-18-.001c-1.657 0-3-1.402-3-3.13V4.208c0-1.728 1.343-3.13 3-3.13z'
				stroke='#251F1F'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default CreditIcon;
