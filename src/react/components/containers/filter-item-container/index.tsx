import styles from "./filter-item-container.module.scss";

interface Props {
	title?: string;
	className?: string;
	children?: React.ReactNode;
}

const FilterItemContainer = ({ children, className, title }: Props) => {
	return (
		<div className={`${styles["section"]} ${className}`}>
			<h3 className={styles["section-title"]}>{title}</h3>
			<div className={styles["section-content"]}>{children}</div>
		</div>
	);
};

export default FilterItemContainer;
