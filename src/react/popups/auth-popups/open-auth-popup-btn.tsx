import { togglePopup } from '@@/scripts/helpers/toggle-popup';
import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';

interface Props {
  child: JSX.Element;
}

const OpenAuthPopupBtn = ({ child }: Props) => {
  const { setIsOpen, isOpen } = useComponentsStore(
    useShallow((state) => ({
      isOpen: state.isAuthPopupOpen,
      setIsOpen: state.setIsAuthPopupOpen,
    })),
  );

  const handleClick = () => {
    togglePopup({ setIsOpen, isOpen });
  };

  return <button onClick={handleClick}>{child}</button>;
};

export default OpenAuthPopupBtn;
