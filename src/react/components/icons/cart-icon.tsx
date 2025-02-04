interface Props {
	className?: string;
}

const CartIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M7.875 4.125V2.5625C7.875 1.52697 7.03553 0.6875 6 0.6875C4.96447 0.6875 4.125 1.52697 4.125 2.5625V4.125M2.21212 11.3125H9.78788C10.4573 11.3125 11 10.7799 11 10.1229L10.2235 3.81248C10.2235 3.15549 9.6808 2.62289 9.01136 2.62289H2.83712C2.16769 2.62289 1.625 3.15549 1.625 3.81248L1 10.1229C1 10.7799 1.54269 11.3125 2.21212 11.3125Z'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default CartIcon;
