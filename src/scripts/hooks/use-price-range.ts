import { useState } from "react";

interface Props {
	min: number;
	max: number;
	minGap?: number;
}

const usePriceRange = ({ min, max, minGap = 5 }: Props) => {
	const [sliderMinValue] = useState(min);
	const [sliderMaxValue] = useState(max);

	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);

	const [minInput, setMinInput] = useState(min);
	const [maxInput, setMaxInput] = useState(max);

	const handleMinInput = (e) => {
		const value =
			e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);

		// && value < maxVal - minGap
		if (value >= sliderMinValue && value < maxVal - minGap) {
			setMinInput(value);
			setMinVal(value);
		}
	};

	const handleMaxInput = (e) => {
		const value =
			e.target.value === "" ? sliderMaxValue : parseInt(e.target.value, 10);

		if (value <= sliderMaxValue && value > minVal + minGap) {
			setMaxInput(value);
			setMaxVal(value);
		}
	};

	const handleInputKeyDown = (e, type) => {
		if (e.key === "Enter") {
			const value = parseInt(e.target.value, 10);
			if (
				type === "min" &&
				value >= sliderMinValue &&
				value < maxVal - minGap
			) {
				setMinVal(value);
			} else if (
				type === "max" &&
				value <= sliderMaxValue &&
				value > minVal + minGap
			) {
				setMaxVal(value);
			}
		}
	};

	return {
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
	};
};

export default usePriceRange;
