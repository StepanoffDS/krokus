import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { feedbackSchema, FeedbackSchemaType } from '@@/constants/forms';

import StarRating from '../../ui/star-rating';
import Textarea from '../../inputs/input/textarea';
import Button from '../../ui/button';

import styles from './feedback-form.module.scss';

interface Props {
	className?: string;
	id: number;
}

const FeedbackForm = ({ className, id }: Props) => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm<FeedbackSchemaType>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: {
			id: id,
			rating: 0,
			comment: '',
		},
	});

	const feedbackSubmit = async (data: FeedbackSchemaType) => {
		try {
			console.log(data);
			reset();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			{!isSubmitSuccessful && (
				<form
					className={`${styles['popup-form']} ${styles['popup-form--opened']} ${className}`}
					onSubmit={handleSubmit(feedbackSubmit)}
				>
					<Controller
						control={control}
						name='rating'
						render={({ field, formState: { isSubmitSuccessful } }) => (
							<StarRating
								className={styles['star-rating']}
								error={errors.rating}
								{...field}
								ref={field.ref}
								onChange={field.onChange}
								isSubmitSuccessful={isSubmitSuccessful}
							/>
						)}
					/>
					<Controller
						control={control}
						name='comment'
						rules={{ required: true }}
						render={({ field }) => (
							<Textarea
								placeholder='Write your feedback'
								className={styles['form-input']}
								rows={4}
								resize='none'
								error={errors.comment}
								{...field}
								ref={field.ref}
							/>
						)}
					/>
					<Button type='submit' className={styles['btn']}>
						Submit
					</Button>
				</form>
			)}
			{isSubmitSuccessful && (
				<p className={'desc'}>Thank you! We’ve received your feedback</p>
			)}
		</>
	);
};

export default FeedbackForm;
