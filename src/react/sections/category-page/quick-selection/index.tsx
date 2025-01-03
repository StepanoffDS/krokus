import ListingCard from "@@/react/components/cards/listing-card";
import styles from "./quick-selection.module.scss";
import Button from "@@/react/components/ui/button";

interface Props {
	className?: string;
}

const QuickSelection = ({ className }: Props) => {
	return (
		<section className={`${styles["quick-selection"]} ${className}`}>
			<h2 className={styles["title"]}>Grūti izvēlēties?</h2>
			<h3 className={styles["subtitle"]}>Izmanto mūsu ieteikumus</h3>
			<div className={styles["content"]}>
				<div className={`${styles["categories-btns"]} custom-scrollbar`}>
					<button
						className={`${styles["category-btn"]} ${styles["category-btn--active"]}`}>
						Pēc cenas {""}
						<span>18</span>
					</button>
					<button className={`${styles["category-btn"]}`}>
						Adresāts {""}
						<span>29</span>
					</button>
					<button className={`${styles["category-btn"]}`}>
						Iemesls {""}
						<span>34</span>
					</button>
				</div>
				<div className={styles["prices-btns"]}>
					<button className={`${styles["price-btn"]}`}>Līdz 15 EUR</button>
					<button
						className={`${styles["price-btn"]} ${styles["price-btn--active"]} custom-scrollbar`}>
						15 - 30 EUR
					</button>
					<button className={`${styles["price-btn"]}`}>30 - 50 EUR</button>
					<button className={`${styles["price-btn"]}`}>80 - 100 EUR</button>
					<button className={`${styles["price-btn"]}`}>no 100 EUR</button>
				</div>
				<div className={styles["listing-wrapper"]}>
					<div className={styles["listing"]}>
						{[...Array(3)].map((_, index) => (
							<ListingCard key={index} id="1" />
						))}
					</div>
					<Button className={styles["btn-more"]} variant="outline">
						Skatīt visus
					</Button>
				</div>
			</div>
		</section>
	);
};

export default QuickSelection;
