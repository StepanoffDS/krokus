import OpenFeedbackPopupBtn from '@@/react/popups/feedback-popup/open-feedback-popup-btn';
import Button from '../../ui/button';
import styles from './profile-product-card.module.scss';
import OpenPhotoFeedbackPopupBtn from '@@/react/popups/photo-feedback-popup/open-photo-feedback-popup-btn';

interface Props {
  productId: string;
  img: string;
  date: string;
  className?: string;
  buttonType?: 'upload' | 'leave';
  price?: string;
  qty?: string;
  desc?: string;
}

const ProfileProductCard = ({
  className,
  img,
  date,
  buttonType,
  price,
  qty,
  desc,
  productId,
}: Props) => {
  const buttonText = buttonType === 'upload' ? 'Upload' : 'Leave';

  return (
    <article
      className={`${styles['listing-item']} ${
        buttonType && styles['has-button']
      } ${className}`}
    >
      <img src={img} alt={desc} className={styles['product-img']} />
      <div className={styles['product-info']}>
        <p className={styles['product-code']}>{productId}</p>
        <h3 className={styles['product-name']}>{desc}</h3>
        {!buttonType && (
          <>
            <p className={styles['product-price']}>{price} €</p>
            <p className={styles['product-qty']}>Qty: {qty}</p>
          </>
        )}
        <p className={styles['product-date']}>{date}</p>
      </div>
      {buttonType && buttonType === 'leave' && (
        <OpenFeedbackPopupBtn className={styles['product-button']} />
      )}
      {buttonType && buttonType === 'upload' && (
        <OpenPhotoFeedbackPopupBtn className={styles['product-button']} />
      )}
    </article>
  );
};

export default ProfileProductCard;
