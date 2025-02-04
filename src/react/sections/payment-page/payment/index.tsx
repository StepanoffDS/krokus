import { routes } from '@@/constants/routing';
import CreditIcon from '@@/react/components/icons/payment/credit-icon';
import Button from '@@/react/components/ui/button';
import BanklinksIcon from '@@/react/components/icons/payment/banklinks-icon';
import CashIcon from '@@/react/components/icons/payment/cash-icon';

import styles from './payment.module.scss';

const Payment = () => {
	return (
		<div>
			<div className={styles['payment']}>
				<article className={styles['item']}>
					<div className={styles['icon']}>
						<CreditIcon />
					</div>
					<div className={styles['info']}>
						<h3 className={styles['title']}>Credit and debit card</h3>
						<p className={styles['desc']}>
							Use this method to pay with the cards.
						</p>
						<p className={styles['text']}>
							If you can't pay using this method, try additional methods of
							payment listed below. Sometimes the payment does not go through
							one bank, but succeeds through another.
						</p>
						<Button href={routes.cartPaymentStatus}>Pay 89,99 €</Button>
					</div>
				</article>
				<article className={styles['item']}>
					<div className={styles['icon']}>
						<BanklinksIcon />
					</div>
					<div className={styles['info']}>
						<h3 className={styles['title']}>Banklinks</h3>
						<p className={styles['desc']}>Payment using internet-banking</p>
						<Button href={routes.cartPaymentStatus}>Pay 89,99 €</Button>
					</div>
				</article>
				<article className={styles['item']}>
					<div className={styles['icon']}>
						<CashIcon />
					</div>
					<div className={styles['info']}>
						<h3 className={styles['title']}>Cash on delivery</h3>
						<p className={styles['text']}>
							You have indicated that you'd pick up the order yourself. You can
							pay for the order when you pick it up.
						</p>
						<Button href={routes.cartPaymentStatus}>Select</Button>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Payment;
