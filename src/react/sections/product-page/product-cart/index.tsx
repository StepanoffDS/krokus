import { useState } from 'react';
import Button from '@@/react/components/ui/button';
import LikeIcon from '@@/react/components/icons/like-icon';
import ProductCartPopup from '@@/react/popups/product-card-popup';
import CartQtyBtn from '@@/react/components/inputs/cart-qty-btn';

import styles from './product-cart.module.scss';

interface Props {
	className?: string;
}

const ProductCart = ({ className }: Props) => {
	const [qty, setQty] = useState(0);
	const [isFav, setIsFav] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const toggleFav = () => setIsFav((prev) => !prev);

	return (
		<section className={`${styles['cart']} ${className}`}>
			<div className={styles['cart-info']}>
				<CartQtyBtn qty={qty} setQty={setQty} />
				<div className={styles['prices']}>
					<span className={styles['price-now']}>24,99 €</span>
					<span className={styles['price-old']}>29,99 €</span>
				</div>
			</div>
			<div className={styles['cart-actions']}>
				<ProductCartPopup isOpen={isOpen} setIsOpen={setIsOpen} />
				<Button
					className={`${styles['btn-like']}`}
					variant={isFav ? 'primary' : 'outline'}
					onClick={toggleFav}
				>
					<LikeIcon fill={isFav ? 'currentColor' : 'none'} />
				</Button>
			</div>
		</section>
	);
};

export default ProductCart;
