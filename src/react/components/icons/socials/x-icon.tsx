interface Props {
	className?: string;
}

const XIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='20'
			height='21'
			viewBox='0 0 20 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.7123 8.69984L18.4132 1.07812H16.8253L11.007 7.69605L6.35991 1.07812H1L8.02729 11.0855L1 19.0781H2.58804L8.73244 12.0895L13.6401 19.0781H19L11.7122 8.69984H11.7126H11.7123ZM9.53733 11.1736L8.82528 10.1771L3.16013 2.24777H5.59911L10.1711 8.647L10.8831 9.64345L16.8261 17.9615H14.3871L9.53748 11.1739V11.1734L9.53733 11.1736Z'
				fill='#251F1F'
			/>
		</svg>
	);
};

export default XIcon;
