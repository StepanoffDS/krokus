import styles from "./input.module.scss";

interface Props {
	className?: string;
	placeholder?: string;
}

const Input = ({ className, placeholder }: Props) => {
	return (
		<div className={`${styles["form-group"]} ${className}`}>
			<input
				className={styles["form-input"]}
				type="text"
				placeholder={placeholder}
			/>
			<span className={styles["form-error"]}></span>
		</div>
	);
};

export default Input;
