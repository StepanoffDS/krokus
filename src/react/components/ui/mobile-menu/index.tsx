import { useRef, useState } from "react";
import MenuIcon from "../../icons/menu-icon";
import styles from "./mobile-menu.module.scss";
import { footerNavs, tels } from "@@/constants/company-info";
import MenuCloseIcon from "../../icons/menu-close-icon";
import ProfileBtn from "../header/header-nav-btns/profile-btn";
import LikeBtn from "../header/header-nav-btns/like-btn";
import HeaderBin from "../header/header-bin";
import MiniLogoIcon from "../../icons/mini-logo-icon";
import { formatTel } from "@@/scripts/helpers/utils";
import HeaderLangs from "../header/header-langs";
import { useClickOutside } from "@@/scripts/hooks/use-click-outside";

interface Props {
	className?: string;
}

const MobileMenu = ({ className }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = isOpen ? "auto" : "hidden";

		const classListAction = !isOpen ? "add" : "remove";
		document.body.classList[classListAction]("overlay");
	};

	useClickOutside({
		ref: menuRef,
		handler: () => {
			if (isOpen) {
				toggleMenu();
			}
		},
	});

	return (
		<div className={className}>
			<button className={styles["menu-btn"]} onClick={toggleMenu}>
				<MenuIcon />
			</button>
			<div
				className={`${styles["menu"]} ${isOpen ? styles["open"] : ""}`}
				ref={menuRef}>
				<header className={styles["menu-header"]}>
					<MiniLogoIcon />

					<div className={styles["header-btns"]}>
						<ProfileBtn />
						<LikeBtn />

						<HeaderBin />
						<button className={styles["menu-btn"]} onClick={toggleMenu}>
							<MenuCloseIcon />
						</button>
					</div>
				</header>
				<nav className={styles["nav"]}>
					{footerNavs[1].links.map(({ name, link }) => (
						<a key={link} href={link} className={styles["nav-link"]}>
							{name}
						</a>
					))}
				</nav>
				<footer className={styles["footer"]}>
					{tels.map((tel) => (
						<a key={tel} href={formatTel(tel)} className={styles["phone"]}>
							{tel}
						</a>
					))}

					<HeaderLangs />
				</footer>
			</div>
		</div>
	);
};

export default MobileMenu;
