interface Props {
	className?: string;
}

const ProfileIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='12'
			height='10'
			viewBox='0 0 12 10'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 9C1.75632 7.82093 3.41392 7.01397 6 7.01397C8.58608 7.01397 10.2437 7.82093 11 9M8.05426 2.92C8.05426 3.98039 7.13454 4.84 6 4.84C4.86546 4.84 3.94574 3.98039 3.94574 2.92C3.94574 1.85961 4.86546 1 6 1C7.13454 1 8.05426 1.85961 8.05426 2.92Z'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default ProfileIcon;
