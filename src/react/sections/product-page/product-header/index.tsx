import Arrow from "@@/react/components/icons/arrow";
import { Link, useNavigate } from "react-router";
import styles from "./product-header.module.scss";

interface Props {
	className?: string;
}

const ProductHeader = ({ className }: Props) => {
	const navigate = useNavigate();

	return (
		<div className={`${className} ${styles["product-header"]}`}>
			<Link to="/" onClick={() => navigate(-1)} className={styles["back-link"]}>
				<Arrow className={styles["icon"]} />
				Atpakaļ
			</Link>
			<div className={styles["line"]} />
		</div>
	);
};

export default ProductHeader;
