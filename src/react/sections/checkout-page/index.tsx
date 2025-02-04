import CheckoutForm from '@@/react/components/forms/checkout-form';

import styles from './checkout.module.scss';

interface Props {
	className?: string;
}

const Checkout = ({ className }: Props) => {
	return (
		<div className={`${styles['checkout']} ${className}`}>
			<p className={styles['text']}>
				If you have any difficulties, please call us at:{' '}
				<a href='#!'>+371 259 073 00</a> and we will help you out and assist in
				placing your order
			</p>
			<CheckoutForm />
		</div>
	);
};

export default Checkout;
