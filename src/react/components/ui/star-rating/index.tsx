import { forwardRef, useEffect, useState } from 'react';
import { FieldError } from 'react-hook-form';

import StarIcon from '../../icons/star-icon';
import FormError from '../form-error';

import styles from './star-rating.module.scss';

interface Props {
	className?: string;
	error: FieldError | undefined;
	onChange?: (value: number) => void;
	isSubmitSuccessful?: boolean;
}

const stars = Array(5).fill(0);

const StarRating = forwardRef(
	(
		{ className, error, onChange, isSubmitSuccessful, ...props }: Props,
		ref: React.ForwardedRef<HTMLInputElement>,
	) => {
		const [rating, setRating] = useState(0);
		const [hoverValue, setHoverValue] = useState(0);

		const handleFocusStar = (value: number) => {
			setHoverValue(value);
			setRating(value);
		};

		const handleMouseLeaveStar = () => {
			setHoverValue(0);
			setRating(0);
		};

		const handleClickStar = (value: number) => {
			setRating(value);
		};

		useEffect(() => {
			if (onChange && !isSubmitSuccessful) {
				onChange(rating);
			}
		}, [rating, ref, onChange, isSubmitSuccessful]);

		useEffect(() => {
			if (isSubmitSuccessful) {
				setRating(0);
				setHoverValue(0);
			}
		}, [isSubmitSuccessful]);

		return (
			<div className={`${styles['star-rating-wrapper']} ${className}`}>
				<div className={`${styles['star-rating']}`}>
					{stars.map((_, index) => {
						return (
							<button
								key={index}
								type='button'
								onClick={() => handleClickStar(index + 1)}
								onMouseLeave={() => handleMouseLeaveStar}
								onMouseEnter={() => handleFocusStar(index + 1)}
							>
								<StarIcon
									fill={
										(hoverValue || rating) > index ? 'var(--accent)' : 'none'
									}
									stroke={
										(hoverValue || rating) > index ? 'none' : 'var(--black)'
									}
									size={20}
									className={styles['star']}
								/>
							</button>
						);
					})}
				</div>
				<input
					// style={{ display: 'none' }}
					type='hidden'
					value={rating}
					{...props}
					ref={ref}
				/>
				<FormError error={error} />
			</div>
		);
	},
);

export default StarRating;
