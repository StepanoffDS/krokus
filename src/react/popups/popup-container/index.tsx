import { useClickOutside } from '@@/scripts/hooks/use-click-outside';
import { useRef } from 'react';
import styles from './popup-container.module.scss';
import CloseIcon from '@@/react/components/icons/close-icon';
import { togglePopup } from '@@/scripts/helpers/toggle-popup';

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

  useClickOutside({
    ref: popupRef,
    handler: () => {
      if (isOpen) {
        togglePopup({
          setIsOpen,
          isOpen,
        });
      }
    },
  });

  return (
    <div>
      {buttonElem && (
        <button
          className={className}
          onClick={() => togglePopup({ setIsOpen, isOpen })}
        >
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
            {/* TODO: Сделать чтобы кнопка закрытия сбрасывала все данные в окне */}
            <button onClick={() => togglePopup({ setIsOpen, isOpen })}>
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
