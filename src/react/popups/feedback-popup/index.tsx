import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';
import styles from './feedback-popup.module.scss';
import PopupContainer from '../popup-container';
import product from '@@/react/components/illustrations/product.png';
import Textarea from '@@/react/components/inputs/input/textarea';
import StarRating from '@@/react/components/ui/star-rating';
import Button from '@@/react/components/ui/button';
import ProductInfoPopup from '@@/react/components/ui/product-info-popup';

const FeedbackPopup = () => {
  const { isOpen, setIsOpen } = useComponentsStore(
    useShallow((state) => ({
      isOpen: state.isFeedbackPopupOpen,
      setIsOpen: state.setIsFeedbackPopupOpen,
    })),
  );

  return (
    <PopupContainer
      className={styles['popup-container']}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={styles['popup-main']}>
        <section className={`${styles['popup-section']}`}>
          <ProductInfoPopup
            img={product}
            id="#980778980"
            desc="Red roses big bouquet"
            date="23.04.2024"
          />
        </section>
        <section className={`${styles['popup-section']}`}>
          <h3 className={styles['form-title']}>Feedback</h3>
          <form
            className={`${styles['popup-form']} ${
              true && styles['popup-form--opened']
            }`}
          >
            <StarRating className={styles['star-rating']} />
            <Textarea
              id="feedback"
              placeholder="Your feedback"
              className={styles['textarea']}
              rows={4}
            />
            <Button type="submit" className={styles['btn']}>
              Submit
            </Button>
          </form>
          <p
            className={`${styles['popup-thanks']} ${
              false && styles['popup-thanks--opened']
            }`}
          >
            Thank you! We’ve received your feedback
          </p>
        </section>
      </div>
    </PopupContainer>
  );
};

export default FeedbackPopup;
