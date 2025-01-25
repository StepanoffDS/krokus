import ProfileProductCard from '@@/react/components/cards/profile-product-card/profile-product-card';
import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import product from '@@/react/components/illustrations/product.png';

import styles from './profile-history.module.scss';

interface Props {
	className?: string;
}

const ProfileHistory = ({ className }: Props) => {
	return (
		<ProfileWrapperContainer className={className} title='Order history'>
			<section className={styles['listing']}>
				{[...Array(3)].map((_, index) => (
					<ProfileProductCard
						key={index}
						img={product}
						productId={980778980}
						desc={'Red roses big bouquet'}
						price={'24,99'}
						qty={'1'}
						date={'23.04.2024'}
					/>
				))}
			</section>
		</ProfileWrapperContainer>
	);
};

export default ProfileHistory;
