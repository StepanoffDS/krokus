import { useState } from 'react';
import { ProductCard } from '@@/@types';
import PhotoFeedbackPopup from '@@/react/popups/photo-feedback-popup';

import ProfileProductCard from './profile-product-card';
import styles from './profile-product-card.module.scss';

const ProfilePhotoFeedbackCard = ({
	className,
	img,
	productId,
	desc,
	date,
}: ProductCard) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ProfileProductCard
			hasButton={true}
			productId={productId}
			img={img}
			desc={desc}
			date={date}
			className={className}
		>
			<PhotoFeedbackPopup
				className={styles['product-button']}
				id={productId}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</ProfileProductCard>
	);
};

export default ProfilePhotoFeedbackCard;
