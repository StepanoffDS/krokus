import Button from '@@/react/components/ui/button';
import BtnMore from '@@/react/components/containers/main-listing/btn-more';
import { togglePopup } from '@@/scripts/helpers/toggle-popup';
import product from '@@/react/components/illustrations/product.png';
import { routes } from '@@/constants/routing';
import CartPopupItem from '@@/react/components/ui/cart-popup-item';

import PopupContainer from '../popup-container';

import styles from './product-card-popup.module.scss';

interface Props {
	className?: string;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const ProductCartPopup = ({ className, isOpen, setIsOpen }: Props) => {
	const handleClick = () => {
		togglePopup({ setIsOpen, isOpen });
	};

	return (
		<div className={className}>
			<Button className={styles['btn-add']} onClick={handleClick}>
				Pievienot grozam
			</Button>
			<PopupContainer
				className={styles['popup-container']}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<div className={styles['popup-main']}>
					<section className={styles['popup-section']}>
						<h3 className={styles['popup-title']}>
							Product is successfully added to your cart
						</h3>
						<div className={styles['product']}>
							<CartPopupItem />
							<Button
								className={styles['product-btn']}
								href={routes.cart}
								onClick={handleClick}
							>
								View cart
							</Button>
						</div>
					</section>
					<section className={`${styles['popup-section']}`}>
						<header className={styles['upsale-header']}>
							<h3 className={styles['popup-title']}>Upsale products</h3>
							<BtnMore
								text='View all'
								link='#!'
								qty={49}
								className={styles['btn-more']}
							/>
						</header>
						<div className={styles['upsale-products']}>
							{[...Array(4)].map((_, index) => (
								<a href='#!' key={index} className={styles['upsale-product']}>
									<img
										src={product}
										alt='product'
										className={styles['upsale-img']}
									/>
									<h6 className={styles['upsale-name']}>Product name</h6>
									<span className={styles['upsale-price']}>2,99 €</span>
								</a>
							))}
						</div>
					</section>
				</div>
			</PopupContainer>
		</div>
	);
};

export default ProductCartPopup;
