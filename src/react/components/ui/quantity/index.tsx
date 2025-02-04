import styles from './quantity.module.scss';

interface Props {
	className?: string;
	qty: number;
}

const Quantity = ({ className, qty = 0 }: Props) => {
	return <span className={`${styles['qty']} ${className}`}>{qty} pcs</span>;
};

export default Quantity;
