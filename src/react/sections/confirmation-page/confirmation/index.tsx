import product from '@@/react/components/illustrations/product.png';
import ConfirmationProductCard from '@@/react/components/cards/confirmation-product-card';
import CartProductContainer from '@@/react/components/containers/cart-product-container';

import styles from './confirmation.module.scss';
import Radio from '@@/react/components/inputs/radio';
import Button from '@@/react/components/ui/button';
import { routes } from '@@/constants/routing';

const Confirmation = () => {
	return (
		<div className={styles['confirmation']}>
			<CartProductContainer>
				<ConfirmationProductCard
					title='Product name goes here'
					img={product}
					isMain={true}
					pcs={50}
				/>
				<ConfirmationProductCard
					title='Love you, my dear! Wishing you all the best this day and happy valentine!'
					img={product}
				/>
				<ConfirmationProductCard title='Aquabox' img={product} pcs={1} />
			</CartProductContainer>
			<CartProductContainer>
				<ConfirmationProductCard
					title='Product name goes here'
					img={product}
					isMain={true}
					pcs={50}
				/>
				<ConfirmationProductCard title='Aquabox' img={product} pcs={1} />
			</CartProductContainer>
			<div>
				<Radio type='dark'>
					<span className={styles['radio-text']}>
						I have read and agree with the <a href='#!'>delivery rules</a> and{' '}
						<a href='#!'>quality assurance</a>
					</span>
				</Radio>
			</div>
			<Button href={routes.cartPayment} className={styles['btn']}>
				Proceed to checkout 89,99 €
			</Button>
		</div>
	);
};

export default Confirmation;
