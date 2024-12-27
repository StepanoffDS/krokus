import KIcon from "../../icons/k-icon";
import styles from "./divider.module.scss";

interface Props {
	className?: string;
}

const Divider = ({ className }: Props) => {
	return (
		<div className={`${styles["divider"]} ${className}`}>
			<div className={styles["line"]}></div>
			<KIcon className={styles["k-icon"]} />
			<div className={styles["line"]}></div>
		</div>
	);
};

export default Divider;
