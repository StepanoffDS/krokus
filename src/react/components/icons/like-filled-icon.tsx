interface Props {
	className?: string;
}

const LikeFilledIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width={12}
			height={11}
			viewBox='0 0 12 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M1.73 1.76a2.493 2.493 0 013.524 0l.73.73.73-.73a2.492 2.492 0 113.525 3.525L5.984 9.541 1.73 5.285a2.493 2.493 0 010-3.524v0z'
				fill='currentColor'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default LikeFilledIcon;
