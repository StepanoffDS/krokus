import styles from './footer.module.scss';

interface Props {
	className?: string;
	footerNav: { title: string; links: { name: string; link: string }[] };
}

const FooterMenu = ({ className, footerNav }: Props) => {
	const { title, links } = footerNav;

	return (
		<div className={`${styles['menu']} ${className}`}>
			<h3 className={styles['subtitle']}>{title}</h3>
			<nav className={styles['menu-list']}>
				{links.map(({ name, link }) => (
					<a key={link} href={link} className={styles['menu-link']}>
						{name}
					</a>
				))}
			</nav>
		</div>
	);
};

export default FooterMenu;
