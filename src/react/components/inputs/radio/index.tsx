import { forwardRef, useId } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './radio.module.scss';

interface Props {
	className?: string;
	children: string | React.ReactNode;
	type?: 'normal' | 'big' | 'dark';
	typeInput?: 'checkbox' | 'radio';
	error?: FieldError;

	value?: string | number | readonly string[];
	name?: string;
	checked?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const Radio = forwardRef(
	(
		{
			className,
			children,
			type = 'normal',
			error,
			typeInput = 'checkbox',
			...props
		}: Props,
		ref: React.ForwardedRef<HTMLInputElement>,
	) => {
		const id = useId();

		return (
			<div
				className={`${styles['form-group']} ${className} ${styles[type]} ${
					error && styles['form-group--error']
				}`}
			>
				<input
					id={id}
					type={typeInput}
					className={styles['form-input']}
					ref={ref}
					{...props}
				/>
				<svg>
					<use xlinkHref='#checkmark' />
				</svg>
				{(type === 'normal' || type === 'big') && (
					<svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
						<symbol id='checkmark' viewBox='0 0 24 24'>
							<path
								stroke='currentColor'
								strokeWidth={4}
								strokeLinecap='round'
								strokeMiterlimit='10'
								fill='none'
								d='M22.9 3.7l-15.2 16.6-6.6-7.1'
							></path>
						</symbol>
					</svg>
				)}
				{type === 'dark' && (
					<svg
						width='29'
						height='29'
						viewBox='0 0 29 29'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<symbol id='checkmark' viewBox='0 0 29 29'>
							<path
								d='M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H24C26.4853 0.5 28.5 2.51472 28.5 5V24C28.5 26.4853 26.4853 28.5 24 28.5H5C2.51472 28.5 0.5 26.4853 0.5 24V5Z'
								fill='#251F1F'
							/>
							<path
								d='M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H24C26.4853 0.5 28.5 2.51472 28.5 5V24C28.5 26.4853 26.4853 28.5 24 28.5H5C2.51472 28.5 0.5 26.4853 0.5 24V5Z'
								stroke='#251F1F'
							/>
							<path
								d='M20 10.9219L12.5422 18.4219L10 15.8653'
								stroke='#DFDFDF'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</symbol>
					</svg>
				)}
				<label htmlFor={id} className={styles['form-label']}>
					{children}
				</label>
			</div>
		);
	},
);

export default Radio;
