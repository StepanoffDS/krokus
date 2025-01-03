import styles from "./category-main.module.scss";
import CategoryParams from "./category-params";
import CategoryListing from "./category-listing";
import QuickSelection from "./quick-selection";
import { useParams } from "react-router";

interface Props {
	className?: string;
}

const CategoryMain = ({ className }: Props) => {
	const params = useParams();

	console.log(params);

	return (
		<div className={className}>
			<div className="container">
				<div className={styles["wrapper"]}>
					<aside className={styles["aside"]}>
						<CategoryParams />
					</aside>
					<CategoryListing />
					<QuickSelection className={styles["quick-selection"]} />
				</div>
			</div>
		</div>
	);
};

export default CategoryMain;
