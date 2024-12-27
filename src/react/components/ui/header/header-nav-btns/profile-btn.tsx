import styles from "./header-nav-btns.module.scss";
import ProfileIcon from "@/react/components/icons/profile-icon";

interface Props {
	className?: string;
}

const ProfileBtn = ({ className }: Props) => {
	return (
		<a href="#!" className={`${styles["header-nav-btn"]} ${className}`}>
			<ProfileIcon />
		</a>
	);
};

export default ProfileBtn;
