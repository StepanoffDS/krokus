import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import product from '@@/react/components/illustrations/product.png';
import ProfileFeedbackCard from '@@/react/components/cards/profile-product-card/profile-feedback-card';

import styles from './profile-feedbacks.module.scss';

interface Props {
	className?: string;
}

const ProfileFeedbacks = ({ className }: Props) => {
	return (
		<ProfileWrapperContainer className={className} title='Leave feedback'>
			<section className={styles['listing']}>
				{[...Array(3)].map((_, index) => (
					<ProfileFeedbackCard
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

export default ProfileFeedbacks;
