import Button from '@@/react/components/ui/button';
import { routes } from '@@/constants/routing';

import styles from './payment-status.module.scss';

interface Props {
	className?: string;
}

const PaymentStatus = ({ className }: Props) => {
	return (
		<>
			{true && (
				<div className='container'>
					<div className={className}>
						<div className={styles['inner']}>
							<h1 className='title-2'>Success</h1>
							<p className='desc'>Thank you! your order is successfully set.</p>
							<p className='desc'>
								Order number: <span className={styles['accent']}>08798740</span>
							</p>
							<Button href={routes.cart}>View my orders</Button>
						</div>
					</div>
				</div>
			)}
			{false && (
				<div className='container'>
					<div className={className}>
						<div className={styles['inner']}>
							<h1 className='title-2'>Something went wrong</h1>
							<p className='desc'>Please try again later</p>
							<Button href={routes.home}>Homepage</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PaymentStatus;
