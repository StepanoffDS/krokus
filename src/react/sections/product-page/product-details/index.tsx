import styles from "./product-details.module.scss";

interface Props {
	className?: string;
}

const ProductDetails = ({ className }: Props) => {
	return (
		<section className={`${styles["details"]} ${className}`}>
			{[...Array(4)].map((_, index) => (
				<details key={index} className={styles["detail"]}>
					<summary className={`${styles["summary"]} desc`}>
						Feature {index + 1}
					</summary>
					<div className={styles["content"]}>
						<p className={"desc"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</details>
			))}
		</section>
	);
};

export default ProductDetails;
