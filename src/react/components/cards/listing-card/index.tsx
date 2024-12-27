import styles from "./listing-card.module.scss";

import DiscountIcon from "../../icons/discount-icon";
import product from "@/react/components/illustrations/product.png";

interface Props {
	className?: string;
}

const ListingCard = ({ className }: Props) => {
	return (
		<article className={`${styles["item"]} ${className}`}>
			<div className={styles["item-discount"]}>
				<DiscountIcon />
				Izdevīgi
			</div>
			<a href="#!" className={styles["item-img"]}>
				<img src={product} alt="product" />
			</a>
			<h4 className={styles["item-title"]}>
				<a href="#!">Ziedu nosaukums</a>
			</h4>
			<div className={styles["item-prices"]}>
				<span className={styles["price-now"]}>no 24,99 €</span>
				<span className={styles["price-old"]}>29,99 €</span>
			</div>
		</article>
	);
};

export default ListingCard;
