import { useState } from 'react';
import FeedbackPopup from '@@/react/popups/feedback-popup';
import { ProductCard } from '@@/@types';

import ProfileProductCard from './profile-product-card';
import styles from './profile-product-card.module.scss';

const ProfileFeedbackCard = ({
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
			<FeedbackPopup
				className={styles['product-button']}
				id={productId}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</ProfileProductCard>
	);
};

export default ProfileFeedbackCard;
