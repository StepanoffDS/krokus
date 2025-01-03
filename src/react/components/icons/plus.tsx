interface Props {
	className?: string;
}

const Plus = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width={16}
			height={16}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 .878v14.4m7.2-7.2H.8"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Plus;
