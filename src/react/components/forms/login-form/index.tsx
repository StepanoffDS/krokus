import { Controller, FieldError, useForm } from 'react-hook-form';
import styles from '@@/react/popups/auth-popups/auth-popups.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '@@/constants/forms';

import { Input } from '../../inputs/input';
import Button from '../../ui/button';

interface Props {
	className?: string;
}

const LoginForm = ({ className }: Props) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const loginSubmit = async (data: LoginSchemaType) => {
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={className}>
			<form
				className={`${styles['popup-form']} ${styles['popup-form--opened']}`}
				onSubmit={handleSubmit(loginSubmit)}
			>
				<h2 className={styles['popup-title']}>Login</h2>
				<div className={styles['popup-input']}>
					<Controller
						control={control}
						name='email'
						rules={{ required: true }}
						render={({ field }) => (
							<Input
								{...field}
								error={errors.email as FieldError}
								placeholder='E-pasts'
							/>
						)}
					/>
				</div>
				<div className={styles['popup-input']}>
					<Controller
						control={control}
						name='password'
						render={({ field }) => (
							<Input
								{...field}
								error={errors.password as FieldError}
								placeholder='Parole'
								type='password'
							/>
						)}
					/>
				</div>
				<Button type='submit' className={styles['popup-btn']}>
					Login
				</Button>

				<a href='#!' className={styles['popup-link']}>
					Aizmirsu paroli
				</a>
			</form>
		</div>
	);
};

export default LoginForm;
