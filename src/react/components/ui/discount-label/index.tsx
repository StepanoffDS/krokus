import DiscountIcon from "../../icons/discount-icon";
import styles from "./discount-label.module.scss";

interface Props {
	className?: string;
}

const DiscountLabel = ({ className }: Props) => {
	return (
		<div className={`${styles["item-discount"]} ${className}`}>
			<DiscountIcon />
			Izdevīgi
		</div>
	);
};

export default DiscountLabel;
