import { useLocation } from 'react-router';
import Benefits from '@@/react/sections/home-page/benefits';
import { routes } from '@@/constants/routing';

import BreadcrumbArrow from '../../icons/breadcrumb-arrow';

import styles from './cart-container.module.scss';

interface Props {
	className?: string;
	children?: React.ReactNode;
	title: string;
}

const CartContainer = ({ className, children, title }: Props) => {
	const location = useLocation();

	return (
		<div className={className}>
			<div className='container'>
				<header className={styles['header']}>
					<h2 className={`title-2 ${styles['title']}`}>{title}</h2>
					<div className={styles['breadcrumbs']}>
						<p
							className={`${styles['breadcrumbs-item']} ${styles['breadcrumbs-item--active']}`}
						>
							Cart
						</p>
						<BreadcrumbArrow />
						<p
							className={`${styles['breadcrumbs-item']} ${
								(location.pathname === routes.cartCheckout ||
									location.pathname === routes.cartConfirmation ||
									location.pathname === routes.cartPayment) &&
								styles['breadcrumbs-item--active']
							}`}
						>
							Checkout
						</p>
						<BreadcrumbArrow />
						<p
							className={`${styles['breadcrumbs-item']} ${
								location.pathname === routes.cartPayment &&
								styles['breadcrumbs-item--active']
							}`}
						>
							Payment
						</p>
					</div>
				</header>
				<main className={styles['content']}>{children}</main>
			</div>
			<Benefits />
		</div>
	);
};

export default CartContainer;
