import styles from "./select.module.scss";

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

const Select = ({ options, className, id }: Props) => {
	return (
		<div className={`${styles["select-wrapper"]} ${className}`}>
			<select name={id} id={id} className={`${styles["select"]} `}>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						className={styles["option"]}
						defaultValue={options[0].value}
						disabled={option.disabled}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
