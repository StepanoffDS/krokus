import Button from "../../ui/button";
import styles from "./main-listing.module.scss";

interface Props {
	className?: string;
	qty?: number;
	link: string;
}

const BtnMore = ({ className, qty, link }: Props) => {
	return (
		<Button
			href={link}
			className={`${styles["btn-more"]} ${className}`}
			variant="outline">
			Skatīt visus{" "}
			{qty && <span className={styles["btn-more-count"]}>{qty}</span>}
		</Button>
	);
};

export default BtnMore;
