import CartIcon from '@@/react/components/icons/cart-icon';

import btnStyles from '../header-nav-btns/header-nav-btns.module.scss';

import styles from './header-bin.module.scss';

interface Props {
	className?: string;
}

const HeaderBin = ({ className }: Props) => {
	return (
		<div className={`${styles['bin']} ${className}`}>
			<button className={`${styles['bin-btn']} ${btnStyles['header-nav-btn']}`}>
				<CartIcon />
				<span className={styles['bin-count']}>2</span>
			</button>
			<p className={styles['bin-desc']}>Grozs</p>
			<p className={styles['bin-sum']}>24,99 €</p>
		</div>
	);
};

export default HeaderBin;
