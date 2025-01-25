import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	photoFeedbackSchema,
	photoFeedbackSchemaType,
} from '@@/constants/forms';

import PhotoDeleteIcon from '../../icons/photo-delete-icon';
import Button from '../../ui/button';
import FormError from '../../ui/form-error';

import styles from './photo-feedback-form.module.scss';

interface Props {
	className?: string;
	id: number;
}

const PhotoFeedbackForm = ({ className, id }: Props) => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
		reset,
		clearErrors,
	} = useForm<photoFeedbackSchemaType>({
		resolver: zodResolver(photoFeedbackSchema),
		defaultValues: {
			file: undefined,
		},
	});

	const imageId = useId();
	const [fileName, setFileName] = useState('');

	const handleFileChange = (event) => {
		const fileList = event.target.files;
		if (fileList.length > 0) {
			setFileName(fileList[0].name);
		} else {
			setFileName('');
		}
		clearErrors('file'); // Очистка ошибок при новом выборе файла
	};

	const photoFeedbackSubmit = async (data: photoFeedbackSchemaType) => {
		const file = data.file[0]; // Получаем загруженный файл
		const formData = new FormData();

		// Добавляем файл в FormData
		formData.append('file', file);
		formData.append('id', id.toString());

		try {
			reset();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			className={`${styles['popup-form']} ${styles['popup-form--opened']} ${className}`}
			onSubmit={handleSubmit(photoFeedbackSubmit)}
		>
			{!isSubmitSuccessful && (
				<>
					<div className={styles['upload']}>
						<input
							id={imageId}
							type='file'
							{...register('file')}
							onChange={(e) => handleFileChange(e)}
						/>
						<FormError error={errors.file} />
						<p className={styles['upload-text']}>
							You can upload a photo PNG, JPG &lt; 5MB
						</p>
						{!fileName && (
							<label htmlFor={imageId} className={styles['upload-btn']}>
								Upload photo
							</label>
						)}
						{fileName && (
							<label htmlFor={imageId} className={styles['file-name']}>
								{fileName} <PhotoDeleteIcon />
							</label>
						)}
					</div>
					{fileName && (
						<Button type='submit' className={styles['btn']}>
							Submit
						</Button>
					)}
				</>
			)}
			{isSubmitSuccessful && (
				<p className='desc'>The photo was uploaded successfully</p>
			)}
		</form>
	);
};

export default PhotoFeedbackForm;
