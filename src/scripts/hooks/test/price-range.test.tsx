import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import usePriceRange from '../use-price-range';

const PriceRangeComponent = ({ min, max, minGap }) => {
	const {
		minVal,
		maxVal,
		minInput,
		maxInput,
		handleMinInput,
		handleMaxInput,
		handleInputKeyDown,
	} = usePriceRange({ min, max, minGap });

	return (
		<div>
			<input
				data-testid='min-input'
				value={minInput}
				onChange={handleMinInput}
				onKeyDown={(e) => handleInputKeyDown(e, 'min')}
			/>
			<input
				data-testid='max-input'
				value={maxInput}
				onChange={handleMaxInput}
				onKeyDown={(e) => handleInputKeyDown(e, 'max')}
			/>
			<div data-testid='min-val'>{minVal}</div>
			<div data-testid='max-val'>{maxVal}</div>
		</div>
	);
};

describe('usePriceRange hook', () => {
	afterEach(cleanup);

	it('корректно инициализирует состояние min и max', () => {
		const { getByTestId } = render(
			<PriceRangeComponent min={0} max={100} minGap={10} />,
		);

		const minInput = getByTestId('min-input') as HTMLInputElement;
		const maxInput = getByTestId('max-input') as HTMLInputElement;

		expect(minInput.value).toBe('0');
		expect(maxInput.value).toBe('100');
	});

	it('корректно обновляет состояние min', () => {
		const { getByTestId } = render(
			<PriceRangeComponent min={0} max={100} minGap={10} />,
		);
		const minInput = getByTestId('min-input') as HTMLInputElement;

		fireEvent.change(minInput, { target: { value: '20' } });
		expect(minInput.value).toBe('20');
	});

	it('min не должен быть больше max', () => {
		const { getByTestId } = render(
			<PriceRangeComponent min={0} max={100} minGap={10} />,
		);
		const minInput = getByTestId('min-input') as HTMLInputElement;

		fireEvent.change(minInput, { target: { value: '101' } });
		expect(minInput.value).toBe('0'); // Проверяем, что значение не изменилось
	});

	it('корректно обновляет состояние max', () => {
		const { getByTestId } = render(
			<PriceRangeComponent min={0} max={100} minGap={10} />,
		);
		const maxInput = getByTestId('max-input') as HTMLInputElement;

		fireEvent.change(maxInput, { target: { value: '80' } });
		expect(maxInput.value).toBe('80');
	});

	it('max не должен быть меньше min', () => {
		const { getByTestId } = render(
			<PriceRangeComponent min={0} max={100} minGap={10} />,
		);
		const maxInput = getByTestId('max-input') as HTMLInputElement;

		fireEvent.change(maxInput, { target: { value: '0' } });
		expect(maxInput.value).toBe('100'); // Проверяем, что значение не изменилось
	});

	it('корректно обновляет состояние min при нажатии Enter', () => {
		const { getByTestId } = render(
			<PriceRangeComponent min={0} max={100} minGap={10} />,
		);
		const minInput = getByTestId('min-input');

		fireEvent.change(minInput, { target: { value: '50' } });
		fireEvent.keyDown(minInput, { key: 'Enter', code: 'Enter' });
	});
});
