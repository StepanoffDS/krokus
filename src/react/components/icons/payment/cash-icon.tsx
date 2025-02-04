interface Props {
	className?: string;
}

const CashIcon = ({ className }: Props) => {
	return (
		<svg
			width={26}
			height={16}
			viewBox='0 0 26 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M1 3.178c0-1.16 1.007-2.1 2.25-2.1h19.5c1.243 0 2.25.94 2.25 2.1v9.8c0 1.16-1.007 2.1-2.25 2.1H3.25c-1.243 0-2.25-.94-2.25-2.1v-9.8z'
				stroke='#251F1F'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16 8.078c0 1.547-1.343 2.8-3 2.8s-3-1.253-3-2.8c0-1.546 1.343-2.8 3-2.8s3 1.254 3 2.8z'
				stroke='#251F1F'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default CashIcon;
