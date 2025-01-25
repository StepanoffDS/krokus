import { Controller, FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileInfoSchema, ProfileInfoSchemaType } from '@@/constants/forms';
import { regions } from '@@/constants/company-info';

import PasswordInput from '../../inputs/password';
import Button from '../../ui/button';
import { LabelInput } from '../../inputs/input';
import PhoneInputContainer from '../../inputs/phone';
import Select from '../../inputs/select';

import styles from './profile-info-form.module.scss';

interface Props {
	className?: string;
}

const ProfileInfoForm = ({ className }: Props) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<ProfileInfoSchemaType>({
		resolver: zodResolver(profileInfoSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			region: regions[0].value,
			oldPassword: '',
			newPassword: '',
			confirmNewPassword: '',
		},
	});

	const profileInfoSubmit = async (data: ProfileInfoSchemaType) => {
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			action=''
			className={`${styles['profile-form']} ${className}`}
			onSubmit={handleSubmit(profileInfoSubmit)}
		>
			<div className={styles['form-sections']}>
				<section className={styles['form-section']}>
					<p className={`${styles['desc']} profile-desc`}>
						You can change your personal data here
					</p>
					<Controller
						name='name'
						control={control}
						render={({ field }) => (
							<LabelInput
								type='text'
								placeholder='John Doe'
								label='Name, Surname'
								error={errors.name as FieldError}
								{...field}
							/>
						)}
					/>

					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<LabelInput
								type='text'
								placeholder='john@doe.com'
								label='E-mail'
								error={errors.email as FieldError}
								{...field}
							/>
						)}
					/>

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
				</section>
				<section className={styles['form-section']}>
					<p className={`${styles['desc']} profile-desc`}>Set new password</p>
					<Controller
						control={control}
						name='oldPassword'
						render={({ field }) => (
							<PasswordInput
								placeholder='Old password'
								error={errors.oldPassword as FieldError}
								{...field}
							/>
						)}
					/>
					<Controller
						control={control}
						name='newPassword'
						render={({ field }) => (
							<PasswordInput
								placeholder='New password'
								error={errors.newPassword as FieldError}
								{...field}
							/>
						)}
					/>
					<Controller
						control={control}
						name='confirmNewPassword'
						render={({ field }) => (
							<PasswordInput
								placeholder='Repeat new password'
								error={errors.confirmNewPassword as FieldError}
								{...field}
							/>
						)}
					/>
					<a href='#!' className={styles['forgot-password']}>
						Aizmirsu paroli?
					</a>
				</section>
			</div>
			<div className={styles['form-actions']}>
				<Button variant='outline' onClick={() => reset()}>
					Cancel
				</Button>
				<Button type='submit'>Save</Button>
			</div>
		</form>
	);
};

export default ProfileInfoForm;
