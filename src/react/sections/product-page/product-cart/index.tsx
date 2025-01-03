import { useState } from "react";
import Minus from "@@/react/components/icons/minus";
import styles from "./product-cart.module.scss";
import Plus from "@@/react/components/icons/plus";
import Button from "@@/react/components/ui/button";
import LikeIcon from "@@/react/components/icons/like-icon";

interface Props {
	className?: string;
}

const ProductCart = ({ className }: Props) => {
	const [qty, setQty] = useState(0);
	const [isFav, setIsFav] = useState(false);

	const minusQty = () => {
		if (qty > 0) {
			setQty((prev) => prev - 1);
		} else {
			setQty(0);
		}
	};

	const plusQty = () => {
		setQty((prev) => prev + 1);
	};

	const toggleFav = () => setIsFav((prev) => !prev);

	return (
		<section className={`${styles["cart"]} ${className}`}>
			<div className={styles["cart-info"]}>
				<div className={styles["cart-counter"]}>
					<button
						className={`${styles["cart-btn"]} ${styles["cart-btn--add"]}`}
						onClick={minusQty}
						disabled={qty === 0}>
						<Minus />
					</button>
					<input
						type="number"
						className={styles["cart-qty"]}
						placeholder="0"
						value={qty}
					/>
					<button
						className={`${styles["cart-btn"]} ${styles["cart-btn--minus"]}`}
						onClick={plusQty}>
						<Plus />
					</button>
				</div>
				<div className={styles["prices"]}>
					<span className={styles["price-now"]}>24,99 €</span>
					<span className={styles["price-old"]}>29,99 €</span>
				</div>
			</div>
			<div className={styles["cart-actions"]}>
				<Button className={styles["btn-add"]}>Pievienot grozam</Button>
				<Button
					className={`${styles["btn-like"]}`}
					variant={isFav ? "primary" : "outline"}
					onClick={toggleFav}>
					<LikeIcon fill={isFav ? "currentColor" : "none"} />
				</Button>
			</div>
		</section>
	);
};

export default ProductCart;
