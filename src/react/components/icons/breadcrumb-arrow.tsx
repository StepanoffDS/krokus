interface Props {
	className?: string;
}

const BreadcrumbArrow = ({ className }: Props) => {
	return (
		<svg
			width={5}
			height={10}
			viewBox='0 0 5 10'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M.672 8.578l3.664-4-3.664-4'
				stroke='#251F1F'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default BreadcrumbArrow;
