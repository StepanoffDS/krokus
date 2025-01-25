import { useState } from 'react';

import TagClose from '../../icons/tag-close';

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
}

const SelectTags = ({ options, className, id }: Props) => {
	const [selectedItems, setSelectedItems] = useState<IOption[]>([]);

	const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;

		if (selectedItems.find((item) => item.value === selectedValue)) return;

		setSelectedItems((prev) => [
			...prev,
			options.find((item) => item.value === selectedValue)!,
		]);
	};

	const onClose = (value: string) => {
		setSelectedItems((prev) => prev.filter((item) => item.value !== value));
	};

	return (
		<div className={`${styles['select-wrapper']} ${className}`}>
			<select
				name={id}
				id={id}
				className={`${styles['select']} `}
				onChange={(e) => handleSelect(e)}
			>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						className={styles['option']}
						defaultValue={options[0].value}
						disabled={option.disabled}
					>
						{option.label}
					</option>
				))}
			</select>
			{selectedItems.length > 0 && (
				<div className={styles['tags']}>
					{selectedItems.map((item) => (
						<button
							key={item.value}
							className={styles['tag']}
							onClick={() => onClose(item.value)}
						>
							{item.label} <TagClose />
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectTags;
