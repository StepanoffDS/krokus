import { forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

import { EyeIcon, EyeOffIcon } from '../../icons/eye';
import { LabelInput } from '../input';

import styles from './password-input.module.scss';

interface Props {
	className?: string;
	error: FieldError;
	placeholder?: string;
}

const PasswordInput = forwardRef(
	(
		{ className, placeholder, error, ...props }: Props,
		ref: React.ForwardedRef<HTMLInputElement>,
	) => {
		const [type, setType] = useState<'password' | 'text'>('password');

		const handleVisibility = () => {
			if (type === 'password') {
				setType('text');
			} else {
				setType('password');
			}
		};

		return (
			<div className={`${styles['password']} ${className}`}>
				<LabelInput
					type={type}
					placeholder={placeholder}
					error={error}
					ref={ref}
					{...props}
				/>
				<button
					type='button'
					onClick={handleVisibility}
					className={styles['password-visibility']}
				>
					{type === 'password' ? <EyeIcon /> : <EyeOffIcon />}
				</button>
			</div>
		);
	},
);

export default PasswordInput;
