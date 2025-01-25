import { useLocation } from 'react-router';
import { NAVS } from '@@/constants/company-info';

import LogoIcon from '../../icons/logo-icon';
import MobileMenu from '../mobile-menu';

import HeaderMenu from './header-menu';
import styles from './header.module.scss';
import LikeBtn from './header-nav-btns/like-btn';
import HeaderBin from './header-bin';
import SearchBtn from './header-nav-btns/search-btn';

const Header = () => {
	const location = useLocation();

	const isAccentLink = (link: string) => link === location.pathname;

	return (
		<header className={styles['header']}>
			<HeaderMenu />
			<div className={styles['middle']}>
				<div className={styles['middle-btns']}>
					<LikeBtn className={styles['middle-btn']} />
					<HeaderBin className={styles['middle-btn']} />
				</div>
				<a href='/' className={styles['logo']}>
					<LogoIcon />
				</a>
				<div className={styles['middle-btns']}>
					<SearchBtn className={styles['middle-btn']} />
					<MobileMenu />
				</div>
			</div>
			<nav className={styles['nav']}>
				{NAVS[1].links.map(({ name, link }) => (
					<a
						key={link}
						href={link}
						className={`${styles['nav-link']} ${
							isAccentLink(link) ? styles['nav-link--accent'] : ''
						}`}
					>
						{name}
					</a>
				))}
			</nav>
		</header>
	);
};

export default Header;
