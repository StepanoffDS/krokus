import { forwardRef, useId } from 'react';

import styles from './select.module.scss';

interface IOption {
	label: string;
	value: string;
	disabled?: boolean;
}

interface Props {
	className?: string;
	options: IOption[];
	id?: string;
	color?: 'brown' | 'black';
}

const Select = forwardRef(
	(
		{ options, className, color = 'brown', ...props }: Props,
		ref: React.ForwardedRef<HTMLSelectElement>,
	) => {
		const id = useId();

		return (
			<div className={`${styles['select-wrapper']} ${className}`}>
				<select
					className={`${styles['select']} ${
						color === 'black' && styles['select--black']
					}`}
					value={options[0].value}
					ref={ref}
					id={id}
					{...props}
				>
					{options.map((option) => (
						<option
							key={option.value}
							value={option.value}
							className={styles['option']}
							disabled={option.disabled}
						>
							{option.label}
						</option>
					))}
				</select>
			</div>
		);
	},
);

export default Select;
