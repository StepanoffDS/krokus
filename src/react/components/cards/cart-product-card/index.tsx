import { useState } from 'react';
import { UseStateType } from '@@/@types';
import AddPostcardPopup from '@@/react/popups/add-postcard-popup';

import CartQtyBtn from '../../inputs/cart-qty-btn';
import Quantity from '../../ui/quantity';
import Delete from '../../icons/delete';
import Edit from '../../icons/edit';

import styles from './cart-product-card.module.scss';

interface Props {
	className?: string;
	img?: string;
	title?: string;
	qty?: number;
	setQty?: UseStateType<number>;
	pcs?: number;

	isMain?: boolean;
	isBonus?: boolean;
	isPostcard?: boolean;

	hasPostcard?: boolean;
}

const CartProductCard = ({
	className,
	img,
	title,
	qty,
	setQty,
	pcs,
	isMain,
	isBonus,
	isPostcard,
	hasPostcard = true,
}: Props) => {
	const [openPostcard, setOpenPostcard] = useState(false);
	return (
		<article className={`${styles['product-inner']} ${className}`}>
			<img className={styles['product-img']} src={img} alt={'product'} />
			<div
				className={`${styles['product-info']} ${
					!isMain && styles['product-info--extra']
				}`}
			>
				<div className={styles['product-info-title']}>
					<h6
						className={`${styles['product-name']} ${
							isMain && styles['product-name--main']
						}`}
					>
						{title}
					</h6>
					{pcs && <Quantity qty={pcs} />}
				</div>
				{isMain && <CartQtyBtn qty={qty ?? 0} setQty={setQty!} />}
				<div className={styles['product-detail']}>
					<span className={styles['product-detail-title']}>Price</span>
					<span className={styles['product-detail-num']}>24,99 €</span>
				</div>
				<div className={styles['product-detail']}>
					<span className={styles['product-detail-title']}>Sum</span>
					<span className={styles['product-detail-num']}>24,99 €</span>
				</div>
			</div>
			<div className={styles['product-actions']}>
				{!hasPostcard && (
					<AddPostcardPopup isOpen={openPostcard} setIsOpen={setOpenPostcard} />
				)}
				{(isPostcard || isBonus) && (
					<button className={styles['product-deleted']}>
						<Delete />
					</button>
				)}
				{isPostcard && (
					<AddPostcardPopup
						isOpen={openPostcard}
						setIsOpen={setOpenPostcard}
						isEdit={true}
						btnClasses={styles['product-edited']}
					/>
				)}
			</div>
		</article>
	);
};

export default CartProductCard;
