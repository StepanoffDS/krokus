import usePriceRange from '@@/scripts/hooks/use-price-range';

import MultiRange from '../../inputs/multi-range';

import styles from './price-range.module.scss';

interface Props {
	className?: string;
	min: number;
	max: number;
	minGap?: number;
}

const PriceRange = ({ min, max, minGap = 5, className }: Props) => {
	const {
		sliderMinValue,
		sliderMaxValue,
		minVal,
		maxVal,
		minInput,
		maxInput,
		handleMinInput,
		handleMaxInput,
		handleInputKeyDown,
		setMinInput,
		setMaxInput,
		setMinVal,
		setMaxVal,
	} = usePriceRange({ min, max, minGap });

	return (
		<div className={`${styles['price-slider']} ${className}`}>
			<div className={styles['input-box']}>
				<div className={`${styles['box']} ${styles['min-box']}`}>
					<input
						type='number'
						value={minInput}
						onChange={handleMinInput}
						onKeyDown={(e) => handleInputKeyDown(e, 'min')}
						className={`${styles['min-input']} ${styles['input']}`}
						min={sliderMinValue}
						max={maxVal - minGap}
					/>
				</div>
				<div className={`${styles['box']} ${styles['max-box']}`}>
					<input
						type='number'
						value={maxInput}
						onChange={handleMaxInput}
						onKeyDown={(e) => handleInputKeyDown(e, 'max')}
						className={`${styles['max-input']} ${styles['input']}`}
						min={minVal + minGap}
						max={sliderMaxValue}
					/>
				</div>
			</div>
			<MultiRange
				setMinInput={setMinInput}
				setMaxInput={setMaxInput}
				sliderMinValue={sliderMinValue}
				sliderMaxValue={sliderMaxValue}
				minVal={minVal}
				maxVal={maxVal}
				setMinVal={setMinVal}
				setMaxVal={setMaxVal}
			/>
		</div>
	);
};

export default PriceRange;
