import styles from './cart-product-container.module.scss';

interface Props {
	className?: string;
	children?: React.ReactNode;
}

const CartProductContainer = ({ className, children }: Props) => {
	return <div className={`${styles['product']} ${className}`}>{children}</div>;
};

export default CartProductContainer;
