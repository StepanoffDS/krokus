import { forwardRef, useId } from 'react';
import { FieldError } from 'react-hook-form';

import FormError from '../../ui/form-error';

import styles from './input.module.scss';

interface Props {
	className?: string;
	placeholder?: string;
	type?: 'text' | 'password' | 'number';
	error: FieldError;
}

interface LabelInputProps extends Props {
	label?: string;
}

export const LabelInput = forwardRef(
	(
		{
			type = 'text',
			placeholder,
			className,
			label,
			error,
			...props
		}: LabelInputProps,
		ref: React.ForwardedRef<HTMLInputElement>,
	) => {
		const id = useId();

		return (
			<div className={`${styles['form-group']} ${className}`}>
				<label htmlFor={id} className={styles['form-label']}>
					{label}
				</label>
				<input
					id={id}
					className={styles['form-input']}
					type={type}
					placeholder={placeholder}
					ref={ref}
					{...props}
				/>
				{error && <FormError error={error} />}
			</div>
		);
	},
);

export const Input = forwardRef(
	(
		{ className, placeholder, type = 'text', error, ...props }: Props,
		ref: React.ForwardedRef<HTMLInputElement>,
	) => {
		return (
			<div className={`${styles['form-group']} ${className}`}>
				<input
					className={styles['form-input']}
					type={type}
					placeholder={placeholder}
					ref={ref}
					{...props}
				/>
				{error && <FormError error={error} />}
			</div>
		);
	},
);
