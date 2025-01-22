import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import styles from './profile-photo-feedbacks.module.scss';
import ProfileProductCard from '@@/react/components/cards/profile-product-card';
import product from '@@/react/components/illustrations/product.png';

interface Props {
  className?: string;
}

const ProfilePhotoFeedbacks = ({ className }: Props) => {
  return (
    <ProfileWrapperContainer className={className} title="Photo feedbacks">
      <section className={styles['listing']}>
        {[...Array(3)].map((_, index) => (
          <ProfileProductCard
            key={index}
            img={product}
            productId={'#980778980'}
            desc={'Red roses big bouquet'}
            date={'23.04.2024'}
            buttonType={'upload'}
          />
        ))}
      </section>
    </ProfileWrapperContainer>
  );
};

export default ProfilePhotoFeedbacks;
