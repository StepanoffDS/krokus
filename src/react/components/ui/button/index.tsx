import styles from "./button.module.scss";

interface Props {
	className?: string;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	href?: string;
	children: string | React.ReactNode;
	variant?: "primary" | "secondary" | "outline";
}

const Button = ({
	className,
	type = "button",
	onClick,
	href,
	children,
	variant = "primary",
}: Props) => {
	const btnStyles = {
		primary: styles["btn--primary"],
		secondary: styles["btn--secondary"],
		outline: styles["btn--outline"],
	};

	return (
		<>
			{!href ? (
				<button
					type={type}
					className={`${styles["btn"]} ${btnStyles[variant]} ${className}`}
					onClick={onClick}>
					{children}
				</button>
			) : (
				<a
					href={href}
					className={`${styles["btn"]} ${btnStyles[variant]} ${className}`}>
					{children}
				</a>
			)}
		</>
	);
};

export default Button;
