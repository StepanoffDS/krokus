interface Props {
	className?: string;
}

const BanklinksIcon = ({ className }: Props) => {
	return (
		<svg
			width={26}
			height={23}
			viewBox='0 0 26 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M13 17.078v3m-4.5 1.5h9M4 17.078h18a3 3 0 003-3v-10.5a3 3 0 00-3-3H4a3 3 0 00-3 3v10.5a3 3 0 003 3z'
				stroke='#251F1F'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default BanklinksIcon;
