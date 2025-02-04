import { UseStateType } from '@@/@types';

import Minus from '../../icons/minus';
import Plus from '../../icons/plus';

import styles from './cart-qty-btn.module.scss';

interface Props {
	className?: string;
	qty: number;
	setQty: UseStateType<number>;
}

const CartQtyBtn = ({ className, qty, setQty }: Props) => {
	const minusQty = () => {
		if (qty > 0) {
			setQty((prev) => prev - 1);
		} else {
			setQty(0);
		}
	};

	const plusQty = () => {
		setQty((prev) => prev + 1);
	};

	return (
		<div className={`${styles['cart-counter']} ${className}`}>
			<button
				className={`${styles['cart-btn']} ${styles['cart-btn--add']}`}
				onClick={minusQty}
				disabled={qty === 0}
			>
				<Minus />
			</button>
			<input
				type='number'
				className={styles['cart-qty']}
				placeholder='0'
				value={qty}
			/>
			<button
				className={`${styles['cart-btn']} ${styles['cart-btn--minus']}`}
				onClick={plusQty}
			>
				<Plus />
			</button>
		</div>
	);
};

export default CartQtyBtn;
