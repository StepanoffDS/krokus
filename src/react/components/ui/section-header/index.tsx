import styles from "./section-header.module.scss";

interface Props {
	className?: string;
	title: string;
}

const SectionHeader = ({ className, title }: Props) => {
	return (
		<header className={`${styles["header"]} ${className}`}>
			<h2 className={`title-1 ${styles["title"]}`}>{title}</h2>
		</header>
	);
};

export default SectionHeader;
