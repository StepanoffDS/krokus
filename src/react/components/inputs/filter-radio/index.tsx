import Radio from "../radio";
import styles from "./filter-radio.module.scss";

interface Props {
	className?: string;
	id: string;
	text: string;
	count: number;
}

const FilterRadio = ({ id, className, text, count }: Props) => {
	return (
		<Radio id={id} className={className} type="big">
			<span className={styles["wrapper"]}>
				<span className={styles["text"]}>{text}</span>
				<span className={styles["count"]}>{count}</span>
			</span>
		</Radio>
	);
};

export default FilterRadio;
