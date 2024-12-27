import styles from "./main-listing.module.scss";

interface Props {
	className?: string;
	qty?: number;
	link: string;
}

const BtnMore = ({ className, qty, link }: Props) => {
	return (
		<a href={link} className={`${styles["btn-more"]} ${className}`}>
			Skatīt visus{" "}
			{qty && <span className={styles["btn-more-count"]}>{qty}</span>}
		</a>
	);
};

export default BtnMore;
