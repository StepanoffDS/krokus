import styles from './checkout-container.module.scss';

interface Props {
	className?: string;
	title: string;
	children: React.ReactNode;
}

const CheckoutContainer = ({ className, title, children }: Props) => {
	return (
		<section className={`${styles['checkout-container']} ${className}`}>
			<h2 className={styles['checkout-title']}>{title}</h2>
			<div>{children}</div>
		</section>
	);
};

export default CheckoutContainer;
