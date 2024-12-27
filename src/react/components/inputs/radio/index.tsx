import styles from "./radio.module.scss";

interface Props {
	className?: string;
	children: string | React.ReactNode;
	id: string;
}

const Radio = ({ className, children, id }: Props) => {
	return (
		<div className={`${styles["form-group"]} ${className}`}>
			<input
				id={id}
				name={id}
				type="checkbox"
				className={styles["form-input"]}
			/>
			<svg>
				<use xlinkHref="#checkmark" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
				<symbol id="checkmark" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeMiterlimit="10"
						fill="none"
						d="M22.9 3.7l-15.2 16.6-6.6-7.1"></path>
				</symbol>
			</svg>
			<label htmlFor={id} className={styles["form-label"]}>
				{children}
			</label>
		</div>
	);
};

export default Radio;
