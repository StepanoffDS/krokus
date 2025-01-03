import { useCallback, useEffect, useRef } from "react";
import styles from "./multi-range.module.scss";

interface Props {
	minGap?: number;
	className?: string;
	setMinInput: (value: number) => void;
	setMaxInput: (value: number) => void;
	sliderMinValue: number;
	sliderMaxValue: number;
	minVal: number;
	maxVal: number;
	setMinVal: (value: number) => void;
	setMaxVal: (value: number) => void;
}

const MultiRange = ({
	className,
	minGap = 5,
	setMinInput,
	setMaxInput,
	sliderMinValue,
	sliderMaxValue,
	minVal,
	maxVal,
	setMinVal,
	setMaxVal,
}: Props) => {
	const range = useRef<HTMLDivElement>(null);

	const setSliderTrack = useCallback(() => {
		if (range.current) {
			const minPercent =
				((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
			const maxPercent =
				((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

			range.current.style.left = `${minPercent}%`;
			range.current.style.right = `${100 - maxPercent}%`;
		}
	}, [maxVal, minVal, sliderMaxValue, sliderMinValue]);

	useEffect(() => {
		setSliderTrack();
	}, [minVal, maxVal, setSliderTrack]);

	const slideMin = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value >= sliderMinValue && maxVal - value >= minGap) {
			setMinVal(value);
			setMinInput(value);
		}
	};

	const slideMax = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value <= sliderMaxValue && value - minVal >= minGap) {
			setMaxVal(value);
			setMaxInput(value);
		}
	};

	return (
		<div className={`${styles["range-slider"]} ${className}`}>
			<div className={styles["slider-track"]} ref={range}></div>
			<input
				type="range"
				min={sliderMinValue}
				max={sliderMaxValue}
				value={minVal}
				onChange={slideMin}
				className={styles["min-val"]}
			/>
			<input
				type="range"
				min={sliderMinValue}
				max={sliderMaxValue}
				value={maxVal}
				onChange={slideMax}
				className={styles["max-val"]}
			/>
		</div>
	);
};

export default MultiRange;
