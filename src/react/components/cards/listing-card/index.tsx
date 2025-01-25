import product from '@@/react/components/illustrations/product.png';
import { routes } from '@@/constants/routing';

import DiscountLabel from '../../ui/discount-label';

import styles from './listing-card.module.scss';

interface Props {
	className?: string;
	id: string;
}

const ListingCard = ({ className, id }: Props) => {
	return (
		<article className={`${styles['item']} ${className}`}>
			<DiscountLabel className={styles['item-discount']} />
			<a href={routes.product(id)} className={styles['item-img']}>
				<img src={product} alt='product' />
			</a>
			<h4 className={styles['item-title']}>
				<a href={routes.product(id)}>Ziedu nosaukums</a>
			</h4>
			<div className={styles['item-prices']}>
				<span className={styles['price-now']}>no 24,99 €</span>
				<span className={styles['price-old']}>29,99 €</span>
			</div>
		</article>
	);
};

export default ListingCard;
