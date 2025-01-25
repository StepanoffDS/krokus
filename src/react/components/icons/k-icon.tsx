interface Props {
	className?: string;
}

const KIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='19'
			height='21'
			viewBox='0 0 19 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5.84308 10.9674V20.0781H0.5V0.078125H5.84308V10.9674ZM18.5 20.0781H12.2772L7.91303 11.3239H7.88716L14.2868 0.078125H17.7367L11.695 8.03115L18.4957 20.0739L18.5 20.0781Z'
				fill='#DADADA'
			/>
		</svg>
	);
};

export default KIcon;
