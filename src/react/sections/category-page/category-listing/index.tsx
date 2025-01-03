import ListingCard from "@@/react/components/cards/listing-card";
import styles from "./category-listing.module.scss";
import Button from "@@/react/components/ui/button";
import Divider from "@@/react/components/ui/divider";

interface Props {
	className?: string;
}

const CategoryListing = ({ className }: Props) => {
	return (
		<div className={`${styles["listing-wrapper"]} ${className}`}>
			<div className={styles["listing"]}>
				{[...Array(15)].map((_, index) => (
					<ListingCard key={index} className={styles["listing-card"]} id="1" />
				))}
			</div>
			<Button variant="outline" className={styles["btn"]}>
				Ielādēt vēl
			</Button>
			<Divider className={styles["divider"]} />
		</div>
	);
};

export default CategoryListing;
