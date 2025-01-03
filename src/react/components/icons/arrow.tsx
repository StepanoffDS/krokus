interface Props {
	className?: string;
}

const Arrow = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width={16}
			height={14}
			viewBox="0 0 16 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.833 13.203L1 7.078m0 0L6.833.953M1 7.078h14"
				stroke="currentColor"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default Arrow;
