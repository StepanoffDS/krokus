import { forwardRef, useId } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './radio.module.scss';

interface Props {
	className?: string;
	children: string | React.ReactNode;
	type?: 'normal' | 'big' | 'dark';
	error?: FieldError;
}

const Radio = forwardRef(
	(
		{ className, children, type = 'normal', error, ...props }: Props,
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
					type='checkbox'
					className={styles['form-input']}
					ref={ref}
					{...props}
				/>
				<svg>
					<use xlinkHref='#checkmark' />
				</svg>
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
				<label htmlFor={id} className={styles['form-label']}>
					{children}
				</label>
			</div>
		);
	},
);

export default Radio;
