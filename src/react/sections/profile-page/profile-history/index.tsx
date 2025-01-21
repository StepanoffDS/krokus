import styles from './profile-history.module.scss';
import ProfileWrapperContainer from '@@/react/components/containers/profile-wrapper-container';
import product from '@@/react/components/illustrations/product.png';

interface Props {
  className?: string;
}

const ProfileHistory = ({ className }: Props) => {
  return (
    <ProfileWrapperContainer className={className} title="Order history">
      <section className={styles['listing']}>
        {[...Array(3)].map((_, index) => (
          <article key={index} className={styles['listing-item']}>
            <img
              src={product}
              alt="product"
              className={styles['product-img']}
            />
            <div className={styles['product-info']}>
              <p className={styles['product-code']}>#980778980</p>
              <h3 className={styles['product-name']}>Red roses big bouquet</h3>
              <p className={styles['product-price']}>24,99 €</p>
              <p className={styles['product-qty']}>Qty: 1</p>
              <time dateTime="2024-04-23" className={styles['product-date']}>
                23.04.2024
              </time>
            </div>
          </article>
        ))}
      </section>
    </ProfileWrapperContainer>
  );
};

export default ProfileHistory;
