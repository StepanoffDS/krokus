import styles from "./header-langs.module.scss";

interface Props {
	className?: string;
}

const HeaderLangs = ({ className }: Props) => {
	return (
		<div className={`${styles["languages"]} ${className}`}>
			<button className={`${styles["lang-btn"]} ${styles["lang-active"]}`}>
				Lv
			</button>
			<button className={`${styles["lang-btn"]}`}>En</button>
			<button className={`${styles["lang-btn"]}`}>Ru</button>
		</div>
	);
};

export default HeaderLangs;
