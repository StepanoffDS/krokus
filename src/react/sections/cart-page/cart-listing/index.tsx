import Button from '@@/react/components/ui/button';
import product from '@@/react/components/illustrations/product.png';
import { routes } from '@@/constants/routing';

import ProductSection from '../product-section';

import styles from './cart-listing.module.scss';

const CartListing = () => {
	return (
		<div className={styles['cart-listing']}>
			<section className={styles['listing']}>
				<ProductSection
					hasPostcard={true}
					hasBonus={true}
					postcardName='Love you, my dear! Wishing you all the best this day and happy valentine! '
					bonusName='Product name goes here'
					bonusQty={1}
					productImg={product}
					postcardImg={product}
					bonusImg={product}
				/>
				<ProductSection
					hasPostcard={false}
					hasBonus={true}
					bonusQty={1}
					productImg={product}
					bonusImg={product}
				/>
			</section>
			<section className={styles['checkout-btn']}>
				<Button href={routes.cartCheckout}>Proceed to checkout 89,99 €</Button>
			</section>
		</div>
	);
};

export default CartListing;
