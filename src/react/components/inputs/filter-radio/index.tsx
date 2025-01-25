import Radio from '../radio';

import styles from './filter-radio.module.scss';

interface Props {
	className?: string;
	text: string;
	count: number;
}

const FilterRadio = ({ className, text, count }: Props) => {
	return (
		<Radio className={className} type='big'>
			<span className={styles['wrapper']}>
				<span className={styles['text']}>{text}</span>
				<span className={styles['count']}>{count}</span>
			</span>
		</Radio>
	);
};

export default FilterRadio;
