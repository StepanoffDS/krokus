import Button from '../../ui/button';

import styles from './main-listing.module.scss';

interface Props {
	className?: string;
	qty?: number;
	link: string;
	text?: string;
}

const BtnMore = ({ className, qty, link, text = 'Skatīt visus' }: Props) => {
	return (
		<Button
			href={link}
			className={`${styles['btn-more']} ${className}`}
			variant='outline'
		>
			{text}
			{qty && <span className={styles['btn-more-count']}>{qty}</span>}
		</Button>
	);
};

export default BtnMore;
