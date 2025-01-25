interface Props {
	className?: string;
}

const TagClose = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='10'
			height='10'
			viewBox='0 0 10 10'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9 0.578125L1 8.57812M9 8.57812L1 0.578123'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default TagClose;
