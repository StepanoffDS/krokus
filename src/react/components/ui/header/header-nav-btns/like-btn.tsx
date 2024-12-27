import styles from "./header-nav-btns.module.scss";
import LikeIcon from "@/react/components/icons/like-icon";

interface Props {
	className?: string;
}

const LikeBtn = ({ className }: Props) => {
	return (
		<a href="#!" className={`${styles["header-nav-btn"]} ${className}`}>
			<LikeIcon />
		</a>
	);
};

export default LikeBtn;
