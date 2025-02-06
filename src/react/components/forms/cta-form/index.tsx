import { Controller, FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ctaSchema, ctaSchemaType } from '@@/constants/forms';

import { Input } from '../../inputs/input';
import Radio from '../../inputs/radio';
import Button from '../../ui/button';

import styles from './cta-form.module.scss';

interface Props {
	className?: string;
}

const CtaForm = ({ className }: Props) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<ctaSchemaType>({
		resolver: zodResolver(ctaSchema),
		defaultValues: {
			email: '',
			isCheck: false,
		},
	});

	const ctaSubmit = async (data: ctaSchemaType) => {
		try {
			console.log(data);
			reset();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			className={`${styles['form']} ${className}`}
			onSubmit={handleSubmit(ctaSubmit)}
		>
			<Controller
				control={control}
				name='email'
				render={({ field }) => (
					<Input
						placeholder='E-pasta adrese'
						error={errors.email as FieldError}
						{...field}
					/>
				)}
			/>
			<Controller
				control={control}
				name='isCheck'
				render={({ field }) => (
					<Radio
						className={styles['radio']}
						error={errors.isCheck}
						{...field}
						value={field.value ? 'true' : 'false'}
					>
						<span>
							Apstiprinu, ka esmu iepazinies ar{' '}
							<a href='#!'>Privātumu Politiku</a>
						</span>
					</Radio>
				)}
			/>
			<Button type='submit' className={styles['btn']}>
				Pierakstīties
			</Button>
		</form>
	);
};

export default CtaForm;
