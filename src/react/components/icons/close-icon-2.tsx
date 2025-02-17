interface Props {
	className?: string;
}

const CloseIcon2 = ({ className }: Props) => {
	return (
		<svg
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path d='M23 1L1 23m22 0L1 1' stroke='#251F1F' strokeLinecap='round' />
		</svg>
	);
};

export default CloseIcon2;
