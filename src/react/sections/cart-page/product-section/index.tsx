import { useState } from 'react';
import CartProductCard from '@@/react/components/cards/cart-product-card';
import CartProductContainer from '@@/react/components/containers/cart-product-container';

import styles from './product-section.module.scss';

interface Props {
	className?: string;

	hasPostcard?: boolean;
	hasBonus?: boolean;

	postcardName?: string;
	bonusName?: string;

	bonusQty?: number;

	productImg?: string;
	postcardImg?: string;
	bonusImg?: string;
}

const ProductSection = ({
	className,
	hasPostcard,
	hasBonus,
	postcardName,
	bonusName,
	bonusQty,
	productImg,
	postcardImg,
	bonusImg,
}: Props) => {
	const [qty, setQty] = useState(1);

	return (
		<CartProductContainer className={className}>
			<CartProductCard
				title='Product name goes here'
				img={productImg}
				pcs={50}
				qty={qty}
				setQty={setQty}
				isMain={true}
				hasPostcard={hasPostcard}
			/>
			{(hasPostcard || hasBonus) && (
				<div className={styles['product-extra']}>
					{hasPostcard && (
						<CartProductCard
							img={postcardImg}
							title={postcardName}
							isPostcard={true}
						/>
					)}
					{hasBonus && (
						<CartProductCard
							img={bonusImg}
							title={bonusName}
							pcs={bonusQty}
							isBonus={true}
						/>
					)}
				</div>
			)}
		</CartProductContainer>
	);
};

export default ProductSection;
