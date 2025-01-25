interface Props {
	className?: string;
}

const Load = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5.22211 15.5931C2.96375 14.2849 1.44434 11.8398 1.44434 9.03933C1.44434 5.86413 3.39761 3.14576 6.16656 2.02338M6.16656 13.2952L6.16656 17.0781H2.38878M12.7777 2.56318C15.036 3.87136 16.5554 6.31645 16.5554 9.11691C16.5554 12.2921 14.6022 15.0105 11.8332 16.1329M11.8332 4.86108V1.07812L15.611 1.07812'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default Load;
