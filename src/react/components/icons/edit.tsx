const Edit = (props) => {
	return (
		<svg
			width={22}
			height={22}
			viewBox='0 0 22 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M10.098 2.882H4.412A3.412 3.412 0 001 6.294v11.372a3.412 3.412 0 003.412 3.412h11.373a3.412 3.412 0 003.412-3.412V11.98m-12.51 3.412l4.137-.834c.22-.044.422-.152.58-.31l9.263-9.269a1.137 1.137 0 000-1.608l-1.963-1.96a1.137 1.137 0 00-1.608 0l-9.264 9.27c-.158.157-.266.359-.31.578l-.836 4.133z'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default Edit;
