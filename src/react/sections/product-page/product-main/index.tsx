import { useParams } from "react-router";
import ProductGallery from "../product-gallery";
import styles from "./product-main.module.scss";
import ProductHeader from "../product-header";
import ProductInfo from "../product-info";
import Divider from "@@/react/components/ui/divider";
import MoreProducts from "../more-products";

interface Props {
	className?: string;
}

const ProductMain = ({ className }: Props) => {
	const params = useParams();

	console.log(params);

	return (
		<div className={className}>
			<div className="container">
				<ProductHeader />
				<div className={styles["content"]}>
					<div className={styles["gallery"]}>
						<ProductGallery />
					</div>
					<div className={styles["info"]}>
						<ProductInfo />
					</div>
				</div>
				<Divider className={styles["divider"]} />
			</div>
			<MoreProducts className={styles["more-products"]} />
		</div>
	);
};

export default ProductMain;
