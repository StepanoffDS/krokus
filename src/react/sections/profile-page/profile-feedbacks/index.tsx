import ProfileProductCard from '@@/react/components/cards/profile-product-card';
import styles from './profile-feedbacks.module.scss';
import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import product from '@@/react/components/illustrations/product.png';

interface Props {
  className?: string;
}

const ProfileFeedbacks = ({ className }: Props) => {
  return (
    <ProfileWrapperContainer className={className} title="Leave feedback">
      <section className={styles['listing']}>
        {[...Array(3)].map((_, index) => (
          <ProfileProductCard
            key={index}
            img={product}
            productId={'#980778980'}
            desc={'Red roses big bouquet'}
            date={'23.04.2024'}
            buttonType={'leave'}
          />
        ))}
      </section>
    </ProfileWrapperContainer>
  );
};

export default ProfileFeedbacks;
