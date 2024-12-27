interface Props {
	className?: string;
}

const FacebookIcon = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_74_1606)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8.25377 1.62129C9.21007 0.635107 10.5104 0.078125 11.8697 0.078125H14.6333C14.9095 0.078125 15.1333 0.301983 15.1333 0.578125V4.37813C15.1333 4.65427 14.9095 4.87813 14.6333 4.87813H11.8697C11.763 4.87813 11.6575 4.92168 11.5773 5.00445C11.4965 5.08774 11.4485 5.2039 11.4485 5.32812V7.67812H14.6333C14.7867 7.67812 14.9315 7.74849 15.0263 7.86901C15.1211 7.98954 15.1554 8.1469 15.1193 8.29593L14.198 12.0959C14.1437 12.3202 13.9429 12.4781 13.7121 12.4781H11.4485V19.5781C11.4485 19.8543 11.2246 20.0781 10.9485 20.0781H7.26364C6.98749 20.0781 6.76364 19.8543 6.76364 19.5781V12.4781H4.5C4.22386 12.4781 4 12.2543 4 11.9781V8.17813C4 7.90198 4.22386 7.67812 4.5 7.67812H6.76364V5.32812C6.76364 3.94062 7.29797 2.60696 8.25377 1.62129ZM11.8697 1.07812C10.7858 1.07812 9.74298 1.52203 8.97167 2.31744C8.19986 3.11337 7.76364 4.19608 7.76364 5.32812V8.17813C7.76364 8.45427 7.53978 8.67813 7.26364 8.67813H5V11.4781H7.26364C7.53978 11.4781 7.76364 11.702 7.76364 11.9781V19.0781H10.4485V11.9781C10.4485 11.702 10.6723 11.4781 10.9485 11.4781H13.3189L13.9976 8.67813H10.9485C10.6723 8.67813 10.4485 8.45427 10.4485 8.17813V5.32812C10.4485 4.94844 10.5946 4.58133 10.8594 4.3083C11.1246 4.03475 11.4877 3.87812 11.8697 3.87812H14.1333V1.07812H11.8697Z"
					fill="#251F1F"
				/>
			</g>
			<defs>
				<clipPath id="clip0_74_1606">
					<rect
						width="20"
						height="20"
						fill="white"
						transform="translate(0 0.078125)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default FacebookIcon;