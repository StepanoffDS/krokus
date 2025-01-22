import Button from '@@/react/components/ui/button';
import { togglePopup } from '@@/scripts/helpers/toggle-popup';
import { useComponentsStore } from '@@/store';
import { useShallow } from 'zustand/shallow';

interface Props {
  className?: string;
}

const OpenPhotoFeedbackPopupBtn = ({ className }: Props) => {
  const { isOpen, setIsOpen } = useComponentsStore(
    useShallow((state) => ({
      isOpen: state.isPhotoFeedbackPopupOpen,
      setIsOpen: state.setIsPhotoFeedbackPopupOpen,
    })),
  );

  const handleClick = () => {
    togglePopup({ setIsOpen, isOpen });
  };

  return (
    <Button className={className} onClick={handleClick}>
      Upload
    </Button>
  );
};

export default OpenPhotoFeedbackPopupBtn;
