import { useRef, useState } from 'react';
import CartIcon from '@@/react/components/icons/cart-icon';
import useClickOutside from '@@/scripts/hooks/use-click-outside';
import { routes } from '@@/constants/routing';

import btnStyles from '../header-nav-btns/header-nav-btns.module.scss';
import Button from '../../button';
import CartPopupItem from '../../cart-popup-item';

import styles from './header-cart.module.scss';

interface Props {
	className?: string;
}

const HeaderCart = ({ className }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleCart = () => setIsOpen(!isOpen);

	useClickOutside({
		ref: menuRef,
		handler: () => {
			if (isOpen) {
				toggleCart();
			}
		},
	});

	return (
		<div className={`${styles['bin']} ${className}`} ref={menuRef}>
			<button className={styles['bin-btn-wrapper']} onClick={toggleCart}>
				<div
					className={`${styles['bin-btn']} ${btnStyles['header-nav-btn']} ${
						isOpen && styles['bin-btn--active']
					}`}
				>
					<CartIcon />
					<span className={styles['bin-count']}>2</span>
				</div>
				<p className={styles['bin-desc']}>Grozs</p>
				<p className={styles['bin-sum']}>24,99 €</p>
			</button>

			{isOpen && (
				<article className={styles['cart']}>
					<CartPopupItem />
					<CartPopupItem />
					<div className={styles['cart-total']}>
						Total: <span>33,98 €</span>
					</div>
					<Button
						href={routes.cart}
						className={styles['cart-btn']}
						onClick={toggleCart}
					>
						View cart
					</Button>
				</article>
			)}
		</div>
	);
};

export default HeaderCart;
