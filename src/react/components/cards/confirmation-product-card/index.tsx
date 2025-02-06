import Quantity from '../../ui/quantity';

import styles from './confirmation-product-card.module.scss';

interface Props {
	className?: string;
	img?: string;
	title?: string;
	pcs?: number;

	isMain?: boolean;
}

const ConfirmationProductCard = ({
	className,
	img,
	title,
	pcs,
	isMain,
}: Props) => {
	return (
		<article className={`${styles['product-inner']} ${className}`}>
			<img className={styles['product-img']} src={img} alt={'product'} />
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
			<div className={styles['product-details']}>
				<div className={styles['product-detail']}>
					<span className={styles['product-detail-title']}>Qty</span>
					<span className={styles['product-detail-num']}>1</span>
				</div>
				<div className={styles['product-detail']}>
					<span className={styles['product-detail-title']}>Sum</span>
					<span className={styles['product-detail-num']}>24,99 €</span>
				</div>
				<div className={styles['product-detail']}>
					<span className={styles['product-detail-title']}>Sum</span>
					<span className={styles['product-detail-num']}>24,99 €</span>
				</div>
			</div>
		</article>
	);
};

export default ConfirmationProductCard;
