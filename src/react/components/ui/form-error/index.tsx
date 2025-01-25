import { FieldError } from 'react-hook-form';

import styles from './form-error.module.scss';

interface Props {
	className?: string;
	error: FieldError | undefined;
}

const FormError = ({ className, error }: Props) => {
	return (
		<span className={`${styles['form-error']} ${className}`}>
			{error?.message}
		</span>
	);
};

export default FormError;
