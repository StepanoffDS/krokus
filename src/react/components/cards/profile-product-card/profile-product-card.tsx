import { ProductCard } from '@@/@types';

import styles from './profile-product-card.module.scss';

interface Props extends ProductCard {
	hasButton?: boolean;
	price?: string;
	qty?: string;
	children?: React.ReactNode | React.ReactNode[];
}

const ProfileProductCard = ({
	className,
	img,
	date,
	hasButton,
	price,
	qty,
	desc,
	productId,
	children,
}: Props) => {
	return (
		<article
			className={`${styles['listing-item']} ${
				hasButton && styles['has-button']
			} ${className}`}
		>
			<img src={img} alt={desc} className={styles['product-img']} />
			<div className={styles['product-info']}>
				<p className={styles['product-code']}>#{productId}</p>
				<h3 className={styles['product-name']}>{desc}</h3>
				{!hasButton && (
					<>
						<p className={styles['product-price']}>{price} €</p>
						<p className={styles['product-qty']}>Qty: {qty}</p>
					</>
				)}
				<p className={styles['product-date']}>{date}</p>
			</div>
			{children}
		</article>
	);
};

export default ProfileProductCard;
