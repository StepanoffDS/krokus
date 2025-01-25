import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import FormError from '../../ui/form-error';

import styles from './input.module.scss';

interface Props {
	className?: string;
	placeholder?: string;
	rows?: number;
	error: FieldError | undefined;
	resize?: 'auto' | 'none';
}

const Textarea = forwardRef(
	(
		{ className, placeholder, resize = 'auto', error, ...props }: Props,
		ref: React.ForwardedRef<HTMLTextAreaElement>,
	) => {
		return (
			<div className={`${styles['form-group']} ${className}`}>
				<textarea
					className={`${styles['form-input']} ${
						resize === 'none' && 'no-resize'
					}`}
					rows={props.rows}
					placeholder={placeholder}
					ref={ref}
					{...props}
				/>
				{error && <FormError error={error} />}
			</div>
		);
	},
);

export default Textarea;
