import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import product from '@@/react/components/illustrations/product.png';
import ProfilePhotoFeedbackCard from '@@/react/components/cards/profile-product-card/profile-photo-feedback-card';

import styles from './profile-photo-feedbacks.module.scss';

interface Props {
	className?: string;
}

const ProfilePhotoFeedbacks = ({ className }: Props) => {
	return (
		<ProfileWrapperContainer className={className} title='Photo feedbacks'>
			<section className={styles['listing']}>
				{[...Array(3)].map((_, index) => (
					<ProfilePhotoFeedbackCard
						key={index}
						img={product}
						productId={980778980}
						desc={'Red roses big bouquet'}
						date={'23.04.2024'}
					/>
				))}
			</section>
		</ProfileWrapperContainer>
	);
};

export default ProfilePhotoFeedbacks;
