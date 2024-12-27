import styles from "./button.module.scss";

interface Props {
	className?: string;
	type?: "button" | "submit" | "reset";
	action?: () => void;
	href?: string;
	children: string | React.ReactNode;
}

const Button = ({
	className,
	type = "button",
	action,
	href,
	children,
}: Props) => {
	return (
		<>
			{!href ? (
				<button
					type={type}
					className={`${styles["btn"]} ${className}`}
					onClick={action}>
					{children}
				</button>
			) : (
				<a href={href} className={`${styles["btn"]} ${className}`}>
					{children}
				</a>
			)}
		</>
	);
};

export default Button;
