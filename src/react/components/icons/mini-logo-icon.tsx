interface Props {
	className?: string;
}

const MiniLogoIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width="18"
			height="21"
			viewBox="0 0 18 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.34308 11.3893V20.5H0V0.5H5.34308V11.3893ZM18 20.5H11.7772L7.41303 11.7458H7.38716L13.7868 0.5H17.2367L11.195 8.45302L17.9957 20.4958L18 20.5Z"
				fill="#C0080B"
			/>
		</svg>
	);
};

export default MiniLogoIcon;
