import { Controller, FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '@@/react/popups/auth-popups/auth-popups.module.scss';
import { regions } from '@@/constants/company-info';
import { registerSchema, RegisterSchemaType } from '@@/constants/forms';

import { Input, LabelInput } from '../../inputs/input';
import Button from '../../ui/button';
import PasswordInput from '../../inputs/password';
import Select from '../../inputs/select';
import PhoneInputContainer from '../../inputs/phone';

interface Props {
	className?: string;
}

const RegisterForm = ({ className }: Props) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<RegisterSchemaType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			region: regions[0].value,
		},
	});

	const registerSubmit = async (data: RegisterSchemaType) => {
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
				onSubmit={handleSubmit(registerSubmit)}
			>
				<h2 className={styles['popup-title']}>Register</h2>
				<div className={styles['popup-input']}>
					<Controller
						control={control}
						name='name'
						render={({ field }) => (
							<Input
								className={styles['input']}
								placeholder='Name, Surname'
								type='text'
								error={errors.name as FieldError}
								{...field}
							/>
						)}
					/>
				</div>
				<div className={styles['popup-input']}>
					<Controller
						control={control}
						name='email'
						render={({ field }) => (
							<Input
								placeholder='E-pasts'
								className={styles['input']}
								error={errors.email as FieldError}
								{...field}
							/>
						)}
					/>
				</div>
				<div className={styles['popup-input']}>
					<PhoneInputContainer>
						<Controller
							control={control}
							name='region'
							render={({ field }) => (
								<Select options={regions} color='black' {...field} />
							)}
						/>

						<Controller
							control={control}
							name='phone'
							render={({ field }) => (
								<LabelInput
									type='number'
									placeholder='Phone number'
									error={errors.phone as FieldError}
									{...field}
								/>
							)}
						/>
					</PhoneInputContainer>
				</div>
				<div className={styles['popup-input']}>
					<Controller
						control={control}
						name='password'
						render={({ field }) => (
							<PasswordInput
								placeholder='Password'
								error={errors.password as FieldError}
								{...field}
							/>
						)}
					/>
				</div>
				<div className={styles['popup-input']}>
					<Controller
						control={control}
						name='confirmPassword'
						render={({ field }) => (
							<PasswordInput
								placeholder='Repeat password'
								error={errors.confirmPassword as FieldError}
								{...field}
							/>
						)}
					/>
				</div>
				<Button type='submit' className={styles['popup-btn']}>
					Register
				</Button>
			</form>
		</div>
	);
};

export default RegisterForm;
