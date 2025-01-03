interface Props {
	className?: string;
}

const Minus = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width={16}
			height={2}
			viewBox="0 0 16 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.2 1.078H.8"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Minus;
