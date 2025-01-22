import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';
import styles from './photo-feedback-popup.module.scss';
import PopupContainer from '../popup-container';
import product from '@@/react/components/illustrations/product.png';
import Button from '@@/react/components/ui/button';
import ProductInfoPopup from '@@/react/components/ui/product-info-popup';
import React, { useId, useState } from 'react';
import PhotoDeleteIcon from '@@/react/components/icons/photo-delete-icon';

const PhotoFeedbackPopup = () => {
  const { isOpen, setIsOpen } = useComponentsStore(
    useShallow((state) => ({
      isOpen: state.isPhotoFeedbackPopupOpen,
      setIsOpen: state.setIsPhotoFeedbackPopupOpen,
    })),
  );

  const imageId = useId();
  const [fileName, setFileName] = useState('');

  const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

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
          <h3 className={styles['form-title']}>Photo Feedback</h3>
          <form
            className={`${styles['popup-form']} ${
              true && styles['popup-form--opened']
            }`}
          >
            <div className={styles['upload']}>
              <input
                type="file"
                id={imageId}
                onChange={handleChangePhoto}
                accept="image/png, image/jpeg"
              />
              <p className={styles['upload-text']}>
                You can upload a photo PNG, JPG &lt; 5MB
              </p>
              {!fileName && (
                <label htmlFor={imageId} className={styles['upload-btn']}>
                  Upload photo
                </label>
              )}
              {fileName && (
                <label htmlFor={imageId} className={styles['file-name']}>
                  {fileName} <PhotoDeleteIcon />
                </label>
              )}
            </div>
            {fileName && (
              <Button type="submit" className={styles['btn']}>
                Submit
              </Button>
            )}
          </form>
        </section>
      </div>
    </PopupContainer>
  );
};

export default PhotoFeedbackPopup;
