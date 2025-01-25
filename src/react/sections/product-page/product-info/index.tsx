import ProductCart from '../product-cart';
import ProductDetails from '../product-details';

import styles from './product-info.module.scss';

interface Props {
	className?: string;
}

const ProductInfo = ({ className }: Props) => {
	return (
		<div className={`${styles['product-info']} ${className}`}>
			<h1 className={`title-2 ${styles['title']}`}>Nosaukums</h1>
			<p className={`${styles['desc']} desc`}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<ProductCart className={styles['cart']} />
			<ProductDetails />
		</div>
	);
};

export default ProductInfo;
