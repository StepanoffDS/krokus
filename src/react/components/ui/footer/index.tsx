import { email, footerNavs, tels } from "@/constants/company-info";
import LogoFooterIcon from "../../icons/logo-footer-icon";
import FacebookIcon from "../../icons/socials/facebook-icon";
import InstagramIcon from "../../icons/socials/instagram-icon";
import XIcon from "../../icons/socials/x-icon";
import YoutubeIcon from "../../icons/socials/youtube-icon";
import styles from "./footer.module.scss";
import FooterMenu from "./footer-menu";
import { formatTel } from "@/scripts/helpers/utils";

interface Props {
	className?: string;
}

const Footer = ({ className }: Props) => {
	return (
		<footer className={`${styles["footer"]} ${className}`}>
			<div className="container">
				<div className={styles["body"]}>
					<div className={styles["row"]}>
						<div className={styles["logo"]}>
							<LogoFooterIcon />
						</div>
						<div className={styles["socials"]}>
							<a href="#!" className={styles["social-link"]}>
								<InstagramIcon />
							</a>
							<a href="#!" className={styles["social-link"]}>
								<XIcon />
							</a>
							<a href="#!" className={styles["social-link"]}>
								<FacebookIcon />
							</a>
							<a href="#!" className={styles["social-link"]}>
								<YoutubeIcon />
							</a>
						</div>
					</div>
					<div className={styles["row"]}>
						{footerNavs.map((nav) => (
							<FooterMenu key={nav.title} footerNav={nav} />
						))}
						<div className={styles["contacts"]}>
							<h3 className={styles["subtitle"]}>Kontakti</h3>
							{tels.map((tel) => (
								<a
									key={formatTel(tel)}
									href={formatTel(tel)}
									className={styles["phone"]}>
									{tel}
								</a>
							))}
							<a href={`mailto${email}`} className={styles["email"]}>
								{email}
							</a>
							<p className={styles["info"]}>
								SIA ZIEDU BĀZE RĪGA <br />
								Reģ.Nr. 40203062391 <br />
								Artilērijas iela 25 <br />
								Rīga, LV-1001
							</p>
						</div>
					</div>
					<p className={styles["copyright"]}>
						[2024] Visas tiesības ir aizsargātas SIA Ziedu Bāze Rīga
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
