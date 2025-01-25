import { Controller, FieldError, useForm } from 'react-hook-form';
import { regions } from '@@/constants/company-info';
import {
	clientSupportSchema,
	ClientSupportSchemaType,
} from '@@/constants/forms';
import { zodResolver } from '@hookform/resolvers/zod';

import { LabelInput } from '../../inputs/input';
import PhoneInputContainer from '../../inputs/phone';
import Select from '../../inputs/select';
import Textarea from '../../inputs/input/textarea';
import Button from '../../ui/button';

import styles from './client-support-form.module.scss';

interface Props {
	className?: string;
}

const ClientSupportForm = ({ className }: Props) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ClientSupportSchemaType>({
		resolver: zodResolver(clientSupportSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			region: regions[0].value,
			message: '',
		},
	});

	const clientSupportSubmit = async (data: ClientSupportSchemaType) => {
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			className={`${styles['profile-form']} ${className}`}
			onSubmit={handleSubmit(clientSupportSubmit)}
		>
			<div className={styles['form-sections']}>
				<Controller
					control={control}
					name='name'
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
					control={control}
					name='email'
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
				<Controller
					control={control}
					name='message'
					render={({ field }) => (
						<Textarea
							placeholder='Your message'
							className={styles['textarea']}
							rows={5}
							error={errors.message}
							{...field}
						/>
					)}
				/>
			</div>
			<div className={styles['form-actions']}>
				<Button variant='outline' onClick={() => reset()}>
					Cancel
				</Button>
				<Button type='submit'>Submit</Button>
			</div>
		</form>
	);
};

export default ClientSupportForm;
