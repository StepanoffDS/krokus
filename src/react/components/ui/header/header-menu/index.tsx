import { formatTel } from '@@/scripts/helpers/utils';
import OpenAuthPopupBtn from '@@/react/popups/auth-popups/open-auth-popup-btn';
import { tels } from '@@/constants/company-info';

import HeaderBin from '../header-bin';
import HeaderLangs from '../header-langs';
import SearchBtn from '../header-nav-btns/search-btn';
import ProfileBtn from '../header-nav-btns/profile-btn';
import LikeBtn from '../header-nav-btns/like-btn';
import MobileMenu from '../../mobile-menu';

import styles from './header-menu.module.scss';

const token = false;

const HeaderMenu = () => {
	return (
		<div className={styles['menu']}>
			<div className={styles['menu-wrapper']}>
				<div className={`${styles['menu-col']} ${styles['menu-col-1']}`}>
					<a
						key={`${formatTel(tels[1])}`}
						href={`tel:${formatTel(tels[1])}`}
						className={styles['menu-tel']}
					>
						{tels[1]}
					</a>
					<p>24/7</p>
				</div>
				<div className={`${styles['menu-col']} ${styles['menu-col-2']}`}>
					<div className={styles['langs-desktop']}>
						<HeaderLangs />
					</div>

					<div className={styles['sub-menu']}>
						<SearchBtn />
						{token ? (
							<ProfileBtn />
						) : (
							<OpenAuthPopupBtn child={<ProfileBtn />} />
						)}
						<LikeBtn />

						<HeaderBin />

						<div className={styles['mobile-menu']}>
							<MobileMenu />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMenu;
