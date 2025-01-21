import { useClickOutside } from '@@/scripts/hooks/use-click-outside';
import { useRef, useState } from 'react';
import styles from './popup-container.module.scss';
import CloseIcon from '@@/react/components/icons/close-icon';

interface Props {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  buttonElem?: JSX.Element;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const PopupContainer = ({
  className,
  children,
  buttonElem,
  isOpen,
  setIsOpen,
}: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    const classListAction = !isOpen ? 'add' : 'remove';
    document.body.classList[classListAction]('overlay');
  };

  useClickOutside({
    ref: popupRef,
    handler: () => {
      if (isOpen) {
        togglePopup();
      }
    },
  });

  return (
    <div>
      {buttonElem && (
        <button className={className} onClick={togglePopup}>
          {buttonElem}
        </button>
      )}

      <dialog
        open={isOpen}
        className={`${styles['popup']} ${className} ${
          isOpen ? styles['popup--open'] : ''
        }`}
      >
        <div className={styles['popup-content']} ref={popupRef}>
          <header className={styles['popup-header']}>
            <button onClick={togglePopup}>
              <CloseIcon />
            </button>
          </header>

          <main className={styles['popup-main']}>{children}</main>
        </div>
      </dialog>
    </div>
  );
};

export default PopupContainer;
