import { formatTel } from "@/scripts/helpers/utils";
import styles from "./header-menu.module.scss";
import HeaderBin from "../header-bin";
import HeaderLangs from "../header-langs";
import SearchBtn from "../header-nav-btns/search-btn";
import ProfileBtn from "../header-nav-btns/profile-btn";
import LikeBtn from "../header-nav-btns/like-btn";
import { tels } from "@/constants/company-info";
import MobileMenu from "../../mobile-menu";

const HeaderMenu = () => {
	return (
		<div className={styles["menu"]}>
			<div className={styles["menu-wrapper"]}>
				<div className={`${styles["menu-col"]} ${styles["menu-col-1"]}`}>
					{tels.map((tel) => (
						<a
							key={`${formatTel(tel)}`}
							href={`tel:${formatTel(tel)}`}
							className={styles["menu-tel"]}>
							{tel}
						</a>
					))}
					<p>24/7</p>
				</div>
				<div className={`${styles["menu-col"]} ${styles["menu-col-2"]}`}>
					<div className={styles["langs-desktop"]}>
						<HeaderLangs />
					</div>

					<div className={styles["sub-menu"]}>
						<SearchBtn />
						<ProfileBtn />
						<LikeBtn />

						<HeaderBin />

						<div className={styles["mobile-menu"]}>
							<MobileMenu />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMenu;
