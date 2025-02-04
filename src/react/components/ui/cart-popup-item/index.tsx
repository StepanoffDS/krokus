import product from '@@/react/components/illustrations/product.png';

import Quantity from '../quantity';

import styles from './cart-popup-item.module.scss';

interface Props {
	className?: string;
	price?: number;
}

const CartPopupItem = ({ className, price }: Props) => {
	return (
		<div className={`${styles['product-section']} ${className}`}>
			<img src={product} alt='product' className={styles['product-img']} />
			<div className={styles['product-info']}>
				<h6 className={styles['product-name']}>Product Name</h6>
				<div className={styles['product-details']}>
					<Quantity qty={50} />
					{price && <span className={styles['product-price']}>24,99 €</span>}
				</div>
			</div>
		</div>
	);
};

export default CartPopupItem;
